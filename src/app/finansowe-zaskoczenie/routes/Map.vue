<template>
	<IndoorMap v-if="isIndoorMap" :puzzlesDone="puzzlesDone" :gameName="gameName" :locationID="locationID" />
	<div v-else>
		<h2>Nie znaleziono odpowiedniej mapy</h2>
		<p>Prosimy o zgłoszenie błędu, wybranie kategorii "Kod QR nie działa" i wpisanie lokalizacji</p>
		<PrimaryButton @click="$router.push('/zglos-blad')">Zgłoś błąd</PrimaryButton>
	</div>
</template>

<script lang="ts">
import { useMainStore } from '@fin/store/main';
import { useProgressStore } from '@fin/store/progress';
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
