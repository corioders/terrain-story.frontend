<template>
	<p>Inspektor</p>
	<Video url="https://www.youtube.com/embed/4-fOGS_QcZk" />
	<SingleQuestion
		:options="[
			'https://images.pexels.com/photos/3823495/pexels-photo-3823495.jpeg',
			'https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg',
			'https://images.pexels.com/photos/2389349/pexels-photo-2389349.jpeg',
			'https://images.pexels.com/photos/4655426/pexels-photo-4655426.jpeg',
			'https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg',
		]"
		name="causer"
		@answer="log($event)"
	/>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	import Video from '@/components/Video.vue';
	import SingleQuestion from '@/components/closedQuestion/SingleQuestion.vue';

	export default defineComponent({
		name: 'Inspector',
		components: {
			Video,
			SingleQuestion,
		},
		setup() {
			function log(e: string): void {
				console.log(e);
			}
			return { log };
		},
	});
</script>