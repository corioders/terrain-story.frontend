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
import { VFlex } from '@corioders/vueui';
import FooterWrapper from '@help/components/FooterWrapper.vue';
import { nextRoute } from '@help/router';
import { isPuzzleID } from '@help/store/progress';
import { defineComponent, Ref, watch } from 'vue';

import Header from '@/components/Header.vue';
import SkipNav from '@/components/devHelpers/SkipNav.vue';

import { useMainStore } from './store/main';

export default defineComponent({
	name: 'App',
	components: {
		FooterWrapper,
		VFlex,
		Header,
		SkipNav,
	},
	setup() {
		// Init ukrainian.
		const mainStore = useMainStore();
		window.isUA.value = mainStore.isUA;
		watch(window.isUA, (isUA) => {
			mainStore.isUA = isUA;
		});

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
