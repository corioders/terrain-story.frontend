import { Component } from 'vue';
import { RouteRecordRaw } from 'vue-router';

import { createRouter } from '@/router';
import { nextRouteDevHelper } from '@/router/devHelpers/nextRoute';
import { progressNavigationGuard } from '@/router/navigationGuard/progress';

import Home from '@recap/routes/Home.vue';
import { useProgressStore, isPuzzleID } from '@recap/store/progress';

export const routes: RouteRecordRaw[] = [
	{
		path: `/start`,
		name: 'Start',
		component: (): Promise<Component> => import('@recap/views/StartWrapper.vue'),
	},
	{
		path: `/koniec`,
		name: 'End',
		component: (): Promise<Component> => import('@recap/views/End.vue'),
	},
	{
		path: `/zrobione`,
		name: 'Done',
		component: (): Promise<Component> => import('@recap/views/DoneWrapper.vue'),
	},
	{
		path: `/juz-zrobione`,
		name: 'AlreadyDone',
		component: (): Promise<Component> => import('@recap/views/AlreadyDoneWrapper.vue'),
	},
	// {
	// 	path: `/jak-grac`,
	// 	name: 'HowToPlay',
	// 	component: (): Promise<Component> => import('@/views/HowToPlay.vue'),
	// },
	{
		path: '/',
		name: 'Home',
		component: Home,
		meta: { to: 'Start' },
	},
	// {
	// 	path: '/mapa',
	// 	name: 'Map',
	// 	component: (): Promise<Component> => import('@recap/routes/Map.vue'),
	// },
	{
		path: '/pytanie1',
		name: '1',
		component: (): Promise<Component> => import('@recap/routes/Puzzle.vue'),
		props: { puzzleIndex: 0 },
	},
	{
		path: '/pytanie2',
		name: '2',
		component: (): Promise<Component> => import('@recap/routes/Puzzle.vue'),
		props: { puzzleIndex: 1 },
	},
	{
		path: '/pytanie3',
		name: '3',
		component: (): Promise<Component> => import('@recap/routes/Puzzle.vue'),
		props: { puzzleIndex: 2 },
	},
	{
		path: '/pytanie4',
		name: '4',
		component: (): Promise<Component> => import('@recap/routes/Puzzle.vue'),
		props: { puzzleIndex: 3 },
	},
	{
		path: '/pytanie5',
		name: '5',
		component: (): Promise<Component> => import('@recap/routes/Puzzle.vue'),
		props: { puzzleIndex: 4 },
	},
	{
		path: '/pytanie6',
		name: '6',
		component: (): Promise<Component> => import('@recap/routes/Puzzle.vue'),
		props: { puzzleIndex: 5 },
	},
	// {
	// 	path: '/polityka-prywatnosci',
	// 	name: 'PrivacyPolicy',
	// 	component: (): Promise<Component> => import('@recap/routes/PrivacyPolicyWrapper.vue'),
	// },
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
