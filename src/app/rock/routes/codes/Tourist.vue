<template>
	<p>Turysta</p>
	<Video url="https://www.youtube.com/embed/4-fOGS_QcZk" />
	<SingleQuestions :questions="questions" name="place" @answer="log($event)" />
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	import Video from '@/components/Video.vue';
	import SingleQuestions from '@/components/closedQuestion/SingleQuestions.vue';

	import { tourist as questions } from '@rock/static/questions';

	export default defineComponent({
		name: 'Tourist',
		components: {
			Video,
			SingleQuestions,
		},
		setup() {
			function log(e: string): void {
				console.log(e);
			}
			return { questions, log };
		},
	});
</script>