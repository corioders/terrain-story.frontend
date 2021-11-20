<template>
	<VFlex>
		<section>
			<h2>Więcej o fabule gry</h2>
			<p>
				Na ziemię, w samym centrum Katowic spada magiczny artefakt Camień. Posiada on cudowną moc zjednywania przyjaciół, zarażania uśmiechem i dobrą energią. Przez wieki
				był on poszukiwany nie tylko przez ludzkość ale i istoty pozaziemskie. Teraz masz szansę znaleźć go Ty. W trakcie gry poznasz Kosmitę Ferdynanda, Księżniczkę,
				Hakera, Inspektor Kluskę i wiele innych postaci, które doprowadzą Cię do rozwiązania zagadki. Przenieś się do świata fantazji i przeżyj z nami tę niesamowitą
				przygodę.
			</p>
			<InfoButton @click="$router.push('/')">Wróć do strony głównej</InfoButton>
		</section>
	</VFlex>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	import { InfoButton } from '@/theme/Button';
	import { VFlex } from '@corioders/vueui';

	export default defineComponent({
		name: 'AboutGame',
		components: {
			VFlex,
			InfoButton,
		},
	});
</script>
<style lang="scss" scoped>
	section {
		width: 95%;
		max-width: 950px;
	}
</style>
