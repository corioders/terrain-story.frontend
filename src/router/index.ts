import { trackRouter } from 'vue-gtag-next';
import { createRouter as createVRouter, createWebHashHistory, RouteLocationRaw, Router, RouteRecordRaw, RouterOptions } from 'vue-router';

import { getRedirectedFromName } from './navigationGuard/progress';

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

	return router;
}

export function navigateToRedirectedFrom(router: Router): void {
	const redirectedFromName = getRedirectedFromName(router.currentRoute.value.query);

	let location: RouteLocationRaw;
	if (redirectedFromName !== undefined) location = { name: redirectedFromName };
	else location = { name: 'Home' };

	router.replace(location);
}
