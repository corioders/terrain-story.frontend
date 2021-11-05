<template>
	<Video videoId="q_O3LVHoFAw" @end="videoEnded = true" />
	<p>Zobacz cały film, a następnie zagraj!</p>
	<PlayButton :disabled="!videoEnded" @click="handleStart()" />
</template>

<script lang="ts">
	import { defineComponent, ref } from 'vue';

	import Video from '@/components/YoutubeVideo.vue';
	import PlayButton from '@/components/buttons/PlayButton.vue';

	import { useProgressStore } from '@rock/store/progress';

	export default defineComponent({
		name: 'Start',
		components: {
			PlayButton,
			Video,
		},
		setup() {
			const store = useProgressStore();
			const videoEnded = ref<boolean>(false);

			const handleStart = (): void => {
				store.start();
			};

			return { handleStart, videoEnded };
		},
	});
</script>
<style lang="scss" scoped>
	p {
		font-size: 1.1em;
		text-align: center;
		width: 95%;
		max-width: 950px;
	}
</style>
