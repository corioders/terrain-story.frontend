<template>
	<Video videoId="ftyeIztSF1g" />
	<VCard style="width: 95%; max-width: 600px">
		<article>
			<h2>Szanowni Poszukiwacze Camienia,</h2>
			<p>
				winszuję inicjatywy. Cieszę się, że razem będziemy mogli ruszyć na poszukiwania tego niezwykłego artefaktu. Prawdę powiedziawszy, sam poczyniłem już pierwsze
				kroki. W środku wenezuelskiej dżungli, udało mi się odnaleźć starożytne ruiny Majów, które kierują do lokalizacji Camienia. Niestety Doktor Zło czai się na każdym
				kroku. Wysyłam je Wam w zakodowanej formie. Nanieście poniższe koordynaty na pole, wtedy ukaże Wam się wskazówka.
			</p>
			<h3>
				Powodzenia <br />
				Wasz Scott
			</h3>
		</article>
		<p>{{ correctSelections }}</p>
	</VCard>
	<GridColoring :gridDescriptor="trapezoidDescriptor" @correct="handleAnswer(true)" @incorrect="handleAnswer(false)" />
	<CheckButton :isCorrect="isCorrect" @click="handleCheck" />
</template>

<script lang="ts">
import { VCard } from '@corioders/vueui';
import { useProgressStore } from '@rock/store/progress';
import { defineComponent } from 'vue';

import Video from '@/components/YoutubeVideo.vue';
import CheckButton from '@/components/buttons/CheckButton.vue';
import { questionExecutor } from '@/components/closedQuestion/question';
import GridColoring from '@/components/gridColoring/GridColoring.vue';
import { GridDescriptor, correctSelectionsForHuman } from '@/components/gridColoring/grid';

export const trapezoidDescriptor: GridDescriptor = {
	dimensions: {
		width: 15,
		height: 8,
	},
	correctSelections: [
		{ x: 5, y: 4 },
		{ x: 4, y: 4 },
		{ x: 6, y: 4 },
		{ x: 7, y: 4 },
		{ x: 8, y: 4 },
		{ x: 9, y: 4 },
		{ x: 10, y: 4 },
		{ x: 9, y: 3 },
		{ x: 8, y: 2 },
		{ x: 7, y: 1 },
		{ x: 6, y: 1 },
		{ x: 5, y: 1 },
		{ x: 4, y: 2 },
		{ x: 3, y: 3 },
		{ x: 2, y: 4 },
		{ x: 3, y: 4 },
	],
};
Object.freeze(trapezoidDescriptor);

const correctSelections = correctSelectionsForHuman(trapezoidDescriptor.correctSelections);
export default defineComponent({
	name: 'Archaeologist',
	components: {
		VCard,
		Video,
		GridColoring,
		CheckButton,
	},
	setup() {
		const store = useProgressStore();
		return { trapezoidDescriptor, ...questionExecutor(() => store.finishPuzzle('Archaeologist')), correctSelections };
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
