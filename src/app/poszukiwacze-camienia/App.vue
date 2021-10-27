<template>
	<n-config-provider :theme-overrides="themeOverrides">
		<div id="app">
			<Flex gap="12px">
				<router-view />
				<MapLink mapUrl="/mapa" />
				<SkipNav v-if="!__IS_PRODUCTION__" :nextRoute="nextRoute" />
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

	import SkipNav from '@/components/devHelpers/SkipNav.vue';
	import MapLink from '@/components/map/MapLink.vue';

	import { themeOverrides } from '@/theme/lightThemeOverrides';
	import CFooter from '@rock/components/Footer.vue';
	import { nextRoute } from '@rock/router';

	export default defineComponent({
		components: {
			CFooter,
			Flex,
			NConfigProvider,
			NGlobalStyle,
			MapLink,
			SkipNav,
		},
		setup() {
			document.title = 'Poszukiwacze Camienia';
			return { nextRoute, themeOverrides,__IS_PRODUCTION__ };
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