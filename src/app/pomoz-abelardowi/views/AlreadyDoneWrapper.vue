<template>
	<AlreadyDone :progressStore="progressStore" />
</template>

<script lang="ts">
import { useProgressStore } from '@help/store/progress';
import { defineComponent } from 'vue';

import AlreadyDone from '@/views/AlreadyDone.vue';

export default defineComponent({
	components: {
		AlreadyDone,
	},
	setup() {
		return { progressStore: useProgressStore() };
	},
});
</script>
