<template>
	<IndoorMap v-if="isIndoorMap" :puzzlesDone="puzzlesDone" :gameName="gameName" :locationID="locationID" />
	<div v-if="!isIndoorMap">
		<h2>Ooopppss! Przykro nam nie znaleźliśmy odpowiedniej mapy.</h2>
		<p>Prosimy zgłoś błąd a pomoże nam to dopracować grę. Wybierz proszę kategorię "Kod QR nie działa", a lokalizację wpisz samodzielnie.</p>
		<PrimaryButton @click="$router.push('/zglos-blad')">Zgłoś błąd</PrimaryButton>
	</div>
</template>

<script lang="ts">
import { useMainStore } from '@recap/store/main';
import { useProgressStore } from '@recap/store/progress';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

import IndoorMap from '@/components/map/indoor/IndoorMap.vue';
import { getLocationID, hasLocationID, isIndoorMap } from '@/router';
import { PrimaryButton } from '@/theme/Button';

export default defineComponent({
	name: 'MapWrapper',
	components: {
		IndoorMap,
		PrimaryButton,
	},
	setup() {
		const progressStore = useProgressStore();
		const mainStore = useMainStore();
		const router = useRouter();

		let locationID = null;
		if (hasLocationID(router)) locationID = getLocationID(router);

		return {
			puzzlesDone: progressStore.puzzles,
			gameName: mainStore.gameName,

			locationID,
			isIndoorMap: isIndoorMap(router),
		};
	},
});
</script>
<style lang="scss" scoped>
.error {
	width: 95%;
	max-width: 950px;
}
</style>
