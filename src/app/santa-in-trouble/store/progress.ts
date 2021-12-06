import { useGtag } from 'vue-gtag-next';

import { defaultAction, defineProgressStore, isPuzzleIDFactory, Puzzles } from '@/store/ProgressStore';

import router from '@eng/router';

export type PuzzleID = 'Quiz' | 'FestivalsMatching' | 'Gaps' | 'QuestionTag' | 'Carols' | 'Rebus';
const puzzleIDs: PuzzleID[] = ['Quiz', 'FestivalsMatching', 'Gaps', 'QuestionTag', 'Carols', 'Rebus'];
export const isPuzzleID = isPuzzleIDFactory(puzzleIDs);

export const useProgressStore = defineProgressStore({
	id: 'english.progress',
	state: () => {
		const puzzlesDone: Puzzles<PuzzleID> = {
			Quiz: false,
			FestivalsMatching: false,
			Gaps: false,
			QuestionTag: false,
			Carols: false,
			Rebus: false,
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
				gtag.event('game_end', { name: 'santa-in-trouble' });
			}
		},
	},
});
