<template>
	<Start :start="handleStart" videoId="sSqOZxR-HI4" />
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	import Start from '@/views/Start.vue';
	import { useProgressStore } from '@recap/store/progress';

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
