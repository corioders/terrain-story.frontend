<template>
	<Done />
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	import Done from '@/views/Done.vue';
	import { useProgressStore } from '@rock/store/progress';

	export default defineComponent({
		components: {
			Done,
		},
		setup() {
			return { progressStore: useProgressStore() };
		},
	});
</script>
