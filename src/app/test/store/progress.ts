import { defaultAction, defineProgressStore, isPuzzleIDFactory, Puzzles } from '@/store/ProgressStore';

import router from '@eng/router';

// export type PuzzleID = 'puzzleA' | 'puzzleB';
export type PuzzleID = never;
const puzzleIDs: PuzzleID[] = [];
export const isPuzzleID = isPuzzleIDFactory(puzzleIDs);

export const useProgressStore = defineProgressStore({
	id: 'test.progress',
	state: () => {
		const puzzlesDone: Puzzles<PuzzleID> = {};

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
