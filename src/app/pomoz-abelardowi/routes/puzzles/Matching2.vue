<template>
	<p>Rozsypanka część 2 - 5 zasad dobrego życia.</p>
	<SingleChoiceQuestions :questions="questions" name="matchFestivals" :displayFeedback="displayFeedback" @correct="handleAnswer(true)" @incorrect="handleAnswer(false)" />
	<CheckButton :isCorrect="isCorrect" @click="handleCheck" />
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	import CheckButton from '@/components/buttons/CheckButton.vue';
	import SingleChoiceQuestions from '@/components/closedQuestion/SingleChoiceQuestions.vue';
	import { questionExecutor } from '@/components/closedQuestion/question';

	import { matching2 as questions } from '@help/assets/questions';
	import { useProgressStore } from '@help/store/progress';

	export default defineComponent({
		name: 'Matching2',
		components: {
			SingleChoiceQuestions,
			CheckButton,
		},
		setup() {
			const store = useProgressStore();
			return { questions, ...questionExecutor(() => store.finishPuzzle('Matching2')) };
		},
	});
</script>
