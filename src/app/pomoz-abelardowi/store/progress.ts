import { useGtag } from 'vue-gtag-next';

import { defaultAction, defineProgressStore, isPuzzleIDFactory, Puzzles } from '@/store/ProgressStore';

import router from '@help/router';

export type PuzzleID = 'Bingo' | 'Emotions1' | 'Jacobson' | 'Rebus' | 'Matching' | 'PhoneNumbers';
const puzzleIDs: PuzzleID[] = ['Bingo', 'Emotions1', 'Jacobson', 'Rebus', 'Matching', 'PhoneNumbers'];
export const isPuzzleID = isPuzzleIDFactory(puzzleIDs);

export const useProgressStore = defineProgressStore({
	id: 'help.progress',
	state: () => {
		const puzzlesDone: Puzzles<PuzzleID> = {
			Bingo: false,
			Emotions1: false,
			Jacobson: false,
			Rebus: false,
			Matching: false,
			PhoneNumbers: false,
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
			if (this.ended) {
				const gtag = useGtag();
				gtag.event('game_end', { name: 'help-abelard' });
			}
		},
	},
});
