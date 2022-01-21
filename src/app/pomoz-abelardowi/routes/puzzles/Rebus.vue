<template>
	<p>Co jest najważniejsze w każdej relacji? Rozwiąż rebus, aby odnaleźć hasło.</p>
	<img src="@help/assets/rebus.webp" alt="Rebus: money without 'ey' + key + s" />
	<VInput v-model="answer" class="VInput" name="Odpowiedź" @input="submitAnswer" />

	<CheckButton :isCorrect="isAnswerCorrect" @click="handleCheck()" />
</template>

<script lang="ts">
	import { defineComponent, ref } from 'vue';

	import CheckButton from '@/components/buttons/CheckButton.vue';

	import { VInput } from '@corioders/vueui';
	import { useProgressStore } from '@help/store/progress';

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
				isAnswerCorrect.value = answer.value.toLowerCase() === 'zaufanie';
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
		width: 100%;
		max-width: 950px;
	}
</style>
