import { createRouter, createWebHashHistory } from 'vue-router';
import { RouteRecordRaw } from 'vue-router';

import End from '@rock/routes/End.vue';
import Home from '@rock/routes/Home.vue';
import Start from '@rock/routes/Start.vue';
import Archaeologist from '@rock/routes/codes/Archaeologist.vue';
import Dancer from '@rock/routes/codes/Dancer.vue';
import Hacker from '@rock/routes/codes/Hacker.vue';
import Inspector from '@rock/routes/codes/Inspector.vue';
import Mage from '@rock/routes/codes/Mage.vue';
import Princess from '@rock/routes/codes/Princess.vue';
import Tourist from '@rock/routes/codes/Tourist.vue';
import Treasurer from '@rock/routes/codes/Treasurer.vue';

export const routes: RouteRecordRaw[] = [
	{
		path: `/end`,
		name: 'End',
		component: End,
	},
	{
		path: `/start`,
		name: 'Start',
		component: Start,
		meta: { to: 'Hacker' },
	},
	{
		path: `/archaeologist`,
		name: 'Archaeologist',
		component: Archaeologist,
		meta: { to: 'Tourist' },
	},
	{
		path: `/dancer`,
		name: 'Dancer',
		component: Dancer,
		meta: { to: 'Princess' },
	},
	{
		path: '/hacker',
		name: 'Hacker',
		component: Hacker,
		meta: { to: 'Mage' },
	},
	{
		path: '/',
		name: 'Home',
		component: Home,
		meta: { to: 'Start' },
	},
	{
		path: '/inspector',
		name: 'Inspector',
		component: Inspector,
		meta: { to: 'Treasurer' },
	},
	{
		path: '/mage',
		name: 'Mage',
		component: Mage,
		meta: { to: 'Inspector' },
	},
	{
		path: '/princess',
		name: 'Princess',
		component: Princess,
		meta: { to: 'Archaeologist' },
	},
	{
		path: '/tourist',
		name: 'Tourist',
		component: Tourist,
		meta: { to: 'End' },
	},
	{
		path: '/treasurer',
		name: 'Treasurer',
		component: Treasurer,
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
