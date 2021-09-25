<template>
	<div id="app">
		<Flex>
			<router-view />
			<RockSkipNav />
		</Flex>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	import Flex from '@/layouts/Flex.vue';

	import RockSkipNav from '@/app/rock/components/devHelpers/RockSkipNav.vue';

	export default defineComponent({
		components: {
			Flex,
			RockSkipNav,
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
