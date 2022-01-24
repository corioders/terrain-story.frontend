<template>
	Bingo
	<Bingo :bingoDescriptor="bingoDescriptor" @correct="handleFinish()" />
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	import { bingoDescriptor } from '@help/assets/bingo';
	import Bingo from '@help/components/bingo/Bingo.vue';
	import { useProgressStore } from '@help/store/progress';

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
