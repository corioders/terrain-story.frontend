<template>
	<p class="questionHelper">{{ question.question }}</p>
	<img src="@fin/assets/card.webp" alt="karta" />
	<SingleChoiceQuestion
		:options="question.options"
		:answer="question.answer"
		name="card"
		:displayFeedback="displayFeedback"
		@correct="handleAnswer(true)"
		@incorrect="handleAnswer(false)"
	/>
	<CheckButton :isCorrect="isCorrect" @click="handleCheck" />
</template>

<script lang="ts">
import { card as question } from '@fin/assets/questions';
import { useProgressStore } from '@fin/store/progress';
import { defineComponent } from 'vue';

import CheckButton from '@/components/buttons/CheckButton.vue';
import SingleChoiceQuestion from '@/components/closedQuestion/SingleChoiceQuestion.vue';
import { questionExecutor } from '@/components/closedQuestion/question';

export default defineComponent({
	name: 'Card',
	components: {
		SingleChoiceQuestion,
		CheckButton,
	},
	setup() {
		const store = useProgressStore();
		return { question, ...questionExecutor(() => store.finishPuzzle('Card')) };
	},
});
</script>

<style lang="scss" scoped>
.questionHelper {
	width: 80vw;
	max-width: 950px;
}

img {
	width: 95%;
	max-width: 950px;
}
</style>
