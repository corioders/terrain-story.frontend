<template>
	<Video url="https://www.youtube.com/embed/8O_EcEENaaw" />
	<SingleChoiceQuestions :questions="questions" name="dance" :displayFeedback="displayFeedback" @correct="handleAnswer(true)" @incorrect="handleAnswer(false)">
		<template #0>
			<audio controls :src="require('@rock/assets/dancer/belgijka.mp3')"></audio>
		</template>
		<template #1>
			<audio controls :src="require('@rock/assets/dancer/macarena.mp3')"></audio>
		</template>
		<template #2>
			<audio controls :src="require('@rock/assets/dancer/tango.mp3')"></audio>
		</template>
	</SingleChoiceQuestions>
	<CheckButton :isCorrect="isCorrect" @click="handleCheck()" />
</template>

<script lang="ts">
	import { defineComponent, ref } from 'vue';

	import Video from '@/components/Video.vue';
	import CheckButton from '@/components/buttons/CheckButton.vue';
	import SingleChoiceQuestions from '@/components/closedQuestion/SingleChoiceQuestions.vue';

	import { dancer as questions } from '@/app/poszukiwacze-camienia/assets/questions';
	import { useProgressStore } from '@rock/store/progress';

	export default defineComponent({
		name: 'Dancer',
		components: {
			Video,
			SingleChoiceQuestions,
			CheckButton,
		},
		setup() {
			const store = useProgressStore();
			let isCorrect = ref<boolean>(false);
			const displayFeedback = ref<boolean>(false);

			const handleAnswer = (isAnswerCorrect: boolean): void => {
				isCorrect.value = isAnswerCorrect;
				displayFeedback.value = false;
			};

			const handleCheck = (): void => {
				if (isCorrect.value === true) {
					store.finishPuzzle('Dancer');
				}
				displayFeedback.value = true;
			};

			return { questions, isCorrect, handleAnswer, handleCheck, displayFeedback };
		},
	});
</script>