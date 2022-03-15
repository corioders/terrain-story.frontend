<template>
	<MapLoader v-if="mapData === null" />
	<OutdoorMap v-else :mapData="mapData" :puzzlesDone="puzzlesDone" />
</template>

<script lang="ts">
import { useProgressStore, PuzzleID } from '@help/store/progress';
import { defineComponent, ref } from 'vue';

import MapLoader from '@/components/map/MapLoader.vue';
import OutdoorMap from '@/components/map/outdoor/OutdoorMap.vue';
import { MapData } from '@/components/map/outdoor/map';

export default defineComponent({
	name: 'MapWrapper',
	components: {
		OutdoorMap,
		MapLoader,
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
			const mapDataModule = (await import(`@help/assets/map/outdoor/${props.locationID}`)) as { mapData: MapData<PuzzleID> };
			mapData.value = mapDataModule.mapData;
		};
		loadMap();

		return { mapData, puzzlesDone: store.puzzles };
	},
});
</script>
