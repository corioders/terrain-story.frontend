<template>
	<FloorMap v-if="isFloorMap" :puzzlesDone="puzzlesDone" :gameName="gameName" :locationID="locationID" />
	<div v-if="!isFloorMap">
		<h2>Nie znaleziono odpowiedniej mapy</h2>
		<p>Prosimy o zgłoszenie błędu, wybranie kategorii "Kod QR nie działa" i wpisanie lokalizacji</p>
		<PrimaryButton @click="$router.push('/zglos-blad')">Zgłoś błąd</PrimaryButton>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';
	import { useRouter } from 'vue-router';

	import { getLocationID, hasLocationID, isFloorMap } from '@/router';

	import FloorMap from '@/components/map/floor/FloorMap.vue';

	import { PrimaryButton } from '@/theme/Button';
	import { useMainStore } from '@recap/store/main';
	import { useProgressStore } from '@recap/store/progress';

	export default defineComponent({
		name: 'MapWrapper',
		components: {
			FloorMap,
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
			};
		},
	});
</script>
