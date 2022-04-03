<template>
	<p>
		Stopa inflacji określa procentową zmianę poziomu cen w danym czasie, najczęściej rok do roku. Istnieje prosty wzór na obliczenie stopy inflacji:
		<br />
		I = (Cf-Cp)/Cp*100
		<br />
		I - stopa inflacji,
		<br />
		Cf - cena towaru w danym roku,
		<br />
		Cp - cena towaru rok wcześniej.
		<br />
		Oblicz stopę inflacji w Polsce na początek roku 2022 wiedząc, że cena pewnego towaru w grudniu 2021 roku wynosiła 101,0, a roku poprzedniego był to koszt 93. Wynik
		podaj z dokładnością dwóch miejsc po przecinku, np. 5,71%
	</p>
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
			const lowerAnswer = answer.value.toLowerCase();
			if (lowerAnswer === '8,6' || lowerAnswer === '8.6' || lowerAnswer === '8,60' || lowerAnswer === '8.60') {
				isAnswerCorrect.value = true;
				return;
			}
			isAnswerCorrect.value = false;
		}

		const handleCheck = (): void => {
			if (isAnswerCorrect.value === true) store.finishPuzzle('Inflation');
		};

		return { answer, submitAnswer, isAnswerCorrect, handleCheck };
	},
});
</script>
<style lang="scss" scoped>
img {
	width: 80vw;
	max-width: 950px;
}

p {
	width: 80vw;
	max-width: 950px;
}
</style>
