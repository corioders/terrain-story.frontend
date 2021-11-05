<template>
	<n-config-provider :theme-overrides="themeOverrides">
		<div id="app">
			<Header />
			<Flex gap="12px">
				<router-view />
				<MapLink v-if="isPuzzleID($route.name) || $route.name === 'AlreadyDone'" mapUrl="/mapa" />
				<SkipNav v-if="!IS_PRODUCTION" :nextRoute="nextRoute" />
			</Flex>
			<CFooter />
		</div>
		<n-global-style />
	</n-config-provider>
</template>

<script lang="ts">
	import { NConfigProvider, NGlobalStyle } from 'naive-ui';
	import { defineComponent } from 'vue';

	import Flex from '@/layouts/Flex.vue';

	import Header from '@/components/Header.vue';
	import SkipNav from '@/components/devHelpers/SkipNav.vue';
	import MapLink from '@/components/map/MapLink.vue';

	import { themeOverrides } from '@/theme/lightThemeOverrides';
	import CFooter from '@rock/components/Footer.vue';
	import { nextRoute } from '@rock/router';
	import { isPuzzleID } from '@rock/routes/codes/puzzle';

	export default defineComponent({
		components: {
			CFooter,
			Flex,
			Header,
			NConfigProvider,
			NGlobalStyle,
			MapLink,
			SkipNav,
		},
		setup() {
			return { nextRoute, themeOverrides, isPuzzleID, IS_PRODUCTION: __IS_PRODUCTION__ };
		},
	});
</script>
<style lang="scss">
	#app {
		font-family: v-sans;
		*,
		*::before,
		*::after {
			box-sizing: border-box;
		}
	}
</style>