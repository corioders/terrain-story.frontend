export type puzzleID = 'Quiz' | 'QuestionTag';
const puzzleIDs = ['Quiz', 'QuestionTag'];

export function isPuzzleID(id: string): id is puzzleID {
	return puzzleIDs.includes(id);
}
