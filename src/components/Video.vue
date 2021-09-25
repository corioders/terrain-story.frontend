<template>
	<video src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4" controls preload="auto" playsinline></video>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	export default defineComponent({
		name: 'Video',
	});
</script>
<style lang="scss" scoped>
	video {
		max-width: 95vw;
	}
</style>
