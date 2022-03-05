<template>
	<Start :start="handleStart" videoId="q_O3LVHoFAw" />
</template>

<script lang="ts">
import { useProgressStore } from '@rock/store/progress';
import { defineComponent } from 'vue';

import Start from '@/views/Start.vue';

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
