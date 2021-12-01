import { Component } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import { RouteRecordRaw } from 'vue-router';

import handleProgress from '@/handlers/handleProgress';
import Home from '@eng/routes/Home.vue';

import { isPuzzleID } from './routes/codes/puzzle';
import { useProgressStore } from './store/progress';

export const routes: RouteRecordRaw[] = [
	{
		path: `/koniec`,
		name: 'End',
		component: (): Promise<Component> => import('@eng/views/End.vue'),
	},
	{
		path: `/start`,
		name: 'Start',
		component: (): Promise<Component> => import('@eng/views/Start.vue'),
		meta: { to: 'Quiz' },
	},
	{
		path: `/zrobione`,
		name: 'Done',
		component: (): Promise<Component> => import('@/views/Done.vue'),
	},
	{
		path: `/juz-zrobione`,
		name: 'AlreadyDone',
		component: (): Promise<Component> => import('@eng/views/AlreadyDoneWrapper.vue'),
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
		component: (): Promise<Component> => import('@eng/routes/Map.vue'),
	},
	{
		path: '/quiz',
		name: 'Quiz',
		component: (): Promise<Component> => import('@eng/routes/codes/Quiz.vue'),
		meta: { to: 'FestivalsMatching' },
	},
	{
		path: '/festivals-matching',
		name: 'FestivalsMatching',
		component: (): Promise<Component> => import('@eng/routes/codes/FestivalsMatching.vue'),
		meta: { to: 'Gaps' },
	},
	{
		path: '/gaps',
		name: 'Gaps',
		component: (): Promise<Component> => import('@eng/routes/codes/Gaps.vue'),
		meta: { to: 'QuestionTag' },
	},
	{
		path: '/question-tag',
		name: 'QuestionTag',
		component: (): Promise<Component> => import('@eng/routes/codes/QuestionTag.vue'),
		meta: { to: 'Carols' },
	},
	{
		path: '/carols',
		name: 'Carols',
		component: (): Promise<Component> => import('@eng/routes/codes/Carols.vue'),
		meta: { to: 'Rebus' },
	},
	{
		path: '/rebus',
		name: 'Rebus',
		component: (): Promise<Component> => import('@eng/routes/codes/Rebus.vue'),
		meta: { to: 'End' },
	},
	// {
	// 	path: '/o-grze',
	// 	name: 'AboutGame',
	// 	component: (): Promise<Component> => import('@eng/routes/AboutGame.vue'),
	// },
	// {
	// 	path: '/jak-grac',
	// 	name: 'HowToPlay',
	// 	component: (): Promise<Component> => import('@eng/routes/HowToPlay.vue'),
	// },
	// {
	// 	path: '/regulamin',
	// 	name: 'TermsOfUse',
	// 	component: (): Promise<Component> => import('@eng/routes/TermsOfUse.vue'),
	// },
	// {
	// 	path: '/polityka-prywatnosci',
	// 	name: 'PrivacyPolicy',
	// 	component: (): Promise<Component> => import('@eng/routes/PrivacyPolicy.vue'),
	// },
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

const router = createRouter({
	routes,
	history: createWebHashHistory(),
	scrollBehavior() {
		return { top: 0 };
	},
});

router.beforeEach((to, from) => handleProgress(to, from,isPuzzleID,useProgressStore()));

export default router;

export function nextRoute(): void {
	const meta = router.currentRoute.value.meta;
	if (meta.to && typeof meta.to == 'string') {
		router.replace({ name: meta.to, params: { artificial: 1 }, force: true });
	}
}
