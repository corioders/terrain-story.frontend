import { defineStore } from 'pinia';
import { RouteLocationRaw } from 'vue-router';

import { removeLocalStorage } from '@/store/plugin/localStorage';

import router from '@rock/router';
import { puzzleID } from '@rock/routes/codes/puzzle';

type Puzzles = {
	[key in puzzleID]: boolean;
};

export const useProgressStore = defineStore({
	id: 'rock.progress',
	state: () => {
		const puzzlesDone: Puzzles = {
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
			started: false,
			ended: false,
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

		finishPuzzle(puzzleId: puzzleID) {
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
