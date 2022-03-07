<template>
	<Start :start="handleStart" videoId="4l1kEdSWxlY" />
</template>

<script lang="ts">
import { useProgressStore } from '@help/store/progress';
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
