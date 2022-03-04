import { useGtag } from 'vue-gtag-next';

import { defaultAction, defineProgressStore, isPuzzleIDFactory, Puzzles } from '@/store/ProgressStore';

import router from '@recap/router';

import { useQuestionsStore } from './questions';

export type PuzzleID = '1' | '2' | '3' | '4' | '5' | '6';
export type PuzzleIDNumber = 1 | 2 | 3 | 4 | 5 | 6;
export const puzzleIDs: PuzzleID[] = ['1', '2', '3', '4', '5', '6'];
export const isPuzzleID = isPuzzleIDFactory(puzzleIDs);

export const useProgressStore = defineProgressStore({
	id: 'recap.progress',
	state: () => {
		const puzzlesDone: Puzzles<PuzzleID> = {
			1: false,
			2: false,
			3: false,
			4: false,
			5: false,
			6: false,
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
			const questionsStore = useQuestionsStore();
			questionsStore.reset();
		},
		finishPuzzle(puzzleID: PuzzleID) {
			defaultAction.finishPuzzle(this, router, puzzleID);
			if (this.ended) {
				const gtag = useGtag();
				gtag.event('game_end', { name: 'wygraj-mature' });
			}
		},
	},
});
