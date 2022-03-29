<template>
	<CFooter>
		<template #informations>
			<img src="@/assets/sftLogo.webp" style="margin-top: 64px" alt="Samsung Solve for Tomorrow" />
			<img src="@/assets/zwztLogo.webp" alt="Projekt realizowany w ramach olimpiady 'Zwolnieni z Teorii'" />
			<p v-if="!isUA.value">Projekt dofinansowany ze środków Unii Europejskiej</p>
			<p v-else>Проект профінансовано з бюджету Європейського Союзу</p>
		</template>
		<template #menu>
			<p v-if="!isUA.value">Rozwiązałeś {{ progress().value }} з {{ progress().max }} zagadek</p>
			<p v-else>Розв'язано {{ progress().value }} z {{ progress().max }} загадок</p>

			<TinyLink @click="$router.push('/')">
				<template v-if="!isUA.value"> Pomóż Abelardowi </template>
				<template v-else> Допоможи Абелардові </template>
			</TinyLink>
			<TinyLink @click="$router.push('/zglos-blad')">
				<template v-if="!isUA.value"> Zgłoś Błąd </template>
				<template v-else> Повідом про помилку </template>
			</TinyLink>
			<TinyLink @click="$router.push('/juz-zrobione')">
				<template v-if="!isUA.value"> Usuń Postęp </template>
				<template v-else> Видали прогрес </template>
			</TinyLink>
			<TinyLink @click="$router.push('/polityka-prywatnosci')">
				<template v-if="!isUA.value"> Polityka Prywatności </template>
				<template v-else> Конфіденціальність </template>
			</TinyLink>
			<TinyLink @click="$router.push('/finansowanie')">
				<template v-if="!isUA.value"> Finansowanie </template>
				<template v-else> Спонсори </template>
			</TinyLink>
			<TinyLink v-if="$route.name === 'Jacobson'" href="https://www.vecteezy.com/free-photos" :newCard="true">Free Stock photos by Vecteezy</TinyLink>
		</template>
	</CFooter>
</template>

<script lang="ts">
import { useProgressStore, PuzzleID } from '@help/store/progress';
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
