<template>
	<p>Start-Kosmita</p>
	<Video url="https://www.youtube.com/embed/q_O3LVHoFAw" />
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	import Video from '@/components/Video.vue';

	export default defineComponent({
		name: 'Start',
		components: {
			Video,
		},
	});
</script>
