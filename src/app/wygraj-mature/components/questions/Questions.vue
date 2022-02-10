<template>
	<div>
		<SingleChoiceQuestionHtml
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
		</SingleChoiceQuestionHtml>
	</div>
</template>

<script lang="ts">
	import { defineComponent, PropType } from 'vue';

	import SingleChoiceQuestionHtml from '@/components/closedQuestion/SingleChoiceQuestionHtml.vue';
	import { questionExecutor } from '@/components/closedQuestion/question';

	import QuestionsDescriptor from './QuestionsDescriptor';

	export default defineComponent({
		name: 'Questions',
		components: {
			SingleChoiceQuestionHtml,
		},
		// props: {
		// 	questions: {
		// 		type: Array as PropType<QuestionsDescriptor>,
		// 		required: true,
		// 	},
		// },
		emits: ['solved'],
		setup(props, { emit }) {
			const questions: QuestionsDescriptor = [
				{
					subject: 'Polski',
					question: '<p>aaaaaaa</p>',
					options: ['<p>a</p>', '<p>aa</p>', '<p>aaa</p>'],
					answer: '<p>a</p>',
				},
				{
					subject: 'Matematyka',
					question: '<p>bbbbbbb</p>',
					options: ['<p>b</p>', '<p>bb</p>', '<p>bbb</p>'],
					answer: '<p>b</p>',
				},
				{
					subject: 'Angielski',
					question: '<p>ccccccc</p>',
					options: ['<p>c</p>', '<p>cc</p>', '<p>ccc</p>'],
					answer: '<p>c</p>',
				},
			];

			return { ...questionExecutor(() => emit('solved')), questions };
		},
	});
</script>
