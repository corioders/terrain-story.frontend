<template>
	<h2>Procedura treningu Jacobsona</h2>
	<ol>
		<li>Weź dwa głębokie oddechy. Powietrze staraj się wydychać powoli.</li>
		<li>Zaciśnij pięści obu rąk. Poczuj napięcie. Przytrzymaj tak około 5 sekund… i odpuść… Poczuj, jak Twoje dłonie przyjemnie się odprężają.</li>
		<li>Teraz napnij wszystkie mięśnie obu rąk, przyciskając przedramiona do swoich barków. Przytrzymaj… i odpuść…</li>
		<li>Podnieś swoje barki jak najwyżej — tak jakbyś wzruszał ramionami. Przytrzymaj… odpuść…</li>
		<li>Teraz zamknij oczy, zaciśnij powieki i napnij wszystkie mięśnie wokół oczu. Zaciśnij mocno… i puść…</li>
		<li>Zaciśnij zęby i jednocześnie mocno przyciśnij język do podniebienia. Przytrzymaj… odpuść…</li>
		<li>
			Przesuń głowę do tyłu i napnij tylne mięśnie swojej szyi. Przytrzymaj… odpuść… Ten punkt powtórz dwa razy, ponieważ mięśnie szyi są zwykle najbardziej napięte.
		</li>
		<li>Cofnij ramiona tak, aby napiąć mięśnie swoich pleców, naprężając je jakby w łuk. Przytrzymaj… rozluźnij…</li>
		<li>Wciągnij brzuch, tak jakbyś chciał przycisnąć go do kręgosłupa. Przytrzymaj… odpuść…</li>
		<li>Wyprostuj nogi i ściągnij uda. Napnij mięśnie. Przytrzymaj… rozluźnij…</li>
		<li>Podnieś stopy z ziemi i kierując palce stóp jak najbardziej w kierunku swojej głowy, napnij mięśnie stóp. Przytrzymaj… odpuść…</li>
		<li>Podnieś stopy jeszcze raz, tym razem podkurczając palce tak, jakbyś chciał je zagrzebać w piasku. Napnij mięśnie stóp. Przytrzymaj… odpuść…</li>
		<li>Kiedy uznasz, że ćwiczenie dobiegło końca, weź trzy głębokie oddechy.</li>
	</ol>
	<PrimaryButton v-show="showButton" @click="finish('Jacobson')">Zrobione</PrimaryButton>
</template>

<script lang="ts">
	import { defineComponent, ref, onMounted } from 'vue';

	import { PrimaryButton } from '@/theme/Button';
	import { useProgressStore } from '@help/store/progress';

	export default defineComponent({
		name: 'Jacobson',
		components: {
			PrimaryButton,
		},
		setup() {
			const showButton = ref(false);
			onMounted(() => {
				setTimeout(() => {
					showButton.value = true;
				}, 3000);
			});
			return { finish: useProgressStore().finishPuzzle, showButton };
		},
	});
</script>
<style lang="scss" scoped>
	h2 {
		font-weight: 500;
	}
	ol {
		li {
			padding: 5px 0;
		}
	}
</style>
