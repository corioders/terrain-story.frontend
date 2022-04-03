<template>
	<p class="questionHelper">{{ question.question }}</p>
	<img src="@fin/assets/crypto.webp" alt="kryptowaluty" />

	<SingleChoiceQuestion
		:options="question.options"
		:answer="question.answer"
		name="crypto"
		:displayFeedback="displayFeedback"
		@correct="handleAnswer(true)"
		@incorrect="handleAnswer(false)"
	/>
	<CheckButton :isCorrect="isCorrect" @click="handleCheck" />
</template>

<script lang="ts">
import { crypto as question } from '@fin/assets/questions';
import { useProgressStore } from '@fin/store/progress';
import { defineComponent } from 'vue';

import CheckButton from '@/components/buttons/CheckButton.vue';
import SingleChoiceQuestion from '@/components/closedQuestion/SingleChoiceQuestion.vue';
import { questionExecutor } from '@/components/closedQuestion/question';

export default defineComponent({
	name: 'Crypto',
	components: {
		SingleChoiceQuestion,
		CheckButton,
	},
	setup() {
		const store = useProgressStore();
		return { question, ...questionExecutor(() => store.finishPuzzle('Crypto')) };
	},
});
</script>

<style lang="scss" scoped>
.questionHelper {
	text-align: center;
}

img {
	width: 95%;
	max-width: 950px;
}
</style>
