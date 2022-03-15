<template>
	<OutdoorMap :mapData="mapData" :puzzlesDone="puzzlesDone" />
</template>

<script lang="ts">
import { mapData } from '@rock/assets/map';
import { useProgressStore } from '@rock/store/progress';
import { defineComponent } from 'vue';

import OutdoorMap from '@/components/map/outdoor/OutdoorMap.vue';

export default defineComponent({
	name: 'MapWrapper',
	components: {
		OutdoorMap,
	},
	setup() {
		const store = useProgressStore();

		return { mapData, puzzlesDone: store.puzzles };
	},
});
</script>
