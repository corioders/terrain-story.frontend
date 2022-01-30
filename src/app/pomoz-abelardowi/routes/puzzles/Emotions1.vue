<template>
	<p>Rozpoznaj po mimice emocje u innych. Co powie osoba?</p>
	<SingleChoiceQuestions
		:questions="questions"
		name="emotions"
		:displayFeedback="displayFeedback"
		class="questions"
		@correct="handleAnswer(true)"
		@incorrect="handleAnswer(false)"
	>
		<template #0>
			<img src="@help/assets/emotions1/01.webp" alt="Osoba 1" />
		</template>
		<template #1>
			<img src="@help/assets/emotions1/02.webp" alt="Osoba 2" />
		</template>
		<template #2>
			<img src="@help/assets/emotions1/03.webp" alt="Osoba 3" />
		</template>
		<template #3>
			<img src="@help/assets/emotions1/04.webp" alt="Osoba 4" />
		</template>
		<template #4>
			<img src="@help/assets/emotions1/05.webp" alt="Osoba 5" />
		</template>
		<template #5>
			<img src="@help/assets/emotions1/06.webp" alt="Osoba 6" />
		</template>
		<template #6>
			<img src="@help/assets/emotions1/07.webp" alt="Osoba 7" />
		</template>
		<template #7>
			<img src="@help/assets/emotions1/08.webp" alt="Osoba 8" />
		</template>
	</SingleChoiceQuestions>
	<CheckButton :isCorrect="isCorrect" @click="handleCheck" />
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	import CheckButton from '@/components/buttons/CheckButton.vue';
	import SingleChoiceQuestions from '@/components/closedQuestion/SingleChoiceQuestions.vue';
	import { questionExecutor } from '@/components/closedQuestion/question';

	import { emotions1 as questions } from '@help/assets/questions';
	import { useProgressStore } from '@help/store/progress';

	export default defineComponent({
		name: 'Emotions1',
		components: {
			SingleChoiceQuestions,
			CheckButton,
		},
		setup() {
			const store = useProgressStore();
			return { questions, ...questionExecutor(() => store.finishPuzzle('Emotions1')) };
		},
	});
</script>
<style lang="scss" scoped>
	img {
		width: 200px !important;
		height: 200px !important;
	}
	:deep(.slot) {
		align-items: flex-start;
	}
</style>
