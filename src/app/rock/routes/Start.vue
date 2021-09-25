<template>
	<p>Start-Kosmita</p>
	<Video src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4" />
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	import Video from '@/components/Video.vue';

	export default defineComponent({
		name: 'Start',
		components: {
			Video,
		},
	});
</script>
