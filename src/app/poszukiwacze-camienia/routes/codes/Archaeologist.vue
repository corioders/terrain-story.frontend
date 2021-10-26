<template>
	<p>Archeolog</p>
	<Video url="https://www.youtube.com/embed/ftyeIztSF1g" />
	<n-card title="Szanowni Poszukiwacze Camienia,">
		<p>
			winszuje inicjatywy. Cieszę się, że razem będziemy mogli ruszyć na poszukiwania tego niezwykłego artefaktu. Prawdę powiedziawszy sam, poczyniłem już pierwsze kroki.
			W środku Wenezuelskiej dżungli, udało mi się odnaleźć starożytne ruiny majów, które kierują do lokalizacji Camienia. Niestety Doktor Zło czai się na każdym kroku.
			Wysyłam je Wam w zakodowanej formie. Nanieście punkty na przecięcie linii, a następnie przeprowadźcie linie z przeciwległych wierzchołków uzyskanej figury.
			Wskazówki znajdują się w miejscu przecięcia tych linii.
		</p>
		<h4>
			Powodzenia <br />
			Wasz Scott
		</h4>
	</n-card>
	<TrapezoidColoring />
</template>

<script lang="ts">
	import { NCard } from 'naive-ui';
	import { defineComponent } from 'vue';

	import Video from '@/components/Video.vue';

	import TrapezoidColoring from '@rock/components/TrapezoidColoring.vue';

	export default defineComponent({
		name: 'Archaeologist',
		components: {
			NCard,
			Video,
			TrapezoidColoring,
		},
	});
</script>
<style lang="scss" scoped>
	.n-card {
		width: 95%;
		max-width: 600px;
	}
</style>