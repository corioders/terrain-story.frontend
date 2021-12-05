<template>
	<p>Match the festivals with the descriptions.</p>
	<SingleChoiceQuestions :questions="questions" name="matchFestivals" :displayFeedback="displayFeedback" @correct="handleAnswer(true)" @incorrect="handleAnswer(false)" />
	<CheckButton :isCorrect="isCorrect" @click="handleCheck" />
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	import CheckButton from '@/components/buttons/CheckButton.vue';
	import SingleChoiceQuestions from '@/components/closedQuestion/SingleChoiceQuestions.vue';
	import { questionExecutor } from '@/components/closedQuestion/question';

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
			return { questions, ...questionExecutor(() => store.finishPuzzle('FestivalsMatching')) };
		},
	});
</script>