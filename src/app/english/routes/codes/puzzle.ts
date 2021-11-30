export type puzzleID = 'Quiz' | 'FestivalsMatching' | 'QuestionTag';
const puzzleIDs = ['Quiz', 'FestivalsMatching', 'QuestionTag'];

export function isPuzzleID(id: string): id is puzzleID {
	return puzzleIDs.includes(id);
}
