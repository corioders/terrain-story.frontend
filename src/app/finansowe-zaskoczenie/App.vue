<template>
	<div id="app">
		<Header />
		<VFlex gap="12px">
			<router-view />
			<!-- <MapLink v-if="(typeof $route.name === 'string' && isPuzzleID($route.name)) || $route.name === 'AlreadyDone'" mapUrl="/mapa" /> -->
			<SkipNav v-if="!IS_PRODUCTION" :nextRoute="nextRoute" />
		</VFlex>
		<FooterWrapper />
	</div>
</template>
<script lang="ts">
// import MapLink from '@/components/map/MapLink.vue';
import { VFlex } from '@corioders/vueui';
import FooterWrapper from '@fin/components/FooterWrapper.vue';
import { nextRoute } from '@fin/router';
import { isPuzzleID } from '@fin/store/progress';
import { defineComponent } from 'vue';

import Header from '@/components/Header.vue';
import SkipNav from '@/components/devHelpers/SkipNav.vue';

export default defineComponent({
	name: 'App',
	components: {
		FooterWrapper,
		VFlex,
		Header,
		// MapLink,
		SkipNav,
	},
	setup() {
		return { nextRoute, isPuzzleID: isPuzzleID, IS_PRODUCTION: __IS_PRODUCTION__ };
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
