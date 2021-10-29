<template>
	<h1>Poszukiwacze camienia</h1>
	<DevNav v-if="!IS_PRODUCTION" :routes="routes" />
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
			return { routes, IS_PRODUCTION: __IS_PRODUCTION__ };
		},
	});
</script>