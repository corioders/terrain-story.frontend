export interface FloorMapDescriptor<PuzzleID extends string> {
	floors: FloorDescriptor<PuzzleID>[];
}

export interface FloorDescriptor<PuzzleID extends string> {
	name: string;
	puzzles: PuzzleID[];
}
