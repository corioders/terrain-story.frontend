import { Component } from 'vue';
import { RouteRecordRaw } from 'vue-router';

import { createRouter } from '@/router';
import { nextRouteDevHelper } from '@/router/devHelpers/nextRoute';
import { progressNavigationGuard } from '@/router/navigationGuard/progress';

import Home from '@help/routes/Home.vue';
import { useProgressStore, isPuzzleID } from '@help/store/progress';

export const routes: RouteRecordRaw[] = [
	{
		path: `/start`,
		name: 'Start',
		component: (): Promise<Component> => import('@help/views/Start.vue'),
		meta: { to: 'Bingo' },
	},
	{
		path: `/koniec`,
		name: 'End',
		component: (): Promise<Component> => import('@help/views/End.vue'),
	},
	{
		path: `/zrobione`,
		name: 'Done',
		component: (): Promise<Component> => import('@help/views/DoneWrapper.vue'),
	},
	{
		path: `/juz-zrobione`,
		name: 'AlreadyDone',
		component: (): Promise<Component> => import('@help/views/AlreadyDoneWrapper.vue'),
	},
	{
		path: '/',
		name: 'Home',
		component: Home,
		meta: { to: 'Start' },
	},
	// {
	// 	path: '/mapa',
	// 	name: 'Map',
	// 	component: (): Promise<Component> => import('@help/routes/Map.vue'),
	// },
	{
		path: `/bingo`,
		name: 'Bingo',
		component: (): Promise<Component> => import('@help/routes/puzzles/Bingo.vue'),
		meta: { to: 'Emotions' },
	},
	{
		path: `/emocje`,
		name: 'Emotions',
		component: (): Promise<Component> => import('@help/routes/puzzles/Emotions.vue'),
		meta: { to: 'Jacobson' },
	},
	{
		path: '/jacobson',
		name: 'Jacobson',
		component: (): Promise<Component> => import('@help/routes/puzzles/Jacobson.vue'),
		meta: { to: 'Rebus' },
	},
	{
		path: '/rebus',
		name: 'Rebus',
		component: (): Promise<Component> => import('@help/routes/puzzles/Rebus.vue'),
		meta: { to: 'Matching' },
	},
	{
		path: '/rozsypanka',
		name: 'Matching',
		component: (): Promise<Component> => import('@help/routes/puzzles/Matching.vue'),
		meta: { to: 'PhoneNumbers' },
	},
	{
		path: '/telefony-zaufania',
		name: 'PhoneNumbers',
		component: (): Promise<Component> => import('@help/routes/puzzles/PhoneNumbers.vue'),
		meta: { to: 'End' },
	},

	// {
	// 	path: '/o-grze',
	// 	name: 'AboutGame',
	// 	component: (): Promise<Component> => import('@help/routes/AboutGame.vue'),
	// },
	// {
	// 	path: '/jak-grac',
	// 	name: 'HowToPlay',
	// 	component: (): Promise<Component> => import('@help/routes/HowToPlay.vue'),
	// },
	// {
	// 	path: '/polityka-prywatnosci',
	// 	name: 'PrivacyPolicy',
	// 	component: (): Promise<Component> => import('@help/routes/PrivacyPolicy.vue'),
	// },
	// {
	// 	path: '/regulamin',
	// 	name: 'TermsOfUse',
	// 	component: (): Promise<Component> => import('@help/routes/TermsOfUse.vue'),
	// },
	// {
	// 	path: '/finansowanie',
	// 	name: 'Financing',
	// 	component: (): Promise<Component> => import('@/views/Financing.vue'),
	// },
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
