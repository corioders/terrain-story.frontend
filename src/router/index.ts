import { createRouter as createVRouter, createWebHashHistory, RouteLocationRaw, Router, RouteRecordRaw, RouterOptions } from 'vue-router';

export function createRouter(routes: RouteRecordRaw[], options?: Omit<RouterOptions, 'history' | 'routes'>): Router {
	return createVRouter({
		routes: routes,
		history: createWebHashHistory(),
		scrollBehavior() {
			return { top: 0 };
		},

		...options,
	});
}

export function navigateToRedirectedFrom(router: Router): void {
	const redirectedFromName = router.currentRoute.value.params['redirectedFromName'] as string;

	let location: RouteLocationRaw;
	if (redirectedFromName !== undefined) location = { name: redirectedFromName };
	else location = { name: 'Home' };

	router.replace(location);
}