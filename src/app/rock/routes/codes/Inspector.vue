<template>
	<p>Inspektor</p>
	<Video url="https://www.youtube.com/embed/4-fOGS_QcZk" />
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	import Video from '@/components/Video.vue';

	export default defineComponent({
		name: 'Inspector',
		components: {
			Video,
		},
	});
</script>