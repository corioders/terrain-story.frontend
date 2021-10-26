<template>
	<p>Turysta</p>
	<Video url="https://www.youtube.com/embed/HcVCHKHy-Xw" />
	<SingleChoiceQuestions :questions="questions" name="place" @correct="isCorrect = true" @incorrect="isCorrect = false">
		<template #0>
			<img src="@rock/assets/places/0.jpg" alt="Miejsce 1" />
		</template>
		<template #1>
			<img src="@rock/assets/places/1.jpg" alt="Miejsce 2" />
		</template>
		<template #2>
			<img src="@rock/assets/places/2.jpg" alt="Miejsce 3" />
		</template>
		<template #3>
			<img src="@rock/assets/places/3.jpg" alt="Miejsce 4" />
		</template>
	</SingleChoiceQuestions>
	<CheckButton @click="handleCheck">SPRAWDŹ</CheckButton>
</template>

<script lang="ts">
	import { defineComponent, ref } from 'vue';

	import CheckButton from '@/components/CheckButton.vue';
	import Video from '@/components/Video.vue';
	import SingleChoiceQuestions from '@/components/closedQuestion/SingleChoiceQuestions.vue';

	import { tourist as questions } from '@/app/poszukiwacze-camienia/assets/questions';
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
				if (isCorrect.value === true) store.finishPuzzle('Tourist');
			};

			return { questions, isCorrect, handleCheck };
		},
	});
</script>