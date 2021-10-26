<template>
	<p>Start-Kosmita</p>
	<Video url="https://www.youtube.com/embed/4-fOGS_QcZk" />
	<button @click="handleStart()">OK</button>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';
	import { useRouter } from 'vue-router';

	import Video from '@/components/Video.vue';

	import { useProgressStore } from '@rock/store/progress';

	export default defineComponent({
		name: 'Start',
		components: {
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
