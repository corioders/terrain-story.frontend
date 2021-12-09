import { trackRouter } from 'vue-gtag-next';
import { createRouter as createVRouter, createWebHashHistory, RouteLocationNormalized, RouteLocationRaw, Router, RouteRecordRaw, RouterOptions } from 'vue-router';

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

function isEmpty(o: object): boolean {
	return Object.keys(o).length === 0;
}

function keepQueryParamsNavigationGuard(to: RouteLocationNormalized, from: RouteLocationNormalized): NavigationGuardReturn {
	if (isEmpty(to.query) && !isEmpty(from.query)) {
		to.query = from.query;
		return to;
	}
}
