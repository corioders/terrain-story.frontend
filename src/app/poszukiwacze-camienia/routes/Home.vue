<template>
	<h1>Poszukiwacze camienia</h1>
	<p>strona główna (po wejściu na strone nie przez kod qr)</p>
	<DevNav v-if="!__IS_PRODUCTION__" :routes="routes" />
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	import DevNav from '@/components/devHelpers/DevNav.vue';

	import { routes } from '@rock/router';

	export default defineComponent({
		name: 'Home',
		components: {
			DevNav,
		},
		setup() {
			return { routes, __IS_PRODUCTION__: __IS_PRODUCTION__ };
		},
	});
</script>