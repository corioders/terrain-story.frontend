<template>
	<p>
		W tym kraju po II wojnie światowej wystąpiła największa hiperinflacja w historii, największym nominałem był banknot 100 trylionów (trylion - jedynka z 18 zerami)
		pengő, inflacja wyniosła 41,9 biliarda % w skali miesiąca. Oznaczało to podwajanie się cen co 15 godzin. Gdy w 1946 roku wprowadzono tam nową walutę, przyjęto
		przelicznik, iż jedna jednostka otrzymała wartość 400 kwadryliardów (kwadryliard - jedynka z 27 zerami) pengő. Rozwiąż rebus, by dowiedzieć się jaki to kraj.
	</p>
	<img src="@fin/assets/rebus.webp" alt="Rebus: wąż bez 'ąż' + 'ę' + gry" />
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
			isAnswerCorrect.value = answer.value.toLowerCase() === 'węgry';
		}

		const handleCheck = (): void => {
			if (isAnswerCorrect.value === true) store.finishPuzzle('Rebus');
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
