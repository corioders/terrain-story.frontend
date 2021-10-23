<template>
	<n-config-provider :theme-overrides="themeOverrides">
		<div id="app">
			<Flex>
				<router-view />
				<SkipNav :nextRoute="nextRoute" />
			</Flex>
			<MapLink mapUrl="/mapa" />
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
	import { nextRoute } from '@rock/router';

	export default defineComponent({
		components: {
			Flex,
			NConfigProvider,
			NGlobalStyle,
			MapLink,
			SkipNav,
		},
		setup() {
			return { nextRoute, themeOverrides };
		},
	});
</script>
<style lang="scss">
	#app {
		font-family: v-sans;
	}
</style>