<template>
	<p>Start-Kosmita</p>
	<Video url="https://www.youtube.com/embed/q_O3LVHoFAw" />
	<PlayButton @click="handleStart()" />
</template>

<script lang="ts">
	import { defineComponent } from 'vue';
	import { useRouter } from 'vue-router';

	import PlayButton from '@/components/PlayButton.vue';
	import Video from '@/components/Video.vue';

	import { useProgressStore } from '@rock/store/progress';

	export default defineComponent({
		name: 'Start',
		components: {
			PlayButton,
			Video,
		},
		setup() {
			const store = useProgressStore();
			const router = useRouter();

			const handleStart = (): void => {
				store.start();
			};

			return { handleStart };
		},
	});
</script>
