<template>
	<p>Tancerz</p>
	<Video url="https://www.youtube.com/embed/8O_EcEENaaw" />
	<SingleChoiceQuestions :questions="questions" name="dance" @correct="isCorrect = true" @incorrect="isCorrect = false" />
	<CheckButton @click="handleCheck()">SPRAWDŹ</CheckButton>
</template>

<script lang="ts">
	import { defineComponent, ref } from 'vue';

	import CheckButton from '@/components/CheckButton.vue';
	import Video from '@/components/Video.vue';
	import SingleChoiceQuestions from '@/components/closedQuestion/SingleChoiceQuestions.vue';

	import { dancer as questions } from '@/app/poszukiwacze-camienia/assets/questions';

	import { useProgressStore } from '../../store/progress';

	export default defineComponent({
		name: 'Dancer',
		components: {
			Video,
			SingleChoiceQuestions,
			CheckButton,
		},
		setup() {
			const store = useProgressStore();
			const isCorrect = ref<boolean>(false);

			const handleCheck = (): void => {
				if (isCorrect.value === true) {
					store.finishPuzzle('Dancer');
				}
			};

			return { questions, isCorrect, handleCheck };
		},
	});
</script>