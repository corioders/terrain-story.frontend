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

const routes: RouteRecordRaw[] = [
	{
		path: `/end`,
		name: 'End',
		component: End,
	},
	{
		path: `/start`,
		name: 'Start',
		component: Start,
	},
	{
		path: `/archaeologist`,
		name: 'Archaeologist',
		component: Archaeologist,
	},
	{
		path: `/dancer`,
		name: 'Dancer',
		component: Dancer,
	},
	{
		path: '/hacker',
		name: 'Hacker',
		component: Hacker,
	},
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/inspector',
		name: 'Inspector',
		component: Inspector,
	},
	{
		path: '/mage',
		name: 'Mage',
		component: Mage,
	},
	{
		path: '/princess',
		name: 'Princess',
		component: Princess,
	},
	{
		path: '/tourist',
		name: 'Tourist',
		component: Tourist,
	},
	{
		path: '/treasurer',
		name: 'Treasurer',
		component: Treasurer,
	},
];

const router = createRouter({
	routes,
	history: createWebHashHistory(),
});

export default router;
