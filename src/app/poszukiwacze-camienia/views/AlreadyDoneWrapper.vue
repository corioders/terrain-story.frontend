<template>
	<AlreadyDone :progressStore="progressStore" />
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	import AlreadyDone from '@/views/AlreadyDone.vue';
	import { useProgressStore } from '@rock/store/progress';

	export default defineComponent({
		components: {
			AlreadyDone,
		},
		setup() {
			return { progressStore: useProgressStore() };
		},
	});
</script>
