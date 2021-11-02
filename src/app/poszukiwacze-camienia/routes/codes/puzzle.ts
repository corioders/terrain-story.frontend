export type puzzleID = 'Archaeologist' | 'Dancer' | 'Hacker' | 'Inspector' | 'Mage' | 'Princess' | 'Tourist' | 'Treasurer';
const puzzleIDs = ['Archaeologist', 'Dancer', 'Hacker', 'Inspector', 'Mage', 'Princess', 'Tourist', 'Treasurer'];

export function isPuzzleID(id: string): id is puzzleID {
	return puzzleIDs.includes(id);
}
