<template>
	<ReportBug />
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	import ReportBug from '@/components/ReportBug.vue';

	export default defineComponent({
		name: 'MapWrapper',
		components: {
			ReportBug,
		},
	});
</script>
