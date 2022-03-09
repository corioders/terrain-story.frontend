<template>
	<VCard style="width: 95%; max-width: 600px">
		<h1>!! siema simea jakaś instrukcja co zrobić !!</h1>
		<p>{{ correctSelections }}</p>
	</VCard>
	<GridColoring :gridDescriptor="gridDescriptor" @correct="showDescription = true" />
	<div v-if="showDescription">
		<p>Description!</p>
	</div>
	<CheckButton :isCorrect="isCorrect" @click="handleCheck" />
</template>

<script lang="ts">
import { VCard } from '@corioders/vueui';
import { useProgressStore } from '@help/store/progress';
import { defineComponent, ref } from 'vue';

import CheckButton from '@/components/buttons/CheckButton.vue';
import { questionExecutor } from '@/components/closedQuestion/question';
import GridColoring from '@/components/gridColoring/GridColoring.vue';
import { correctSelectionsForHuman, GridDescriptor } from '@/components/gridColoring/grid';

export const gridDescriptor: GridDescriptor = {
	dimensions: {
		width: 10,
		height: 10,
	},
	correctSelections: [
		{ x: 4, y: 1 },
		{ x: 4, y: 6 },
		{ x: 4, y: 8 },
		{ x: 4, y: 7 },
		{ x: 4, y: 5 },
		{ x: 4, y: 4 },
		{ x: 4, y: 2 },
		{ x: 4, y: 3 },
		{ x: 5, y: 6 },
		{ x: 6, y: 5 },
		{ x: 6, y: 4 },
		{ x: 7, y: 4 },
		{ x: 7, y: 3 },
		{ x: 3, y: 6 },
		{ x: 2, y: 5 },
		{ x: 2, y: 4 },
		{ x: 1, y: 4 },
		{ x: 1, y: 3 },
	],
};
Object.freeze(gridDescriptor);
const correctSelections = correctSelectionsForHuman(gridDescriptor.correctSelections);

export default defineComponent({
	name: 'PsiColoring',
	components: {
		VCard,
		GridColoring,
		CheckButton,
	},
	setup() {
		const store = useProgressStore();
		const showDescription = ref(false);
		return {
			showDescription,
			gridDescriptor,
			correctSelections,
			...questionExecutor(() => store.finishPuzzle('PsiColoring')),
		};
	},
});
</script>
<style lang="scss" scoped>
article {
	h2 {
		font-size: 1.4em;
		margin: 0.75em 0;
	}

	p {
		margin-bottom: 0;
	}

	h3 {
		font-size: 1em;
		margin: 0.75em 0;
	}
}
</style>
