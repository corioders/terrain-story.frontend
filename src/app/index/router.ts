import { RouteRecordRaw } from 'vue-router';

import { createRouter } from '@/router';

import Home from '@index/routes/Home.vue';

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
];

const router = createRouter(routes);

export default router;
