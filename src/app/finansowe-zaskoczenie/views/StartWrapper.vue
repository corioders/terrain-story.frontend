<template>
	<Start :start="handleStart" />
</template>

<script lang="ts">
import { useProgressStore } from '@fin/store/progress';
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
