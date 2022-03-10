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
		meta: { to: 'Bingo' },
	},
	{
		path: `/roznice`,
		name: 'PhotoDifferences',
		component: (): Promise<Component> => import('@fin/routes/puzzles/PhotoDifferences.vue'),
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
	// {
	// 	path: `/bingo`,
	// 	name: 'Bingo',
	// 	component: (): Promise<Component> => import('@fin/routes/puzzles/Bingo.vue'),
	// 	meta: { to: 'Emotions1' },
	// },
	// {
	// 	path: `/emocje1`,
	// 	name: 'Emotions1',
	// 	component: (): Promise<Component> => import('@fin/routes/puzzles/Emotions1.vue'),
	// 	meta: { to: 'Emotions2' },
	// },
	// {
	// 	path: `/emocje2`,
	// 	name: 'Emotions2',
	// 	component: (): Promise<Component> => import('@fin/routes/puzzles/Emotions2.vue'),
	// 	meta: { to: 'Jacobson' },
	// },
	// {
	// 	path: '/jacobson',
	// 	name: 'Jacobson',
	// 	component: (): Promise<Component> => import('@fin/routes/puzzles/Jacobson.vue'),
	// 	meta: { to: 'Rebus' },
	// },
	// {
	// 	path: '/rebus',
	// 	name: 'Rebus',
	// 	component: (): Promise<Component> => import('@fin/routes/puzzles/Rebus.vue'),
	// 	meta: { to: 'Matching1' },
	// },
	// {
	// 	path: '/rozsypanka1',
	// 	name: 'Matching1',
	// 	component: (): Promise<Component> => import('@fin/routes/puzzles/Matching1.vue'),
	// 	meta: { to: 'Matching2' },
	// },
	// {
	// 	path: '/rozsypanka2',
	// 	name: 'Matching2',
	// 	component: (): Promise<Component> => import('@fin/routes/puzzles/Matching2.vue'),
	// 	meta: { to: 'PhoneNumbers' },
	// },
	// {
	// 	path: '/telefony-zaufania',
	// 	name: 'PhoneNumbers',
	// 	component: (): Promise<Component> => import('@fin/routes/puzzles/PhoneNumbers.vue'),
	// 	meta: { to: 'End' },
	// },
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
