<template>
	<div class="mapLink">
		<n-button size="large" type="primary" @click="$router.push(mapUrl)">Mapa</n-button>
	</div>
</template>

<script lang="ts">
	import { NButton } from 'naive-ui';
	import { defineComponent } from 'vue';

	export default defineComponent({
		name: 'MapLink',
		components: {
			NButton,
		},
		props: {
			mapUrl: {
				type: String,
				required: true,
			},
		},
	});
</script>
<style lang="scss" scoped>
	.mapLink {
		position: fixed;
		right: 5vw;
		bottom: 5vh;
		z-index: 999;
	}
</style>
