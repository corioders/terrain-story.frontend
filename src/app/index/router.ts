import { createRouter, createWebHashHistory } from 'vue-router';
import { RouteRecordRaw } from 'vue-router';

import Home from '@index/routes/Home.vue';

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
	scrollBehavior() {
		return { top: 0 };
	},
});

export default router;
