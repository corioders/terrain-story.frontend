export type puzzleID = 'Quiz' | 'FestivalsMatching' | 'Gaps' | 'QuestionTag' | 'Carols' | 'Rebus';
const puzzleIDs = ['Quiz', 'FestivalsMatching', 'Gaps', 'QuestionTag', 'Carols', 'Rebus'];

export function isPuzzleID(id: string): id is puzzleID {
	return puzzleIDs.includes(id);
}
