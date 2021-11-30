import { Component } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import { RouteRecordRaw } from 'vue-router';

import Home from '@eng/routes/Home.vue';

// import { isPuzzleID } from './routes/codes/puzzle';
// import { useProgressStore } from './store/progress';

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

// router.beforeEach((to, from) => {
// 	const store = useProgressStore();
// 	const toNameString = String(to.name);

// 	if (toNameString === 'End' && !store.ended) {
// 		// from.name is undefined when users inserts link that points to End directly,
// 		// so from is literally from empty browser plage.
// 		if (from.name === undefined) return { name: 'Home' };
// 		return false;
// 	}

// 	if (toNameString === 'Start' && store.started) {
// 		if (from.name === undefined) return { name: 'Home' };
// 		return false;
// 	}

// 	if (!isPuzzleID(toNameString)) return true;
// 	if (store.ended) return { name: 'End' };

// 	// If user was already redirected from some path then save the original path.
// 	const redirectedFromName = from.params.redirectedFromName ?? toNameString;
// 	if (!store.started) return { name: 'Start', params: { redirectedFromName } };
// 	if (store.puzzles[toNameString] === true) return { name: 'AlreadyDone', params: { redirectedFromName } };

// 	return true;
// });

export default router;

export function nextRoute(): void {
	const meta = router.currentRoute.value.meta;
	if (meta.to && typeof meta.to == 'string') {
		router.replace({ name: meta.to, params: { artificial: 1 }, force: true });
	}
}
