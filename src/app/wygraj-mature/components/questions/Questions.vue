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

	import { QuestionsDescriptor } from './QuestionsDescriptor';

	export default defineComponent({
		name: 'Questions',
		components: {
			SingleChoiceQuestionHtml,
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
