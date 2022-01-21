<template>
	<p>Nigdy nie bójmy się prosić o pomoc</p>
	<div>
		<p>telefon zaufania dla dzieci i młodzieży</p>
		<p>“116 ???” 11 * 11 - 10 = ???</p>
		<VInput v-model="number1" name="???" />
	</div>
	<div>
		<p>telefon zaufania dla dorosłych</p>
		<p>“116 ???” 11 * 10 + 13 = ???</p>
		<VInput v-model="number2" name="???" @input="submitAnswer" />
	</div>
	<CheckButton :isCorrect="isCorrect" @click="handleCheck" />
</template>

<script lang="ts">
	import { defineComponent, ref } from 'vue';

	import CheckButton from '@/components/buttons/CheckButton.vue';

	import { VInput } from '@corioders/vueui';
	import { useProgressStore } from '@help/store/progress';

	export default defineComponent({
		name: 'PhoneNumbers',
		components: {
			CheckButton,
			VInput,
		},
		setup() {
			const number1 = ref('');
			const number2 = ref('');
			const isCorrect = ref(false);
			const store = useProgressStore();

			function submitAnswer(): void {
				isCorrect.value = parseInt(number1.value) === 111 && parseInt(number2.value) === 123;
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
		margin-bottom: 12px;
	}
</style>
