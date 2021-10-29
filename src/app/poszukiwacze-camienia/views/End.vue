<template>
	<p>Koniec-Kosmita</p>
	<Video url="https://www.youtube.com/embed/PIJysna39aM" />
	<ResetProgressButton />
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	import Video from '@/components/Video.vue';
	import ResetProgressButton from '@/components/buttons/ResetProgressButton.vue';

	export default defineComponent({
		name: 'End',
		components: {
			ResetProgressButton,
			Video,
		},
	});
</script>
