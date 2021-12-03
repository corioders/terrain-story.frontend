import { Router } from 'vue-router';

export function nextRouteDevHelper(router: Router): void {
	const meta = router.currentRoute.value.meta;
	if (typeof meta.to === 'string') {
		router.replace({ name: meta.to, params: { artificial: 1 }, force: true });
	}
}
