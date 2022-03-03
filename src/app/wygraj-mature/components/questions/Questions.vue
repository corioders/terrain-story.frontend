<template>
	<div>
		<SingleChoiceQuestion
			v-for="(question, i) in questions"
			:key="`${question.subject}-question${i}`"
			:name="question.subject"
			:options="question.options"
			:answer="question.answer"
			:displayFeedback="displayFeedback"
			@correct="handleAnswer(true)"
			@incorrect="handleAnswer(false)"
		>
			<div v-html="question.question"></div>
		</SingleChoiceQuestion>
	</div>
</template>

<script lang="ts">
	import { defineComponent, PropType } from 'vue';

	import SingleChoiceQuestion from '@/components/closedQuestion/SingleChoiceQuestion.vue';
	import { questionExecutor } from '@/components/closedQuestion/question';

	import { QuestionsDescriptor } from './QuestionsDescriptor';

	export default defineComponent({
		name: 'Questions',
		components: {
			SingleChoiceQuestion,
		},
		props: {
			questions: {
				type: Array as unknown as PropType<QuestionsDescriptor>,
				required: true,
			},
		},
		emits: ['solved'],
		setup(_, { emit }) {
			return { ...questionExecutor(() => emit('solved')) };
		},
	});
</script>
