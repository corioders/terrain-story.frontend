export interface Coordinates {
	x: number;
	y: number;
}

export interface GridDescriptor {
	dimensions: {
		width: number;
		height: number;
	};
	correctColors: Coordinates[];
}
