import { RouteLocationRaw } from 'vue-router';

import { defineProgressStore, Puzzles } from '@/store/ProgressStore';
import { removeLocalStorage } from '@/store/plugin/localStorage';

import router from '@eng/router';

export type PuzzleID = 'Quiz' | 'FestivalsMatching' | 'Gaps' | 'QuestionTag' | 'Carols' | 'Rebus';
const puzzleIDs = ['Quiz', 'FestivalsMatching', 'Gaps', 'QuestionTag', 'Carols', 'Rebus'];

export function isPuzzleID(id: string): id is PuzzleID {
	return puzzleIDs.includes(id);
}

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
			this.started = true;
			navigateToRedirectedFrom();
		},

		resetProgress() {
			this.$reset();
			removeLocalStorage(this);
			navigateToRedirectedFrom();
		},

		finishPuzzle(puzzleId: PuzzleID) {
			this.puzzles[puzzleId] = true;

			// Check if all puzzles are solved.
			if (!Object.values(this.puzzles).includes(false)) {
				this.ended = true;
				router.replace({ name: 'End' });
			} else {
				router.replace({ name: 'Done' });
			}
		},
	},
});

function navigateToRedirectedFrom(): void {
	const redirectedFromName = router.currentRoute.value.params['redirectedFromName'] as string;

	let location: RouteLocationRaw;
	if (redirectedFromName !== undefined) location = { name: redirectedFromName };
	else location = { name: 'Home' };

	router.replace(location);
}
