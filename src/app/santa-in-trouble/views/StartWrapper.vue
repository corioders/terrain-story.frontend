<template>
	<Start :start="handleStart" videoId="Kc-vJEeuAqI">
		<template #incognitoWarning>If your browser is in private mode progress will not be saved!</template>
		<template #howToPlayButton>How to play</template>
		<template #info>Watch the video and play!</template>
		<template #playButton>Play</template>
		<template #playButtonCard><p>You have to watch the video before playing.</p></template>
	</Start>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	import Start from '@/views/Start.vue';
	import { useProgressStore } from '@eng/store/progress';

	export default defineComponent({
		name: 'StartWrapper',
		components: {
			Start,
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
