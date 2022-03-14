<template>
	<p>Ułóż z pomieszanych liter jedną z nazw chorób psychicznych, a następnie poznaj jej najczęstsze objawy.</p>
	<p>csihorfneaiz</p>
	<VInput v-model="answer" class="VInput" name="Odpowiedź" @input="submitAnswer" />
	<div v-if="isAnswerCorrect" class="description">
		<p>Obajwy tej choroby najczęściej występują we wczesnej młodości. Do najpopularniejszych objawów należą:</p>
		<ul>
			<li>interesowanie się wyłącznie swoimi uczuciami wewnętrznymi, życie własnymi wyobrażeniami,</li>
			<li>izolacja od najbliższych,</li>
			<li>rozluźnienie procesu kojarzenia,</li>
			<li>niejednorodność przeżywania, myślenia i odczuwania.</li>
		</ul>
		<p>Kolejne rzadsze objawy to:</p>
		<ul>
			<li>omamy wzrokowe, słuchowe, węchowe, smakowe, czuciowe, urojenia,</li>
			<li>zaburzenia pamięci,</li>
			<li>najczęściej luki pamięciowe,</li>
			<li>przypisywanie otoczeniu własnych przeżyć.</li>
		</ul>
	</div>
	<PrimaryButton :disabled="!isAnswerCorrect" @click="handleClick()">Zrobione</PrimaryButton>
</template>

<script lang="ts">
import { VInput } from '@corioders/vueui';
import { useProgressStore } from '@help/store/progress';
import { defineComponent, ref, computed } from 'vue';

import { PrimaryButton } from '@/theme/Button';

export default defineComponent({
	name: 'Word',
	components: {
		VInput,
		PrimaryButton,
	},
	setup() {
		const store = useProgressStore();

		const isAnswerCorrect = computed(() => answer.value.toLowerCase() === 'schizofrenia');
		let answer = ref('');

		const handleClick = (): void => {
			if (isAnswerCorrect.value === true) store.finishPuzzle('Word');
		};

		return { answer, isAnswerCorrect, handleClick };
	},
});
</script>
<style lang="scss" scoped>
.description {
	max-width: 950px;

	ul {
		margin-top: 0;
	}
}
</style>
