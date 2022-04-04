<template>
	<CFooter>
		<template #informations>
			<img src="@/assets/zwztLogo.webp" style="margin-top: 64px" alt="Projekt realizowany w ramach olimpiady 'Zwolnieni z Teorii'" />
			<img src="@/assets/sftLogo.webp" alt="Samsung Solve for Tomorrow" />
			<p>Projekt dofinansowany ze środków Unii Europejskiej</p>
		</template>
		<template #menu>
			<p>Rozwiązałeś {{ progress().value }} z {{ progress().max }} zagadek</p>
			<TinyLink @click="$router.push('/')">Quiz Lekturowy</TinyLink>
			<TinyLink @click="$router.push('/zglos-blad')">Zgłoś Błąd</TinyLink>
			<TinyLink @click="$router.push('/juz-zrobione')">Usuń Postęp</TinyLink>
			<TinyLink @click="$router.push('/polityka-prywatnosci')">Polityka Prywatności</TinyLink>
			<TinyLink @click="$router.push('/finansowanie')">Finansowanie</TinyLink>
		</template>
	</CFooter>
</template>

<script lang="ts">
import { useProgressStore, PuzzleID } from '@quiz/store/progress';
import { defineComponent } from 'vue';

import CFooter from '@/components/Footer.vue';
import handleProgress, { HandleProgressReturn } from '@/components/progress/handleProgress';
import { TinyLink } from '@/theme/Link';

export default defineComponent({
	name: 'Footer',
	components: {
		CFooter,
		TinyLink,
	},
	setup() {
		const progress: () => HandleProgressReturn = () => handleProgress<PuzzleID>(useProgressStore().puzzles);
		return { progress };
	},
});
</script>
<style lang="scss" scoped>
p {
	font-size: 0.8rem;
}

img {
	margin-bottom: 64px;
	min-width: 200px;
	width: 50vw;
	max-width: 250px;
}
</style>
