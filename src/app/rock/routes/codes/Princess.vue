<template>
	<p>Księżniczka</p>
	<Video url="https://www.youtube.com/embed/4-fOGS_QcZk" />

	<img src="@rock/assets/labyrinth.jpg" />
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	import Video from '@/components/Video.vue';

	export default defineComponent({
		name: 'Princess',
		components: {
			Video,
		},
	});
</script>
