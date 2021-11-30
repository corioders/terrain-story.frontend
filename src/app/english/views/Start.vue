<template>
	<div>Start</div>
	<Video videoId="9hVk_cJyLQM" />
	<PlayButton @click="handleStart()" />
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	import Video from '@/components/YoutubeVideo.vue';
	import PlayButton from '@/components/buttons/PlayButton.vue';

	import { useProgressStore } from '@eng/store/progress';

	export default defineComponent({
		name: 'Start',
		components: {
			Video,
			PlayButton,
		},
		setup() {
			const store = useProgressStore();

			const handleStart = (): void => {
				store.start();
			};

			return { handleStart };
		},
	});
</script>