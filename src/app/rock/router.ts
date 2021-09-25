import { createRouter, createWebHashHistory } from 'vue-router';
import { RouteRecordRaw } from 'vue-router';

import Home from '@rock/routes/Home.vue';

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
];

const router = createRouter({
	routes,
	history: createWebHashHistory(),
});

export default router;
