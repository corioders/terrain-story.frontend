<template>
	<VFlex gap="12px">
		<h1>Terrain Story</h1>
		<h2>Strona w budowie</h2>
	</VFlex>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	import { VFlex } from '@corioders/vueui';

	export default defineComponent({
		name: 'Home',
		components: {
			VFlex,
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