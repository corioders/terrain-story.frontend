<template>
	<p>Koniec-Kosmita</p>
	<Video url="https://www.youtube.com/embed/PIJysna39aM" />
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	import Video from '@/components/Video.vue';

	export default defineComponent({
		name: 'End',
		components: {
			Video,
		},
	});
</script>
