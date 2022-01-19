<template>
	<CFooter>
		<template #informations>
			<img src="@/assets/zwztLogo.webp" alt="Projekt realizowany w ramach olimpiady 'Zwolnieni z Teorii'" />
			<p>Rozwiązałeś {{ progress().value }} z {{ progress().max }} zagadek</p>
			<p>Projekt dofinansowany ze środków Unii Europejskiej</p>
		</template>
		<template #menu>
			<TinyLink @click="$router.push('/')">Pomóż Abelardowi</TinyLink>
			<TinyLink @click="$router.push('/regulamin')">Regulamin</TinyLink>
			<TinyLink @click="$router.push('/polityka-prywatnosci')">Polityka Prywatności</TinyLink>
			<TinyLink @click="$router.push('/finansowanie')">Finansowanie</TinyLink>
		</template>
	</CFooter>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	import CFooter from '@/components/Footer.vue';
	import handleProgress, { HandleProgressReturn } from '@/components/progress/handleProgress';

	import { TinyLink } from '@/theme/Link';
	import { useProgressStore, PuzzleID } from '@help/store/progress';

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
		margin: 64px 0;
		min-width: 200px;
		width: 50vw;
		max-width: 250px;
	}
</style>
