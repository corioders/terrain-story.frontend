<template>
	<video :src="src" controls preload="auto" playsinline></video>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	export default defineComponent({
		name: 'Video',
		props: {
			src: {
				type: String,
				required: true,
			},
		},
	});
</script>
<style lang="scss" scoped>
	video {
		max-width: 95vw;
	}
</style>
