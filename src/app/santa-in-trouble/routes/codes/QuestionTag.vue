<template>
	<p>Which word is a correct question tag?</p>
	<p>{{ question.question }}</p>
	<SingleChoiceQuestion
		:options="question.options"
		:answer="question.answer"
		name="questionTag"
		:displayFeedback="displayFeedback"
		@correct="handleAnswer(true)"
		@incorrect="handleAnswer(false)"
	/>
	<CheckButton :isCorrect="isCorrect" @click="handleCheck" />
</template>

<script lang="ts">
	import { defineComponent, ref } from 'vue';

	import CheckButton from '@/components/buttons/CheckButton.vue';
	import SingleChoiceQuestion from '@/components/closedQuestion/SingleChoiceQuestion.vue';

	import { questionTag as question } from '@eng/assets/questions';
	import { useProgressStore } from '@eng/store/progress';

	export default defineComponent({
		name: 'QuestionTag',
		components: {
			SingleChoiceQuestion,
			CheckButton,
		},
		setup() {
			const store = useProgressStore();
			const isCorrect = ref<boolean>(false);
			const displayFeedback = ref<boolean>(false);

			const handleAnswer = (isAnswerCorrect: boolean): void => {
				isCorrect.value = isAnswerCorrect;
				displayFeedback.value = false;
			};

			const handleCheck = (): void => {
				if (isCorrect.value === true) {
					store.finishPuzzle('QuestionTag');
				}
				displayFeedback.value = true;
			};

			return { question, isCorrect, handleCheck, handleAnswer, displayFeedback };
		},
	});
</script>