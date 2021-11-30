<template>
	<div>Start</div>
	<PlayButton @click="handleStart()" />
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	import PlayButton from '@/components/buttons/PlayButton.vue';

	import { useProgressStore } from '@eng/store/progress';

	export default defineComponent({
		name: 'Start',
		components: {
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