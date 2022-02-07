import { RouteLocationNormalized } from 'vue-router';

import { ProgressStore, IsPuzzleID } from '@/store/ProgressStore';

import { NavigationGuardReturn } from './navigationGuard';

export function progressNavigationGuard<PuzzleID extends string>(
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

	// Redirect to route that user was originally on.

	// If user was already redirected then use the original name.
	const redirectedFromName = getRedirectedFromName(from.query) ?? toNameString;

  // Preserve original query.
	const query = to.query;
	setRedirectedFromName(query, redirectedFromName);

	if (!progressStore.started) return { name: 'Start', query };
	if (progressStore.puzzles[toNameString] === true) return { name: 'AlreadyDone', query };

	return true;
}

const redirectedFromNameQueryKey = 'r';
export function getRedirectedFromName(query: RouteLocationNormalized['query']): string | undefined {
	let redirectedFromName = query[redirectedFromNameQueryKey];
	if (redirectedFromName instanceof Array) redirectedFromName = redirectedFromName[0];
	return redirectedFromName === null ? undefined : redirectedFromName;
}

export function setRedirectedFromName(query: RouteLocationNormalized['query'], redirectedFromName: string): void {
	query[redirectedFromNameQueryKey] = redirectedFromName;
}

export function deleteRedirectedFromName(query: RouteLocationNormalized['query']): void {
	delete query[redirectedFromNameQueryKey];
}
