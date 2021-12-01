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
	import { defineComponent, ref } from 'vue';

	import CheckButton from '@/components/buttons/CheckButton.vue';
	import SingleChoiceQuestions from '@/components/closedQuestion/SingleChoiceQuestions.vue';

	import { quiz as questions } from '@eng/assets/questions';
	import { useProgressStore } from '@eng/store/progress';

	export default defineComponent({
		name: 'Quiz',
		components: {
			SingleChoiceQuestions,
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
				if (isCorrect.value === true) store.finishPuzzle('Quiz');
				displayFeedback.value = true;
			};

			return { questions, isCorrect, handleCheck, handleAnswer, displayFeedback };
		},
	});
</script>