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
import { questionTag as question } from '@eng/assets/questions';
import { useProgressStore } from '@eng/store/progress';
import { defineComponent } from 'vue';

import CheckButton from '@/components/buttons/CheckButton.vue';
import SingleChoiceQuestion from '@/components/closedQuestion/SingleChoiceQuestion.vue';
import { questionExecutor } from '@/components/closedQuestion/question';

export default defineComponent({
	name: 'QuestionTag',
	components: {
		SingleChoiceQuestion,
		CheckButton,
	},
	setup() {
		const store = useProgressStore();
		return { question, ...questionExecutor(() => store.finishPuzzle('QuestionTag')) };
	},
});
</script>
