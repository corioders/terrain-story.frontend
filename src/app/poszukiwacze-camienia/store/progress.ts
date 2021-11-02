import { defineStore } from 'pinia';
import { RouteLocationRaw } from 'vue-router';

import { useVisitedIcon } from '@/components/map/leaflet/icon';
import { useDefaultIcon } from '@/components/map/leaflet/icon';

import mapData from '@rock/assets/map';
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
			icons: Array(mapData.pins.length).fill(useDefaultIcon()),
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

			this.icons[mapData.pins.findIndex((pin) => pin.mysteryName === puzzleId)] = useVisitedIcon();

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
