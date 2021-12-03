import { RouteLocationNormalized, RouteLocationRaw } from 'vue-router';

import { ProgressStore, IsPuzzleID } from '@/store/ProgressStore';

type NavigationGuardReturn = void | Error | RouteLocationRaw | boolean;

export default function handleProgress<PuzzleID extends string>(
	to: RouteLocationNormalized,
	from: RouteLocationNormalized,
	isPuzzleID: IsPuzzleID<PuzzleID>,
	progressStore: ProgressStore<PuzzleID>,
): NavigationGuardReturn {
	const toNameString = String(to.name);

	if (toNameString === 'End' && !progressStore.ended) {
		// from.name is undefined when users inserts link that points to End directly,
		// so from is literally from empty browser plage.
		if (from.name === undefined) return { name: 'Home' };
		return false;
	}

	if (toNameString === 'Start' && progressStore.started) {
		if (from.name === undefined) return { name: 'Home' };
		return false;
	}

	if (!isPuzzleID(toNameString)) return true;
	if (progressStore.ended) return { name: 'End' };

	// If user was already redirected from some path then save the original path.
	const redirectedFromName = from.params.redirectedFromName ?? toNameString;
	if (!progressStore.started) return { name: 'Start', params: { redirectedFromName } };
	if (progressStore.puzzles[toNameString] === true) return { name: 'AlreadyDone', params: { redirectedFromName } };

	return true;
}
