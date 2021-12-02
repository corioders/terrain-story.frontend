<template>
	<p>Connect the jumbled carols.</p>
	<SingleChoiceQuestions :questions="questions" name="carols" :displayFeedback="displayFeedback" @correct="handleAnswer(true)" @incorrect="handleAnswer(false)" />
	<CheckButton :isCorrect="isCorrect" @click="handleCheck" />
</template>

<script lang="ts">
	import { defineComponent, ref } from 'vue';

	import CheckButton from '@/components/buttons/CheckButton.vue';
	import SingleChoiceQuestions from '@/components/closedQuestion/SingleChoiceQuestions.vue';

	import { carols as questions } from '@eng/assets/questions';
	import { useProgressStore } from '@eng/store/progress';

	export default defineComponent({
		name: 'Carols',
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
				if (isCorrect.value === true) store.finishPuzzle('Carols');
				displayFeedback.value = true;
			};

			return { questions, isCorrect, handleCheck, handleAnswer, displayFeedback };
		},
	});
</script>