<template>
	<p>Start-Kosmita</p>
	<Video />
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
