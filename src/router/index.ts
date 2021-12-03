import { createRouter as createVRouter, createWebHashHistory, Router, RouteRecordRaw, RouterOptions } from 'vue-router';

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
