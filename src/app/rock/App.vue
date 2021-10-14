<template>
	<n-config-provider :theme-overrides="{ common: { fontWeightStrong: '600' } }">
		<div id="app">
			<Flex>
				<router-view />
				<SkipNav :nextRoute="nextRoute" />
			</Flex>
		</div>
	</n-config-provider>
</template>

<script lang="ts">
	import { NConfigProvider } from 'naive-ui';
	import { defineComponent } from 'vue';

	import Flex from '@/layouts/Flex.vue';

	import SkipNav from '@/components/devHelpers/SkipNav.vue';

	import { nextRoute } from '@rock/router';

	export default defineComponent({
		components: {
			Flex,
			SkipNav,
			NConfigProvider,
		},
		setup() {
			return { nextRoute };
		},
	});
</script>
<style lang="scss">
	#app {
		font-family: v-sans;
	}
</style>