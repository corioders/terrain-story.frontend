import { Component } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import { RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
	{
		path: `/end`,
		name: 'End',
		component: (): Promise<Component> => import('@rock/routes/End.vue'),
	},
	{
		path: `/start`,
		name: 'Start',
		component: (): Promise<Component> => import('@rock/routes/Start.vue'),
		meta: { to: 'Hacker' },
	},
	{
		path: `/archaeologist`,
		name: 'Archaeologist',
		component: (): Promise<Component> => import('@rock/routes/codes/Archaeologist.vue'),
		meta: { to: 'Tourist' },
	},
	{
		path: `/dancer`,
		name: 'Dancer',
		component: (): Promise<Component> => import('@rock/routes/codes/Dancer.vue'),
		meta: { to: 'Princess' },
	},
	{
		path: '/hacker',
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
		path: '/inspector',
		name: 'Inspector',
		component: (): Promise<Component> => import('@rock/routes/codes/Inspector.vue'),
		meta: { to: 'Treasurer' },
	},
	{
		path: '/mage',
		name: 'Mage',
		component: (): Promise<Component> => import('@rock/routes/codes/Mage.vue'),
		meta: { to: 'Inspector' },
	},
	{
		path: '/princess',
		name: 'Princess',
		component: (): Promise<Component> => import('@rock/routes/codes/Princess.vue'),
		meta: { to: 'Archaeologist' },
	},
	{
		path: '/tourist',
		name: 'Tourist',
		component: (): Promise<Component> => import('@rock/routes/codes/Tourist.vue'),
		meta: { to: 'End' },
	},
	{
		path: '/treasurer',
		name: 'Treasurer',
		component: (): Promise<Component> => import('@rock/routes/codes/Treasurer.vue'),
		meta: { to: 'Dancer' },
	},
];

const router = createRouter({
	routes,
	history: createWebHashHistory(),
});

export default router;

export function nextRoute(): void {
	const meta = router.currentRoute.value.meta;
	if (meta.to && typeof meta.to == 'string') {
		router.replace({ name: meta.to, params: { artificial: 1 }, force: true });
	}
}
