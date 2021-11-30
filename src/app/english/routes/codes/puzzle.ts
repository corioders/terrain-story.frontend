export type puzzleID = 'Quiz' | 'FestivalsMatching' | 'Gaps' | 'QuestionTag';
const puzzleIDs = ['Quiz', 'FestivalsMatching', 'Gaps', 'QuestionTag'];

export function isPuzzleID(id: string): id is puzzleID {
	return puzzleIDs.includes(id);
}
