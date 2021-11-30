export type puzzleID = 'Quiz';
const puzzleIDs = ['Quiz'];

export function isPuzzleID(id: string): id is puzzleID {
	return puzzleIDs.includes(id);
}
