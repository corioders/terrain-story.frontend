<template>
	<p v-if="!isUA.value">Ułóż z pomieszanych liter jedną z nazw chorób psychicznych, a następnie poznaj jej najczęstsze objawy.</p>
	<p v-else>Використовуйте змішані літери, щоб скласти одну з назв психічних захворювань, а потім дізнайтеся про найпоширеніші симптоми.</p>

	<p v-if="!isUA.value">csihorfneaiz</p>
	<p v-else>шзяеофріин</p>

	<VInput v-if="!isUA.value" v-model="answer" class="VInput" name="Odpowiedź" />
	<VInput v-else v-model="answer" class="VInput" name="Відповідь" />

	<div v-if="isAnswerCorrect" class="description">
		<template v-if="!isUA.value">
			<p>Objawy tej choroby najczęściej występują we wczesnej młodości. Do najpopularniejszych objawów należą:</p>
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
		</template>
		<template v-else>
			<p>Симптоми цього захворювання найчастіше виникають у ранньому підлітковому віці. Найпоширеніші симптоми включають:</p>
			<ul>
				<li>цікавитися тільки своїми внутрішніми відчуттями, жити своїми ідеями,</li>
				<li>ізоляція від близьких,</li>
				<li>послаблення процесу спарювання,</li>
				<li>неоднорідність переживання, мислення і почуття.</li>
			</ul>
			<p>Інші більш рідкісні симптоми включають:</p>
			<ul>
				<li>зорові, слухові, нюхові, смакові, чуттєві, маячні галюцинації,</li>
				<li>погіршення пам'яті,</li>
				<li>найчастіше прогалини в пам'яті,</li>
				<li>віднесення власного досвіду до оточення.</li>
			</ul>
		</template>
	</div>
	<PrimaryButton :disabled="!isAnswerCorrect" @click="handleClick()">
		<template v-if="!isUA.value">Zrobione</template>
		<template v-else>Зроблено</template>
	</PrimaryButton>
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

		const isAnswerCorrect = computed(() => {
			if (!window.isUA.value) return answer.value.toLowerCase() === 'schizofrenia';
			else return answer.value.toLowerCase() === 'шизофренія';
		});
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
