<template>
	<VFlex gap="12px" class="VFlex">
		<Video videoId="9hVk_cJyLQM" class="video" />
		<PlayButton @click="handleStart()" />
	</VFlex>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

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

			const handleStart = (): void => {
				store.start();
			};

			return { handleStart };
		},
	});
</script>
<style lang="scss" scoped>
	.VFlex {
		width: 100%;
		max-width: 950px;
	}
</style>