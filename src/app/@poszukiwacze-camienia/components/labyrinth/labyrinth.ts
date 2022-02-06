export interface Range {
	from: number;
	to: number;
}

export type Directions = 'top' | 'bottom' | 'left' | 'right';
export interface ExpandedEmpty {
	x: Range;
	y: Range;
	side: Directions;
}
export interface Empty {
	x: ExpandedEmpty['y'] | number;
	y: ExpandedEmpty['y'] | number;
	side: Directions;
}

export function expandEmpty(empty: Empty | ExpandedEmpty): ExpandedEmpty {
	let xRange: Range;
	let yRange: Range;

	if (empty.x instanceof Object) {
		xRange = empty.x;
		if (xRange.from > xRange.to) {
			const xRangeFrom = xRange.from;
			xRange.from = xRange.to;
			xRange.to = xRangeFrom;
		}
	} else {
		xRange = { from: empty.x, to: empty.x };
	}

	if (empty.y instanceof Object) {
		yRange = empty.y;
		if (yRange.from > yRange.to) {
			const yRangeFrom = yRange.from;
			yRange.from = yRange.to;
			yRange.to = yRangeFrom;
		}
	} else {
		yRange = { from: empty.y, to: empty.y };
	}

	return { x: xRange, y: yRange, side: empty.side };
}

export interface LabyrinthDescriptor {
	lineWidth: number;
	cellPixels: number;
	dimensions: {
		width: number;
		height: number;
	};

	empties: Empty[];
	start: {
		x: number;
		y: number;
		side?: Directions;
	};
	end: {
		x: number;
		y: number;
	};
}

interface PlayerWall {
	top: boolean;
	bottom: boolean;
	left: boolean;
	right: boolean;
}

// From `${x}.${y}` to PlayerWall.
type PlayerWalls = Map<string, PlayerWall>;

export class Player {
	private readonly descriptor: LabyrinthDescriptor;
	private readonly ctx: CanvasRenderingContext2D;
	private readonly walls: PlayerWalls;

	private x: number;
	private y: number;

	constructor(descriptor: LabyrinthDescriptor, ctx: CanvasRenderingContext2D) {
		this.descriptor = descriptor;
		this.walls = Player.labyrinthDescriptorToWalls(descriptor);
		this.x = descriptor.start.x;
		this.y = descriptor.start.y;
		this.ctx = ctx;
	}

	move(direction: Directions): void {
		const key = Player.getKey(this.x, this.y);
		const wall = this.walls.get(key);
		if (wall === undefined) {
			throw new Error('Wall is undefined should never happen.');
		}

		switch (direction) {
			case 'top': {
				if (!wall.top) this.y--;
				break;
			}
			case 'bottom': {
				if (!wall.bottom) this.y++;
				break;
			}
			case 'left': {
				if (!wall.left) this.x--;
				break;
			}
			case 'right': {
				if (!wall.right) this.x++;
				break;
			}
		}
	}

	clear(): void {
		const yPixPos = this.y * this.descriptor.cellPixels + this.descriptor.lineWidth;
		const xPixPos = this.x * this.descriptor.cellPixels + this.descriptor.lineWidth;
		const a = this.descriptor.cellPixels - this.descriptor.lineWidth;
		this.ctx.clearRect(xPixPos, yPixPos, a, a);
	}

	draw(): void {
		const xPixPos = this.coordinateToCellCenter(this.x);
		const yPixPos = this.coordinateToCellCenter(this.y);
		this.ctx.beginPath();
		this.ctx.arc(xPixPos, yPixPos, 8, 0, 2 * Math.PI);
		this.ctx.stroke();
	}

	isOnEnd(): boolean {
		return this.x == this.descriptor.end.x && this.y == this.descriptor.end.y;
	}

	private coordinateToCellCenter(cord: number): number {
		return cord * this.descriptor.cellPixels + this.descriptor.cellPixels / 2;
	}

	private static wallsCache: Map<LabyrinthDescriptor, PlayerWalls> = new Map();
	private static labyrinthDescriptorToWalls(descriptor: LabyrinthDescriptor): PlayerWalls {
		if (Player.wallsCache.has(descriptor)) return Player.wallsCache.get(descriptor) as PlayerWalls;

		const walls: PlayerWalls = new Map();
		for (const empty of descriptor.empties) {
			const expandedEmpty = expandEmpty(empty);

			for (let xCord = expandedEmpty.x.from; xCord <= expandedEmpty.x.to; xCord++) {
				for (let yCord = expandedEmpty.y.from; yCord <= expandedEmpty.y.to; yCord++) {
					const key = this.getKey(xCord, yCord);
					Player.setWall(walls, key)[empty.side] = false;

					// Update walls around this.
					switch (empty.side) {
						case 'top': {
							const topKey = this.getKey(xCord, yCord - 1);
							Player.setWall(walls, topKey)['bottom'] = false;
							break;
						}
						case 'bottom': {
							const bottomKey = this.getKey(xCord, yCord + 1);
							Player.setWall(walls, bottomKey)['top'] = false;
							break;
						}
						case 'left': {
							const leftKey = this.getKey(xCord - 1, yCord);
							Player.setWall(walls, leftKey)['right'] = false;
							break;
						}
						case 'right': {
							const rightKey = this.getKey(xCord + 1, yCord);
							Player.setWall(walls, rightKey)['left'] = false;
							break;
						}
					}
				}
			}
		}

		// Set wall on entrance.
		if (descriptor.start.side !== undefined) {
			const startKey = this.getKey(descriptor.start.x, descriptor.start.y);
			Player.setWall(walls, startKey)[descriptor.start.side] = true;
		}

		Player.wallsCache.set(descriptor, walls);
		return walls;
	}

	private static setWall(walls: PlayerWalls, key: string): PlayerWall {
		if (walls.has(key)) {
			const wall = walls.get(key) as PlayerWall;
			return wall;
		} else {
			const wall: PlayerWall = {
				top: true,
				bottom: true,
				left: true,
				right: true,
			};

			walls.set(key, wall);
			return wall;
		}
	}

	private static getKey(x: number, y: number): string {
		return `${x}.${y}`;
	}
}
