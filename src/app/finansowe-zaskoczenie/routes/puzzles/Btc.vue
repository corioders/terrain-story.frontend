<template>
	<p>Jaka jest pełna nazwa najpopularniejszej kryptowaluty “BTC”, która została wprowadzona w 2009 roku przez Satoshi Nakamoto?</p>
	<VInput v-model="answer" class="VInput" name="Odpowiedź" @input="submitAnswer" />

	<CheckButton :isCorrect="isAnswerCorrect" @click="handleCheck()" />
</template>

<script lang="ts">
import { VInput } from '@corioders/vueui';
import { useProgressStore } from '@fin/store/progress';
import { defineComponent, ref } from 'vue';

import CheckButton from '@/components/buttons/CheckButton.vue';

export default defineComponent({
	name: 'Rebus',
	components: {
		VInput,
		CheckButton,
	},
	setup() {
		const store = useProgressStore();

		let isAnswerCorrect = ref(false);
		let answer = ref('');
		function submitAnswer(): void {
			isAnswerCorrect.value = answer.value.toLowerCase() === 'bitcoin';
		}

		const handleCheck = (): void => {
			if (isAnswerCorrect.value === true) store.finishPuzzle('Btc');
		};

		return { answer, submitAnswer, isAnswerCorrect, handleCheck };
	},
});
</script>
<style lang="scss" scoped>
p {
	width: 80vw;
	max-width: 950px;
}
</style>
