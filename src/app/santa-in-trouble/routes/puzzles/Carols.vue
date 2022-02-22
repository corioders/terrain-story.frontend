<template>
	<p>Connect the jumbled carols.</p>
	<SingleChoiceQuestions :questions="questions" name="carols" :displayFeedback="displayFeedback" @correct="handleAnswer(true)" @incorrect="handleAnswer(false)" />
	<CheckButton :isCorrect="isCorrect" @click="handleCheck" />
</template>

<script lang="ts">
import { carols as questions } from '@eng/assets/questions';
import { useProgressStore } from '@eng/store/progress';
import { defineComponent } from 'vue';

import CheckButton from '@/components/buttons/CheckButton.vue';
import SingleChoiceQuestions from '@/components/closedQuestion/SingleChoiceQuestions.vue';
import { questionExecutor } from '@/components/closedQuestion/question';

export default defineComponent({
	name: 'Carols',
	components: {
		SingleChoiceQuestions,
		CheckButton,
	},
	setup() {
		const store = useProgressStore();
		return { questions, ...questionExecutor(() => store.finishPuzzle('Carols')) };
	},
});
</script>
