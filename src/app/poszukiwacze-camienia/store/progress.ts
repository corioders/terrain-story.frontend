import { RouteLocationRaw } from 'vue-router';

import { defineProgressStore, Puzzles } from '@/store/ProgressStore';
import { removeLocalStorage } from '@/store/plugin/localStorage';

import router from '@rock/router';

export type PuzzleID = 'Archaeologist' | 'Dancer' | 'Hacker' | 'Inspector' | 'Mage' | 'Princess' | 'Tourist' | 'Treasurer';
const puzzleIDs = ['Archaeologist', 'Dancer', 'Hacker', 'Inspector', 'Mage', 'Princess', 'Tourist', 'Treasurer'];

export function isPuzzleID(id: string): id is PuzzleID {
	return puzzleIDs.includes(id);
}

export const useProgressStore = defineProgressStore({
	id: 'rock.progress',
	state: () => {
		const puzzlesDone: Puzzles<PuzzleID> = {
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
