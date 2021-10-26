import { defineStore } from 'pinia';
import { RouteLocationRaw } from 'vue-router';

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

			const toName = router.currentRoute.value.params['toName'] as string;

			let location: RouteLocationRaw;
			if (toName !== undefined) location = { name: toName };
			else location = { path: '/' };

			router.replace(location);
		},

		finishPuzzle(puzzleId: puzzleID) {
			this.puzzles[puzzleId] = true;
			router.replace({ name: 'Done' });
		},
	},
});
