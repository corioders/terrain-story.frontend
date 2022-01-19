<template>
	<IncognitoWarning />
	<Video :endBias="10" videoId="h216m8E6ZGI" @end="videoEnded = true" />
	<p>Zobacz cały film, a następnie zagraj!</p>
	<PlayButton :disabled="!videoEnded" @click="handleStart()" />
</template>

<script lang="ts">
	import { defineComponent, ref } from 'vue';

	import IncognitoWarning from '@/components/IncognitoWarning.vue';
	import Video from '@/components/YoutubeVideo.vue';
	import PlayButton from '@/components/buttons/PlayButton.vue';

	import { useProgressStore } from '@help/store/progress';

	export default defineComponent({
		name: 'Start',
		components: {
			IncognitoWarning,
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
