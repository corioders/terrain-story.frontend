import { Component } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import { RouteRecordRaw } from 'vue-router';

import handleNextRoute from '@/router/handleNextRoute';
import handleProgress from '@/router/handleProgress';

import Home from '@rock/routes/Home.vue';

import { useProgressStore, isPuzzleID } from '@rock/store/progress';

export const routes: RouteRecordRaw[] = [
	{
		path: `/koniec`,
		name: 'End',
		component: (): Promise<Component> => import('@rock/views/End.vue'),
	},
	{
		path: `/start`,
		name: 'Start',
		component: (): Promise<Component> => import('@rock/views/Start.vue'),
		meta: { to: 'Hacker' },
	},
	{
		path: `/zrobione`,
		name: 'Done',
		component: (): Promise<Component> => import('@/views/Done.vue'),
	},
	{
		path: `/juz-zrobione`,
		name: 'AlreadyDone',
		component: (): Promise<Component> => import('@rock/views/AlreadyDoneWrapper.vue'),
	},
	{
		path: `/archeolog`,
		name: 'Archaeologist',
		component: (): Promise<Component> => import('@rock/routes/codes/Archaeologist.vue'),
		meta: { to: 'Tourist' },
	},
	{
		path: `/tancerz`,
		name: 'Dancer',
		component: (): Promise<Component> => import('@rock/routes/codes/Dancer.vue'),
		meta: { to: 'Princess' },
	},
	{
		path: '/haker',
		name: 'Hacker',
		component: (): Promise<Component> => import('@rock/routes/codes/Hacker.vue'),
		meta: { to: 'Mage' },
	},
	{
		path: '/',
		name: 'Home',
		component: Home,
		meta: { to: 'Start' },
	},
	{
		path: '/inspektor',
		name: 'Inspector',
		component: (): Promise<Component> => import('@rock/routes/codes/Inspector.vue'),
		meta: { to: 'Treasurer' },
	},
	{
		path: '/mag',
		name: 'Mage',
		component: (): Promise<Component> => import('@rock/routes/codes/Mage.vue'),
		meta: { to: 'Inspector' },
	},
	{
		path: '/ksiezniczka',
		name: 'Princess',
		component: (): Promise<Component> => import('@rock/routes/codes/Princess.vue'),
		meta: { to: 'Archaeologist' },
	},
	{
		path: '/turysta',
		name: 'Tourist',
		component: (): Promise<Component> => import('@rock/routes/codes/Tourist.vue'),
		meta: { to: 'End' },
	},
	{
		path: '/skarbek',
		name: 'Treasurer',
		component: (): Promise<Component> => import('@rock/routes/codes/Treasurer.vue'),
		meta: { to: 'Dancer' },
	},
	{
		path: '/mapa',
		name: 'Map',
		component: (): Promise<Component> => import('@rock/routes/Map.vue'),
	},
	{
		path: '/o-grze',
		name: 'AboutGame',
		component: (): Promise<Component> => import('@rock/routes/AboutGame.vue'),
	},
	{
		path: '/jak-grac',
		name: 'HowToPlay',
		component: (): Promise<Component> => import('@rock/routes/HowToPlay.vue'),
	},
	{
		path: '/regulamin',
		name: 'TermsOfUse',
		component: (): Promise<Component> => import('@rock/routes/TermsOfUse.vue'),
	},
	{
		path: '/polityka-prywatnosci',
		name: 'PrivacyPolicy',
		component: (): Promise<Component> => import('@rock/routes/PrivacyPolicy.vue'),
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

const router = createRouter({
	routes,
	history: createWebHashHistory(),
	scrollBehavior() {
		return { top: 0 };
	},
});

router.beforeEach((to, from) => handleProgress(to, from, isPuzzleID, useProgressStore()));

export default router;

export function nextRoute(): void {
	handleNextRoute(router);
}
