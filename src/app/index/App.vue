<template>
	<div id="app">
		<Flex gap="12px">
			<router-view />
		</Flex>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	import { Flex } from '@corioders/vueui';

	export default defineComponent({
		components: {
			Flex,
		},
	});
</script>


<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');

	#app {
		font-family: 'Open Sans', sans-serif;
		font-weight: 400;
		text-align: center;
	}
</style>
