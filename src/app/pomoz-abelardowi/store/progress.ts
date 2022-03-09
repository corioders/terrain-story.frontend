import router from '@help/router';
import { useGtag } from 'vue-gtag-next';

import { defaultAction, defineProgressStore, isPuzzleIDFactory, Puzzles } from '@/store/ProgressStore';

export type PuzzleID = 'Emotions' | 'Jacobson' | 'Rebus' | 'PhoneNumbers' | 'PsiColoring';
const puzzleIDs: PuzzleID[] = ['Emotions', 'Jacobson', 'Rebus', 'PhoneNumbers', 'PsiColoring'];
export const isPuzzleID = isPuzzleIDFactory(puzzleIDs);

export const useProgressStore = defineProgressStore({
	id: 'help.progress',
	state: () => {
		const puzzlesDone: Puzzles<PuzzleID> = {
			Emotions: false,
			Jacobson: false,
			Rebus: false,
			PhoneNumbers: false,
			PsiColoring: false,
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
