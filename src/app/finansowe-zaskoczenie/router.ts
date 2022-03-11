import Home from '@fin/routes/Home.vue';
import { useProgressStore, isPuzzleID } from '@fin/store/progress';
import { Component } from 'vue';
import { RouteRecordRaw } from 'vue-router';

import { createRouter } from '@/router';
import { nextRouteDevHelper } from '@/router/devHelpers/nextRoute';
import { progressNavigationGuard } from '@/router/navigationGuard/progress';

export const routes: RouteRecordRaw[] = [
	{
		path: `/start`,
		name: 'Start',
		component: (): Promise<Component> => import('@fin/views/StartWrapper.vue'),
		// meta: { to: 'Bingo' },
	},
	{
		path: `/koniec`,
		name: 'End',
		component: (): Promise<Component> => import('@fin/views/End.vue'),
	},
	{
		path: `/zrobione`,
		name: 'Done',
		component: (): Promise<Component> => import('@fin/views/DoneWrapper.vue'),
	},
	{
		path: `/juz-zrobione`,
		name: 'AlreadyDone',
		component: (): Promise<Component> => import('@fin/views/AlreadyDoneWrapper.vue'),
	},
	{
		path: `/jak-grac`,
		name: 'HowToPlay',
		component: (): Promise<Component> => import('@/views/HowToPlay.vue'),
	},
	{
		path: '/',
		name: 'Home',
		component: Home,
		meta: { to: 'Start' },
	},
	{
		path: '/mapa',
		name: 'Map',
		component: (): Promise<Component> => import('@fin/routes/Map.vue'),
	},
	{
		path: `/btc`,
		name: 'Btc',
		component: (): Promise<Component> => import('@fin/routes/puzzles/Btc.vue'),
		meta: { to: 'Card' },
	},
	{
		path: `/card`,
		name: 'Card',
		component: (): Promise<Component> => import('@fin/routes/puzzles/Card.vue'),
		meta: { to: 'Crypto' },
	},
	{
		path: `/crypto`,
		name: 'Crypto',
		component: (): Promise<Component> => import('@fin/routes/puzzles/Crypto.vue'),
		// meta: { to: 'Inflation' },
	},
	{
		path: `/roznice`,
		name: 'PhotoDifferences',
		component: (): Promise<Component> => import('@fin/routes/puzzles/PhotoDifferences.vue'),
		meta: { to: 'End' },
	},
	{
		path: '/polityka-prywatnosci',
		name: 'PrivacyPolicy',
		component: (): Promise<Component> => import('@fin/routes/PrivacyPolicyWrapper.vue'),
	},
	{
		path: '/finansowanie',
		name: 'Financing',
		component: (): Promise<Component> => import('@/views/Financing.vue'),
	},
	{
		path: '/zglos-blad',
		name: 'ReportBug',
		component: (): Promise<Component> => import('@/views/ReportBug'),
	},
	{
		path: '/:pathMatch(.*)*',
		redirect: '/',
	},
];

const router = createRouter(routes);

router.beforeEach((to, from) => progressNavigationGuard(to, from, isPuzzleID, useProgressStore()));

export default router;

export function nextRoute(): void {
	nextRouteDevHelper(router);
}
