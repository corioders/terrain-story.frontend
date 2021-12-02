<template>
	<AlreadyDone :progressStore="progressStore" />
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	import AlreadyDone from '@/components/AlreadyDone.vue';

	export default defineComponent({
		components: {
			AlreadyDone,
		},
		setup() {
			const progressStore = {
				resetProgress: (): void => {},
			};
			return { progressStore };
		},
	});
</script>
