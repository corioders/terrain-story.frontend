<template>
	<p>Solve the rebus.</p>
	<img src="@eng/assets/rebus.webp" alt="Rebus: money without 'ey' + key + s" />
	<Input label="Answer" name="rebus" :isCorrect="isAnswerCorrect" @answer="submitAnswer($event)" />
	<CheckButton :isCorrect="isAnswerCorrect" @click="handleCheck()" />
</template>

<script lang="ts">
	import { defineComponent, ref } from 'vue';

	import Input from '@/components/Input.vue';
	import CheckButton from '@/components/buttons/CheckButton.vue';

	import { useProgressStore } from '@eng/store/progress';

	export default defineComponent({
		name: 'Rebus',
		components: {
			Input,
			CheckButton,
		},
		setup() {
			const store = useProgressStore();

			let isAnswerCorrect = ref(false);
			function submitAnswer(e: string): void {
				isAnswerCorrect.value = e.toLowerCase() === 'monkeys';
			}

			const handleCheck = (): void => {
				if (isAnswerCorrect.value === true) store.finishPuzzle('Rebus');
			};

			return { submitAnswer, isAnswerCorrect, handleCheck };
		},
	});
</script>
<style lang="scss" scoped>
	img {
		width: 100%;
		max-width: 950px;
	}
</style>