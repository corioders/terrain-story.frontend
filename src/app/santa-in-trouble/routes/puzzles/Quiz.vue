<template>
	<p>Solve the quiz, mark which sentences are true and which are false.</p>
	<SingleChoiceQuestions
		disableMixing
		:questions="questions"
		name="quiz"
		:displayFeedback="displayFeedback"
		@correct="handleAnswer(true)"
		@incorrect="handleAnswer(false)"
	/>
	<CheckButton :isCorrect="isCorrect" @click="handleCheck" />
</template>

<script lang="ts">
import { quiz as questions } from '@eng/assets/questions';
import { useProgressStore } from '@eng/store/progress';
import { defineComponent } from 'vue';

import CheckButton from '@/components/buttons/CheckButton.vue';
import SingleChoiceQuestions from '@/components/closedQuestion/SingleChoiceQuestions.vue';
import { questionExecutor } from '@/components/closedQuestion/question';

export default defineComponent({
	name: 'Quiz',
	components: {
		SingleChoiceQuestions,
		CheckButton,
	},
	setup() {
		const store = useProgressStore();
		return { questions, ...questionExecutor(() => store.finishPuzzle('Quiz')) };
	},
});
</script>
