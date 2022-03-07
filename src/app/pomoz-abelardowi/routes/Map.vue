<template>
	<FloorMap v-if="isFloorMap" :puzzlesDone="puzzlesDone" :gameName="gameName" :locationID="locationID" />
	<LeafletMapWrapper v-if="isLeafletMap" :locationID="locationID" />
	<div v-if="!isFloorMap && !isLeafletMap">
		<h2>Nie znaleziono odpowiedniej mapy</h2>
		<p>Prosimy o zgłoszenie błędu, wybranie kategorii "Kod QR nie działa" i wpisanie lokalizacji</p>
		<PrimaryButton @click="$router.push('/zglos-blad')">Zgłoś błąd</PrimaryButton>
	</div>
</template>

<script lang="ts">
import LeafletMapWrapper from '@help/components/map/LeafletMapWrapper.vue';
import { useMainStore } from '@help/store/main';
import { useProgressStore } from '@help/store/progress';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

import FloorMap from '@/components/map/floor/FloorMap.vue';
import { getLocationID, hasLocationID, isFloorMap, isLeafletMap } from '@/router';
import { PrimaryButton } from '@/theme/Button';

export default defineComponent({
	name: 'MapWrapper',
	components: {
		FloorMap,
		LeafletMapWrapper,
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
			isFloorMap: isFloorMap(router),
			isLeafletMap: isLeafletMap(router),
		};
	},
});
</script>
