import { trackRouter } from 'vue-gtag-next';
import {
	createRouter as createVRouter,
	createWebHashHistory,
	LocationQueryValue,
	RouteLocationNormalized,
	RouteLocationRaw,
	Router,
	RouteRecordRaw,
	RouterOptions,
} from 'vue-router';

import { NavigationGuardReturn } from './navigationGuard/navigationGuard';
import { deleteRedirectedFromName, getRedirectedFromName } from './navigationGuard/progress';

export function createRouter(routes: RouteRecordRaw[], options?: Omit<RouterOptions, 'history' | 'routes'>): Router {
	const router = createVRouter({
		routes: routes,
		history: createWebHashHistory(),
		scrollBehavior() {
			return { top: 0 };
		},

		...options,
	});
	trackRouter(router);
	router.beforeEach(keepQueryParamsNavigationGuard);

	return router;
}

export function navigateToRedirectedFrom(router: Router): void {
	const currentRoute = router.currentRoute.value;
	const redirectedFromName = getRedirectedFromName(currentRoute.query);

	const query = currentRoute.query;
	deleteRedirectedFromName(query);

	let location: RouteLocationRaw;
	if (redirectedFromName !== undefined) location = { name: redirectedFromName, query };
	else location = { name: 'Home', query };

	router.replace(location);
}

function geLocationID(router: Router, queryParamName: string): string | null {
	const floorMapLocationID = router.currentRoute.value.query[queryParamName] as LocationQueryValue | undefined;
	if (floorMapLocationID === undefined || floorMapLocationID === null) return null;
	return floorMapLocationID;
}

function getFloorMapLocationID(router: Router): string | null {
	// Below code (query parameter name) must be keep in sync with https://github.com/corioders/terrain-story.api/blob/master/data/gamesCode.jsonc
	return geLocationID(router, 'p');
}

function getLeafletMapLocationID(router: Router): string | null {
	// Below code (query parameter name) must be keep in sync with https://github.com/corioders/terrain-story.api/blob/master/data/gamesCode.jsonc
	return geLocationID(router, 'l');
}

function getLocationIDNoThrow(router: Router): string | null {
	return getFloorMapLocationID(router) ?? getLeafletMapLocationID(router);
}

export function getLocationID(router: Router): string {
	const locationID = getLocationIDNoThrow(router);
	if (locationID === null) throw new Error("Failed to retrieve locationID, check that your url has 'p' or 'l' query parameter");
	return locationID;
}

export function hasLocationID(router: Router): boolean {
	if (getLocationIDNoThrow(router) === null) return false;
	return true;
}

export function isFloorMap(router: Router): boolean {
	if (!hasLocationID(router)) return false;
	if (getFloorMapLocationID(router) === null) return false;
	return true;
}

export function isLeafletMap(router: Router): boolean {
	if (!hasLocationID(router)) return false;
	if (getLeafletMapLocationID(router) === null) return false;
	return true;
}

// Below code (locationKeys) must be keep in sync with https://github.com/corioders/terrain-story.api/blob/master/data/gamesCode.jsonc
const locationKeys = ['p', 'l'];
function keepQueryParamsNavigationGuard(to: RouteLocationNormalized, from: RouteLocationNormalized): NavigationGuardReturn {
	let wasInvalid = false;
	for (const key of locationKeys) {
		if (to.query[key] === undefined && from.query[key] !== undefined) {
			to.query[key] = from.query[key];
			wasInvalid = true;
		}
	}
	if (wasInvalid) return to;
}
