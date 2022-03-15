<template>
	<VCard style="width: 95%; max-width: 600px">
		<article>
			<h2>Zaznacz poniższe koordynaty na polu, ukaże Ci opis symbolu.</h2>
			<p>{{ correctSelections }}</p>
		</article>
	</VCard>
	<GridColoring :gridDescriptor="gridDescriptor" @correct="isCorrect = true" />
	<div v-if="isCorrect" class="description">
		<p>
			Litera "psi" w starożytności przeszła wiele zmian znaczeniowych. Oznaczała między innymi motyla, energię, oddech, a na końcowo - duszę. Obecnie jest to jeden z
			najważniejszych symboli w psychologii.
		</p>
	</div>
	<PrimaryButton :disabled="!isCorrect" @click="handleClick">Zrobione</PrimaryButton>
</template>

<script lang="ts">
import { VCard } from '@corioders/vueui';
import { useProgressStore } from '@help/store/progress';
import { defineComponent, ref } from 'vue';

import GridColoring from '@/components/gridColoring/GridColoring.vue';
import { correctSelectionsForHuman, GridDescriptor } from '@/components/gridColoring/grid';
import { PrimaryButton } from '@/theme/Button';

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
		PrimaryButton,
	},
	setup() {
		const store = useProgressStore();
		const isCorrect = ref(false);

		function handleClick(): void {
			if (!isCorrect.value) return;
			store.finishPuzzle('PsiColoring');
		}
		return {
			isCorrect,
			gridDescriptor,
			correctSelections,
			handleClick,
		};
	},
});
</script>
<style lang="scss" scoped>
p {
	max-width: 950px;
}

article {
	h2 {
		font-size: 1.4em;
		margin: 0.75em 0;
	}

	p {
		margin-bottom: 0;
	}
}
</style>
