<template>
	<p>
		Pomóż naszemu bohaterowi zredukować napięcie, przećwicz skrócony trening Jacobsona, który pozwala pozbyć się napięć w mięśniach, pogłębić oddech, szybko zrelaksować
		się.
	</p>

	<p>{{ jacobson[index] }}</p>
	<PrimaryButton @click="handleClick">{{ index < jacobson.length - 1 ? 'Dalej' : 'Zrobione' }}</PrimaryButton>
</template>

<script lang="ts">
import { useProgressStore } from '@help/store/progress';
import { defineComponent, ref } from 'vue';

import { PrimaryButton } from '@/theme/Button';

export default defineComponent({
	name: 'Jacobson',
	components: {
		PrimaryButton,
	},
	setup() {
		const jacobson = [
			'Weź dwa głębokie oddechy. Powietrze staraj się wydychać powoli.',
			'Zaciśnij pięści obu rąk. Poczuj napięcie. Przytrzymaj tak około 5 sekund… i odpuść… Poczuj, jak Twoje dłonie przyjemnie się odprężają.',
			'Teraz napnij wszystkie mięśnie obu rąk, przyciskając przedramiona do swoich barków. Przytrzymaj… i odpuść…',
			'Podnieś swoje barki jak najwyżej — tak jakbyś wzruszał ramionami. Przytrzymaj… odpuść…',
			'Teraz zamknij oczy, zaciśnij powieki i napnij wszystkie mięśnie wokół oczu. Zaciśnij mocno… i puść…',
			'Zaciśnij zęby i jednocześnie mocno przyciśnij język do podniebienia. Przytrzymaj… odpuść…',
			'Przesuń głowę do tyłu i napnij tylne mięśnie swojej szyi. Przytrzymaj… odpuść… Ten punkt powtórz dwa razy, ponieważ mięśnie szyi są zwykle najbardziej napięte.',
			'Cofnij ramiona tak, aby napiąć mięśnie swoich pleców, naprężając je jakby w łuk. Przytrzymaj… rozluźnij…',
			'Wciągnij brzuch, tak jakbyś chciał przycisnąć go do kręgosłupa. Przytrzymaj… odpuść…',
			'Wyprostuj nogi i ściągnij uda. Napnij mięśnie. Przytrzymaj… rozluźnij…',
			'Podnieś stopy z ziemi i kierując palce stóp jak najbardziej w kierunku swojej głowy, napnij mięśnie stóp. Przytrzymaj… odpuść…',
			'Podnieś stopy jeszcze raz, tym razem podkurczając palce tak, jakbyś chciał je zagrzebać w piasku. Napnij mięśnie stóp. Przytrzymaj… odpuść…',
			'Kiedy uznasz, że ćwiczenie dobiegło końca, weź trzy głębokie oddechy.',
		];

		const index = ref(0);

		function handleClick(): void {
			if (index.value < jacobson.length - 1) index.value++;
			else useProgressStore().finishPuzzle('Jacobson');
		}

		return { jacobson, index, handleClick };
	},
});
</script>
<style lang="scss" scoped>
ol {
	li {
		padding: 5px 0;
	}
}
</style>
