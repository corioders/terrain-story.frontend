import { Component } from 'vue';
import { RouteRecordRaw } from 'vue-router';

import { createRouter } from '@/router';
import { nextRouteDevHelper } from '@/router/devHelpers/nextRoute';
import { progressNavigationGuard } from '@/router/navigationGuard/progress';

import Home from '@eng/routes/Home.vue';
import { isPuzzleID, useProgressStore } from '@eng/store/progress';

export const routes: RouteRecordRaw[] = [
	{
		path: `/start`,
		name: 'Start',
		component: (): Promise<Component> => import('@eng/views/StartWrapper.vue'),
		meta: { to: 'Quiz' },
	},
	{
		path: `/koniec`,
		name: 'End',
		component: (): Promise<Component> => import('@eng/views/End.vue'),
	},
	{
		path: `/zrobione`,
		name: 'Done',
		component: (): Promise<Component> => import('@eng/views/DoneWrapper.vue'),
	},
	{
		path: `/juz-zrobione`,
		name: 'AlreadyDone',
		component: (): Promise<Component> => import('@eng/views/AlreadyDoneWrapper.vue'),
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
	// {
	// 	path: '/mapa',
	// 	name: 'Map',
	// 	component: (): Promise<Component> => import('@eng/routes/Map.vue'),
	// },
	{
		path: '/carols',
		name: 'Carols',
		component: (): Promise<Component> => import('@eng/routes/puzzles/Carols.vue'),
		meta: { to: 'Rebus' },
	},
	{
		path: '/festivals-matching',
		name: 'FestivalsMatching',
		component: (): Promise<Component> => import('@eng/routes/puzzles/FestivalsMatching.vue'),
		meta: { to: 'Gaps' },
	},
	{
		path: '/gaps',
		name: 'Gaps',
		component: (): Promise<Component> => import('@eng/routes/puzzles/Gaps.vue'),
		meta: { to: 'QuestionTag' },
	},
	{
		path: '/question-tag',
		name: 'QuestionTag',
		component: (): Promise<Component> => import('@eng/routes/puzzles/QuestionTag.vue'),
		meta: { to: 'Carols' },
	},
	{
		path: '/quiz',
		name: 'Quiz',
		component: (): Promise<Component> => import('@eng/routes/puzzles/Quiz.vue'),
		meta: { to: 'FestivalsMatching' },
	},
	{
		path: '/rebus',
		name: 'Rebus',
		component: (): Promise<Component> => import('@eng/routes/puzzles/Rebus.vue'),
		meta: { to: 'End' },
	},
	{
		path: '/polityka-prywatnosci',
		name: 'PrivacyPolicy',
		component: (): Promise<Component> => import('@eng/routes/PrivacyPolicyWrapper.vue'),
	},
	{
		path: '/finansowanie',
		name: 'Financing',
		component: (): Promise<Component> => import('@/views/Financing.vue'),
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
