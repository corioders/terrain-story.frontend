export type puzzleID = 'Quiz' | 'FestivalsMatching' | 'Gaps' | 'QuestionTag' | 'Carols';
const puzzleIDs = ['Quiz', 'FestivalsMatching', 'Gaps', 'QuestionTag', 'Carols'];

export function isPuzzleID(id: string): id is puzzleID {
	return puzzleIDs.includes(id);
}
