<template>
	<div v-if="mapData === null">Loading...</div>
	<LeafletMap v-else :mapData="mapData" :puzzlesDone="puzzlesDone" />
</template>

<script lang="ts">
	import { defineComponent, ref } from 'vue';

	import LeafletMap from '@/components/map/leaflet/LeafletMap.vue';
	import { MapData } from '@/components/map/leaflet/map';

	import { useProgressStore, PuzzleID } from '@help/store/progress';

	export default defineComponent({
		name: 'MapWrapper',
		components: {
			LeafletMap,
		},
		props: {
			locationID: {
				type: String,
				required: true,
			},
		},
		setup(props) {
			const store = useProgressStore();
			const mapData = ref<MapData<PuzzleID> | null>(null);

			const loadMap = async (): Promise<void> => {
				const mapDataModule = (await import(`@help/assets/map/leaflet/${props.locationID}`)) as { mapData: MapData<PuzzleID> };
				mapData.value = mapDataModule.mapData;
			};
			loadMap();

			return { mapData, puzzlesDone: store.puzzles };
		},
	});
</script>
