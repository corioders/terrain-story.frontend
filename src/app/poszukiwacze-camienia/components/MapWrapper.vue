<template>
	<LeafletMap :mapData="mapData" :puzzlesDone="puzzlesDone" />
</template>

<script lang="ts">
import { mapData } from '@rock/assets/map';
import { useProgressStore } from '@rock/store/progress';
import { defineComponent } from 'vue';

import LeafletMap from '@/components/map/leaflet/LeafletMap.vue';

export default defineComponent({
	name: 'MapWrapper',
	components: {
		LeafletMap,
	},
	setup() {
		const store = useProgressStore();

		return { mapData, puzzlesDone: store.puzzles };
	},
});
</script>
