<template>
	<p>Turysta</p>
	<Video url="https://www.youtube.com/embed/4-fOGS_QcZk" />
	<div v-for="(question, i) in questions" :key="`treasurerQuestion${i}`" class="question">
		<p>{{ question.question }}</p>
		<SingleQuestion :options="question.options" :name="`dance${i}`" @answer="log($event, `dance${i}`)" />
	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	import Video from '@/components/Video.vue';
	import SingleQuestion from '@/components/closedQuestion/SingleQuestion.vue';

	import { tourist as questions } from '@rock/static/questions';

	export default defineComponent({
		name: 'Tourist',
		components: {
			Video,
			SingleQuestion,
		},
		setup() {
			return { questions };
		},
	});
</script>