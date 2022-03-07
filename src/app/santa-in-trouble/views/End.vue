<template>
	<VFlex v-if="!displayMark" gap="12px" class="VFlex">
		<p>Create a sentence from the words.</p>
		<p>
			<span v-for="(word, i) in sentence" :key="`word${i}-${word}`" style="margin-right: 3px">{{ word }}</span>
		</p>
		<Input label="Sentence" name="sentence" :isCorrect="isSentenceCorrect" @answer="submitInputAnswer($event)" />
		<SingleChoiceQuestion
			v-if="isSentenceCorrect"
			name="What do monkeys sing at Christmas?"
			question="What do monkeys sing at Christmas?"
			:options="['Jungle Bells', 'Silent Night', 'Santa Claus is comin\' to town']"
			answer="Jungle Bells"
			:displayFeedback="displayFeedback"
			@correct="handleRadioAnswer(true)"
			@incorrect="handleRadioAnswer(false)"
		/>
		<CheckButton v-if="isSentenceCorrect" :isCorrect="isAnswerCorrect" @click="handleRadioCheck" />
	</VFlex>
	<VFlex v-else gap="12px" class="VFlex">
		<p>Well done, you've finished the game</p>
	</VFlex>
</template>

<script lang="ts">
import { VFlex } from '@corioders/vueui';
import { defineComponent, ref } from 'vue';

import Input from '@/components/Input.vue';
import CheckButton from '@/components/buttons/CheckButton.vue';
import SingleChoiceQuestion from '@/components/closedQuestion/SingleChoiceQuestion.vue';
import shuffleOptions from '@/components/closedQuestion/shuffleOptions';

export default defineComponent({
	name: 'Rebus',
	components: {
		Input,
		SingleChoiceQuestion,
		CheckButton,
		VFlex,
	},
	setup() {
		const sentence = shuffleOptions(['What', 'do', 'monkeys', 'sing', 'at', 'Christmas?']);

		let isSentenceCorrect = ref<boolean>(false);
		function submitInputAnswer(e: string): void {
			isSentenceCorrect.value = e.toLowerCase() === 'what do monkeys sing at christmas?';
		}

		const isAnswerCorrect = ref<boolean>(false);
		const displayFeedback = ref<boolean>(false);

		const handleRadioAnswer = (isSentenceCorrect: boolean): void => {
			isAnswerCorrect.value = isSentenceCorrect;
			displayFeedback.value = false;
		};

		const handleRadioCheck = (): void => {
			displayFeedback.value = true;
			if (isAnswerCorrect.value) displayMark.value = true;
		};

		const displayMark = ref<boolean>(false);

		return { sentence, isSentenceCorrect, isAnswerCorrect, displayFeedback, displayMark, submitInputAnswer, handleRadioAnswer, handleRadioCheck };
	},
});
</script>
<style lang="scss" scoped>
.VFlex {
	max-width: 950px;
}
</style>
