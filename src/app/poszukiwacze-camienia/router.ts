import { Component } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import { RouteRecordRaw } from 'vue-router';

import { useProgressStore } from './store/progress';

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
		component: (): Promise<Component> => import('@rock/views/Done.vue'),
	},
	{
		path: `/juz-zrobione`,
		name: 'AlreadyDone',
		component: (): Promise<Component> => import('@rock/views/AlreadyDone.vue'),
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
		component: (): Promise<Component> => import('@rock/routes/Home.vue'),
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
		path: '/regulamin',
		name: 'TermsOfUse',
		component: (): Promise<Component> => import('@rock/routes/TermsOfUse.vue'),
	},
	{
		path: '/finansowanie',
		name: 'Financing',
		component: (): Promise<Component> => import('@/components/Financing.vue'),
	},
];

const router = createRouter({
	routes,
	history: createWebHashHistory(),
});

router.beforeEach((to) => {
	const store = useProgressStore();
	if (to.name !== 'Start' && !store.started) return { name: 'Start', params: { toName: String(to.name) } };
	if (to.name === 'End' && !store.ended) return false;

	return;
});

export default router;

export function nextRoute(): void {
	const meta = router.currentRoute.value.meta;
	if (meta.to && typeof meta.to == 'string') {
		router.replace({ name: meta.to, params: { artificial: 1 }, force: true });
	}
}
