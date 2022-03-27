<template>
	<VFlex align="center">
		<p>Nigdy nie bójmy się prosić o pomoc</p>
		<div>
			<p>telefon zaufania dla dzieci i młodzieży</p>
			<img src="@help/assets/phoneNumbers/kids.webp" alt="“116 ***” 11 * 11 - 10 = ***" />
			<VInput v-model="number1" name="***" />
		</div>
		<div>
			<p>telefon zaufania dla dorosłych</p>
			<img src="@help/assets/phoneNumbers/adults.webp" alt="“116 ***” 11 * 10 + 13 = ***" />
			<VInput v-model="number2" name="***" @input="submitAnswer" />
		</div>
		<CheckButton :isCorrect="isCorrect" @click="handleCheck" />
	</VFlex>
</template>

<script lang="ts">
import { VInput, VFlex } from '@corioders/vueui';
import { useProgressStore } from '@help/store/progress';
import { defineComponent, ref } from 'vue';

import CheckButton from '@/components/buttons/CheckButton.vue';

export default defineComponent({
	name: 'PhoneNumbers',
	components: {
		CheckButton,
		VInput,
		VFlex,
	},
	setup() {
		const commonNumber = '116';
		const number1 = ref('');
		const number2 = ref('');
		const isCorrect = ref(false);
		const store = useProgressStore();

		function submitAnswer(): void {
			if (
				(parseInt(number1.value) === 111 || number1.value == `${commonNumber}111` || number1.value == `${commonNumber} 111`) &&
				(parseInt(number2.value) === 123 || number2.value == `${commonNumber}123` || number2.value == `${commonNumber} 123`)
			) {
				isCorrect.value = true;
			}
		}

		const handleCheck = (): void => {
			if (isCorrect.value === true) store.finishPuzzle('PhoneNumbers');
		};

		return { number1, number2, isCorrect, submitAnswer, handleCheck };
	},
});
</script>
<style lang="scss" scoped>
div {
	p {
		margin: 0;
	}

	img {
		width: 95%;
		max-width: 950px;
	}

	margin-bottom: 12px;
}
</style>
