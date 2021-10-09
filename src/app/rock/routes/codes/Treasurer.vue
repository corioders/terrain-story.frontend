<template>
	<p>Skarbek</p>
	<Video url="https://www.youtube.com/embed/4-fOGS_QcZk" />
	<div v-for="(question, i) in questions" :key="`treasurerQuestion${i}`" class="question">
		<p>{{ question.question }}</p>
		<SingleQuestion :options="question.options" :name="`mystery${i}`" @answer="log($event, `mystery${i}`)" />
	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	import Video from '@/components/Video.vue';
	import SingleQuestion from '@/components/closedQuestion/SingleQuestion.vue';

	import { treasurer as questions } from '@rock/static/questions';

	export default defineComponent({
		name: 'Treasurer',
		components: {
			Video,
			SingleQuestion,
		},
		setup() {
			function log(e: string, question: string): void {
				console.log(`${question} - ${e}`);
			}
			return { questions, log };
		},
	});
</script>