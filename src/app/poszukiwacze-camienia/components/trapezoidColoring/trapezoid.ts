export interface Coordinates {
	x: number;
	y: number;
}

export interface TrapezoidDescriptor {
	dimensions: {
		width: number;
		height: number;
	};
	correctColors: Coordinates[];
}
