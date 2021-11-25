<template>
	<div id="app">
		<Header />
		<VFlex gap="12px">
			<router-view />
			<MapLink v-if="isPuzzleID($route.name) || $route.name === 'AlreadyDone'" mapUrl="/mapa" />
			<SkipNav v-if="!IS_PRODUCTION" :nextRoute="nextRoute" />
		</VFlex>
		<CFooter />
	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	import Header from '@/components/Header.vue';
	import SkipNav from '@/components/devHelpers/SkipNav.vue';
	import MapLink from '@/components/map/MapLink.vue';

	import { VFlex } from '@corioders/vueui';
	import CFooter from '@rock/components/Footer.vue';
	import { nextRoute } from '@rock/router';
	import { isPuzzleID } from '@rock/routes/codes/puzzle';

	export default defineComponent({
		components: {
			CFooter,
			VFlex,
			Header,
			MapLink,
			SkipNav,
		},
		setup() {
			return { nextRoute, isPuzzleID, IS_PRODUCTION: __IS_PRODUCTION__ };
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