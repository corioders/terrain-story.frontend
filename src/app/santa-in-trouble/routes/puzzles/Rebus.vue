<template>
	<p>Solve the rebus.</p>
	<img src="@eng/assets/rebus.webp" alt="Rebus: money without 'ey' + key + s" />
	<VInput v-model="answer" class="VInput" name="Answer" @input="submitAnswer" />

	<CheckButton :isCorrect="isAnswerCorrect" @click="handleCheck()" />
</template>

<script lang="ts">
import { VInput } from '@corioders/vueui';
import { useProgressStore } from '@eng/store/progress';
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
			isAnswerCorrect.value = answer.value.toLowerCase() === 'monkeys';
		}

		const handleCheck = (): void => {
			if (isAnswerCorrect.value === true) store.finishPuzzle('Rebus');
		};

		return { answer, submitAnswer, isAnswerCorrect, handleCheck };
	},
});
</script>
<style lang="scss" scoped>
@use '@scssGlobals/colors';

img {
	width: 100%;
	max-width: 950px;
}

.VInput {
	--accent-color: #{colors.$secondary};
}
</style>
