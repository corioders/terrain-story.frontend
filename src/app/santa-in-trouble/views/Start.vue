<template>
	<IncognitoWarning>If your browser is in private mode progress will not be saved!</IncognitoWarning>
	<VFlex gap="12px" class="VFlex">
		<Video videoId="Kc-vJEeuAqI" class="video" :endBias="10" @end="videoEnded = true" />
		<p>Watch the video and play!</p>
		<PlayButton :disabled="!videoEnded" @click="handleStart()">
			Play
			<template #card>
				<p>You have to watch the video before playing.</p>
			</template>
		</PlayButton>
	</VFlex>
</template>

<script lang="ts">
	import { defineComponent, ref } from 'vue';

	import IncognitoWarning from '@/components/IncognitoWarning.vue';
	import Video from '@/components/YoutubeVideo.vue';
	import PlayButton from '@/components/buttons/PlayButton.vue';

	import { VFlex } from '@corioders/vueui';
	import { useProgressStore } from '@eng/store/progress';

	export default defineComponent({
		name: 'Start',
		components: {
			IncognitoWarning,
			Video,
			PlayButton,
			VFlex,
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
	.VFlex {
		width: 100%;
		max-width: 950px;
	}
</style>
