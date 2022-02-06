<template>
	<FloorMap v-if="isFloorMap" :puzzlesDone="puzzlesDone" :gameName="gameName" :locationID="locationID" />
	<LeafletMapWrapper v-if="isLeafletMap" :locationID="locationID" />
	<div v-if="!isFloorMap && !isLeafletMap">ERROR</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';
	import { useRouter } from 'vue-router';

	import { getLocationID, hasLocationID, isFloorMap, isLeafletMap } from '@/router';

	import FloorMap from '@/components/map/floor/FloorMap.vue';

	import LeafletMapWrapper from '@help/components/map/LeafletMapWrapper.vue';
	import { useMainStore } from '@help/store/main';
	import { useProgressStore } from '@help/store/progress';

	export default defineComponent({
		name: 'MapWrapper',
		components: {
			FloorMap,
			LeafletMapWrapper,
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
