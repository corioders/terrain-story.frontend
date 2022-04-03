import router from '@fin/router';
import { useGtag } from 'vue-gtag-next';

import { defaultAction, defineProgressStore, isPuzzleIDFactory, Puzzles } from '@/store/ProgressStore';

export type PuzzleID = 'Btc' | 'Card' | 'Crypto' | 'Inflation' | 'PhotoDifferences' | 'Rebus';
const puzzleIDs: PuzzleID[] = ['Btc', 'Card', 'Crypto', 'Inflation', 'PhotoDifferences', 'Rebus'];
export const isPuzzleID = isPuzzleIDFactory(puzzleIDs);

export const useProgressStore = defineProgressStore({
	id: 'economic.progress',
	state: () => {
		const puzzlesDone: Puzzles<PuzzleID> = {
			Btc: false,
			Card: false,
			Crypto: false,
			PhotoDifferences: false,
			Rebus: false,
			Inflation: false,
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
				gtag.event('game_end', { name: 'finansowe-zaskoczenie' });
			}
		},
	},
});