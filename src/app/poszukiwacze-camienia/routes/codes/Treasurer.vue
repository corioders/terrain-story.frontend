<template>
	<p>Skarbek</p>
	<Video url="https://www.youtube.com/embed/P2dcu-dIhhU" />
	<SingleChoiceQuestions :questions="questions" name="mystery" @correct="isCorrect = true" @incorrect="isCorrect = false" />
  <CheckButton @click="handleCheck">SPRAWDŹ</CheckButton>
</template>

<script lang="ts">
	import { defineComponent, ref } from 'vue';

	import CheckButton from '@/components/CheckButton.vue';
	import Video from '@/components/Video.vue';
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

			const handleCheck = (): void => {
				if (isCorrect.value === true) store.finishPuzzle('Treasurer');
			};

			return { questions, isCorrect, handleCheck };
		},
	});
</script>
