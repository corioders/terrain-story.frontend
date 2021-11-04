<template>
	<Video url="https://www.youtube.com/embed/P2dcu-dIhhU" />
	<SingleChoiceQuestions :questions="questions" name="mystery" :displayFeedback="displayFeedback" @correct="handleAnswer(true)" @incorrect="handleAnswer(false)" />
	<CheckButton :isCorrect="isCorrect" @click="handleCheck" />
</template>

<script lang="ts">
	import { defineComponent, ref } from 'vue';

	import Video from '@/components/Video.vue';
	import CheckButton from '@/components/buttons/CheckButton.vue';
	import SingleChoiceQuestions from '@/components/closedQuestion/SingleChoiceQuestions.vue';

	import { treasurer as questions } from '@/app/poszukiwacze-camienia/assets/questions';
	import { useProgressStore } from '@rock/store/progress';

	export default defineComponent({
		name: 'Tourist',
		components: {
			Video,
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
				if (isCorrect.value === true) store.finishPuzzle('Treasurer');
				displayFeedback.value = true;
			};

			return { questions, isCorrect, handleCheck, handleAnswer, displayFeedback };
		},
	});
</script>
