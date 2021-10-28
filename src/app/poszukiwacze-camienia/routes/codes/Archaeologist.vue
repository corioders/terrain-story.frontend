<template>
	<p>Archeolog</p>
	<Video url="https://www.youtube.com/embed/ftyeIztSF1g" />
	<n-card title="Szanowni Poszukiwacze Camienia,">
		<p>
			winszuje inicjatywy. Cieszę się, że razem będziemy mogli ruszyć na poszukiwania tego niezwykłego artefaktu. Prawdę powiedziawszy sam, poczyniłem już pierwsze kroki.
			W środku Wenezuelskiej dżungli, udało mi się odnaleźć starożytne ruiny majów, które kierują do lokalizacji Camienia. Niestety Doktor Zło czai się na każdym kroku.
			Wysyłam je Wam w zakodowanej formie. Nanieście poniższe koordynaty na pole, wtedy ukaże wam się wskazówka.
		</p>
		<h4>
			Powodzenia <br />
			Wasz Scott
		</h4>
		<p>E8, K4, H5, R8, I4, F8, P7, O6, N5, K8, G6, I8, N8, O8, J8, L4, L8, S8, F7, P8, M4, G8, H8, M8, J4, D8</p>
	</n-card>
	<TrapezoidColoring :trapezoidDescriptor="trapezoidDescriptor" @correct="isCorrect = true" @incorrect="isCorrect = false" />
  <CheckButton @click="handleCheck()" />
</template>

<script lang="ts">
	import { NCard } from 'naive-ui';
	import { defineComponent, ref } from 'vue';

	import Video from '@/components/Video.vue';
	import CheckButton from '@/components/buttons/CheckButton.vue';

	import TrapezoidColoring from '@/app/poszukiwacze-camienia/components/trapezoidColoring/TrapezoidColoring.vue';
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

			return { isCorrect, handleCheck };
		},
		data: () => ({
			trapezoidDescriptor: {
				dimensions: {
					width: 18,
					height: 15,
				},
				correctColors: [
					{ x: 3, y: 7 },
					{ x: 4, y: 7 },
					{ x: 5, y: 7 },
					{ x: 6, y: 7 },
					{ x: 7, y: 7 },
					{ x: 8, y: 7 },
					{ x: 9, y: 7 },
					{ x: 10, y: 7 },
					{ x: 11, y: 7 },
					{ x: 12, y: 7 },
					{ x: 13, y: 7 },
					{ x: 14, y: 7 },
					{ x: 15, y: 7 },
					{ x: 16, y: 7 },
					{ x: 17, y: 7 },

					{ x: 15, y: 6 },
					{ x: 14, y: 5 },
					{ x: 13, y: 4 },

					{ x: 12, y: 3 },
					{ x: 11, y: 3 },
					{ x: 10, y: 3 },
					{ x: 9, y: 3 },
					{ x: 8, y: 3 },

					{ x: 7, y: 4 },
					{ x: 6, y: 5 },
					{ x: 5, y: 6 },
				],
			},
		}),
	});
</script>
<style lang="scss" scoped>
	.n-card {
		width: 95%;
		max-width: 600px;
	}
</style>