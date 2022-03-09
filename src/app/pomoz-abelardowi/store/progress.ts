import router from '@help/router';
import { useGtag } from 'vue-gtag-next';

import { defaultAction, defineProgressStore, isPuzzleIDFactory, Puzzles } from '@/store/ProgressStore';

export type PuzzleID = 'Emotions1' | 'Emotions2' | 'Jacobson' | 'Rebus' | 'PhoneNumbers';
const puzzleIDs: PuzzleID[] = ['Emotions1', 'Emotions2', 'Jacobson', 'Rebus', 'PhoneNumbers'];
export const isPuzzleID = isPuzzleIDFactory(puzzleIDs);

export const useProgressStore = defineProgressStore({
	id: 'help.progress',
	state: () => {
		const puzzlesDone: Puzzles<PuzzleID> = {
			Emotions1: false,
			Emotions2: false,
			Jacobson: false,
			Rebus: false,
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
