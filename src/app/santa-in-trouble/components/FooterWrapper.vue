<template>
	<CFooter>
		<template #informations>
			<img src="@/assets/zwztLogo.webp" alt="Projekt realizowany w ramach olimpiady 'Zwolnieni z Teorii'" />
			<p>Rozwiązałeś {{ progress().value }} z {{ progress().max }} zagadek</p>
			<p>Projekt dofinansowany ze środków Unii Europejskiej</p>
		</template>
		<template #menu>
			<TinyLink @click="$router.push('/')">Santa in trouble</TinyLink>
			<!-- <TinyLink @click="$router.push('/regulamin')">Regulamin</TinyLink> -->
			<TinyLink @click="$router.push('/juz-zrobione')">Usuń Postęp</TinyLink>
			<TinyLink @click="$router.push('/polityka-prywatnosci')">Polityka Prywatności</TinyLink>
			<TinyLink @click="$router.push('/finansowanie')">Finansowanie</TinyLink>
		</template>
	</CFooter>
</template>

<script lang="ts">
import { useProgressStore, PuzzleID } from '@eng/store/progress';
import { defineComponent } from 'vue';

import CFooter from '@/components/Footer.vue';
import handleProgress, { HandleProgressReturn } from '@/components/progress/handleProgress';
import { TinyLink } from '@/theme/Link';

export default defineComponent({
	name: 'FooterWrapper',
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
	margin: 0;
}

img {
	margin: 64px 0 32px;
	min-width: 180px;
	width: 10vw;
	max-width: 250px;
}
</style>
