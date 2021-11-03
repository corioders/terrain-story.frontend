<template>
	<n-space vertical align="center">
		<h1>Terrain Story</h1>
		<h2>Strona w budowie</h2>
	</n-space>
</template>

<script lang="ts">
	import { NSpace } from 'naive-ui';
	import { defineComponent } from 'vue';

	export default defineComponent({
		name: 'Home',
		components: {
			NSpace,
		},
	});
</script>
<style lang="scss">
	.container {
		img {
			width: 100%;
			object-fit: cover;
		}
		width: 80%;
		max-width: 800px;
		margin: 0 auto;
	}
</style>