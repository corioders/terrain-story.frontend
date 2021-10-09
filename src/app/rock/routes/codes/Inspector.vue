<template>
	<p>Inspektor</p>
	<Video url="https://www.youtube.com/embed/4-fOGS_QcZk" />
	<SingleQuestion :options="question.options" name="causer" @answer="log($event)" />
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	import Video from '@/components/Video.vue';
	import SingleQuestion from '@/components/closedQuestion/SingleQuestion.vue';

	import { inspector as question } from '@rock/static/questions';

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
			return { question, log };
		},
	});
</script>