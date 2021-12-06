<template>
	<VFlex gap="12px" class="VFlex">
		<Video videoId="Kc-vJEeuAqI" class="video" :endBias="10" @end="videoEnded = true" />
		<p>Watch the video and play!</p>
		<PlayButton :disabled="!videoEnded" @click="handleStart()" />
	</VFlex>
</template>

<script lang="ts">
	import { defineComponent, ref } from 'vue';

	import Video from '@/components/YoutubeVideo.vue';
	import PlayButton from '@/components/buttons/PlayButton.vue';

	import { VFlex } from '@corioders/vueui';
	import { useProgressStore } from '@eng/store/progress';

	export default defineComponent({
		name: 'Start',
		components: {
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