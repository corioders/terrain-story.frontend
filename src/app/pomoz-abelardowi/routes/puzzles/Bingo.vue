<template>
	<p>Rozluźnij się! Zrób rzeczy zapisane na kartach bingo, potem odznacz wykonanie zadania.</p>
	<Bingo :bingoDescriptor="bingoDescriptor" @correct="handleFinish()" />
</template>

<script lang="ts">
import { bingoDescriptor } from '@help/assets/bingo';
import Bingo from '@help/components/bingo/Bingo.vue';
import { useProgressStore } from '@help/store/progress';
import { defineComponent } from 'vue';

export default defineComponent({
	components: {
		Bingo,
	},
	setup() {
		const store = useProgressStore();
		const handleFinish = (): void => {
			setTimeout(() => store.finishPuzzle('Bingo'), 1000);
		};

		return { bingoDescriptor, handleFinish };
	},
});
</script>
