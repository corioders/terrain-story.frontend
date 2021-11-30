<template>
	<p>Match the festivals with the descriptions.</p>
	<SingleChoiceQuestions :questions="questions" name="matchFestivals" :displayFeedback="displayFeedback" @correct="handleAnswer(true)" @incorrect="handleAnswer(false)" />
	<CheckButton :isCorrect="isCorrect" @click="handleCheck" />
</template>

<script lang="ts">
	import { defineComponent, ref } from 'vue';

	import CheckButton from '@/components/buttons/CheckButton.vue';
	import SingleChoiceQuestions from '@/components/closedQuestion/SingleChoiceQuestions.vue';

	import { festivalsMatching as questions } from '@eng/assets/questions';
	import { useProgressStore } from '@eng/store/progress';

	export default defineComponent({
		name: 'FestivalsMatching',
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
				if (isCorrect.value === true) store.finishPuzzle('FestivalsMatching');
				displayFeedback.value = true;
			};

			return { questions, isCorrect, handleCheck, handleAnswer, displayFeedback };
		},
	});
</script>