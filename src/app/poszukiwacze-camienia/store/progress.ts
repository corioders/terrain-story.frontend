import { defaultAction, defineProgressStore, isPuzzleIDFactory, Puzzles } from '@/store/ProgressStore';

import router from '@rock/router';

export type PuzzleID = 'Archaeologist' | 'Dancer' | 'Hacker' | 'Inspector' | 'Mage' | 'Princess' | 'Tourist' | 'Treasurer';
const puzzleIDs: PuzzleID[] = ['Archaeologist', 'Dancer', 'Hacker', 'Inspector', 'Mage', 'Princess', 'Tourist', 'Treasurer'];
export const isPuzzleID = isPuzzleIDFactory(puzzleIDs);

export const useProgressStore = defineProgressStore({
	id: 'rock.progress',
	state: () => {
		const puzzlesDone: Puzzles<PuzzleID> = {
			Archaeologist: false,
			Dancer: false,
			Hacker: false,
			Inspector: false,
			Mage: false,
			Princess: false,
			Tourist: false,
			Treasurer: false,
		};

		return {
			started: false as boolean,
			ended: false as boolean,
			puzzles: puzzlesDone,
		};
	},
	actions: {
		start() {
			defaultAction.start(this, router);
		},
		resetProgress() {
			defaultAction.resetProgress(this, router);
		},

		finishPuzzle(puzzleID: PuzzleID) {
			defaultAction.finishPuzzle(this, router, puzzleID);
		},
	},
});
