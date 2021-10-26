<template>
	<div id="app">
		<n-space vertical>
			<router-view />
		</n-space>
	</div>
</template>

<script lang="ts">
	import { NSpace } from 'naive-ui';
	import { defineComponent } from 'vue';

	export default defineComponent({
		components: {
			NSpace,
		},
		setup() {
			if (window.location.href.includes('localhost') || window.location.href.includes('dev')) return;
			window.location.href = '/poszukiwacze-camienia';
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
