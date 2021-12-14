<template>
	<div id="app">
		<VFlex gap="12px">
			<router-view />
			<!-- <MapLink v-if="(typeof $route.name === 'string' && isPuzzleID($route.name)) || $route.name === 'AlreadyDone'" mapUrl="/mapa" /> -->
			<SkipNav v-if="!IS_PRODUCTION" :nextRoute="nextRoute" />
		</VFlex>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	import SkipNav from '@/components/devHelpers/SkipNav.vue';

	import { VFlex } from '@corioders/vueui';

	export default defineComponent({
		name: 'App',
		components: {
			VFlex,
			SkipNav,
		},
		setup() {
			return { IS_PRODUCTION: __IS_PRODUCTION__ };
		},
	});
</script>
<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500&display=swap');
	#app {
		font-family: 'Open Sans', sans-serif;
		* {
			box-sizing: border-box;
		}
	}
</style>
