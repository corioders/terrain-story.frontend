import { Component } from 'vue';
import { RouteRecordRaw } from 'vue-router';

import { createRouter } from '@/router';
import { nextRouteDevHelper } from '@/router/devHelpers/nextRoute';
import { progressNavigationGuard } from '@/router/navigationGuard/progress';

import { isPuzzleID, useProgressStore } from '@eng/store/progress';

export const routes: RouteRecordRaw[] = [
	{
		path: `/floorMap`,
		name: 'floorMap',
		component: (): Promise<Component> => import('@test/routes/floorMapWrapper.vue'),
	},
];

const router = createRouter(routes);

router.beforeEach((to, from) => progressNavigationGuard(to, from, isPuzzleID, useProgressStore()));

export default router;

export function nextRoute(): void {
	nextRouteDevHelper(router);
}
