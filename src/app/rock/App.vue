<template>
	<div id="app">
		<Flex>
			<router-view />
			<SkipNav :nextRoute="nextRoute" />
		</Flex>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	import Flex from '@/layouts/Flex.vue';

	import SkipNav from '@/components/devHelpers/SkipNav.vue';

	import { nextRoute } from '@rock/router';

	export default defineComponent({
		components: {
			Flex,
			SkipNav,
		},
		setup() {
			return { nextRoute };
		},
	});
</script>


<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');

	#app {
		font-family: 'Open Sans', sans-serif;
		font-weight: 400;
		text-align: center;
		color: $dark;
	}
</style>
