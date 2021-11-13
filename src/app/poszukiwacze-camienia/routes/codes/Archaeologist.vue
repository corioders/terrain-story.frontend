<template>
	<Video videoId="ftyeIztSF1g" />
	<n-card>
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
		<p>G5, H2, F2, D4, J5, I3, E5, G2, J4, K5, C5, H5, E3, I5, F5, D5</p>
	</n-card>
	<TrapezoidColoring :trapezoidDescriptor="trapezoidDescriptor" @correct="isCorrect = true" @incorrect="isCorrect = false" />
	<CheckButton :isCorrect="isCorrect" @click="handleCheck" />
</template>

<script lang="ts">
	import { NCard } from 'naive-ui';
	import { defineComponent, ref } from 'vue';

	import Video from '@/components/YoutubeVideo.vue';
	import CheckButton from '@/components/buttons/CheckButton.vue';

	import TrapezoidColoring from '@/app/poszukiwacze-camienia/components/trapezoidColoring/TrapezoidColoring.vue';
	import { trapezoidDescriptor } from '@rock/assets/archaeologist';
	import { useProgressStore } from '@rock/store/progress';

	export default defineComponent({
		name: 'Archaeologist',
		components: {
			NCard,
			Video,
			TrapezoidColoring,
			CheckButton,
		},
		setup() {
			const store = useProgressStore();
			const isCorrect = ref<boolean>(false);

			const handleCheck = (): void => {
				if (isCorrect.value === true) store.finishPuzzle('Archaeologist');
			};

			return { trapezoidDescriptor, isCorrect, handleCheck };
		},
	});
</script>
<style lang="scss" scoped>
	.n-card {
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
		width: 95%;
		max-width: 600px;
	}
</style>