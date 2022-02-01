<template>
	<FloorMap :puzzlesDone="puzzlesDone" :gameName="gameName" :locationID="locationID" />
</template>

<script lang="ts">
	import { defineComponent } from 'vue';
	import { useRouter } from 'vue-router';

	import { getLocationID } from '@/router';

	import FloorMap from '@/components/map/floor/FloorMap.vue';

	import { useMainStore } from '@test/store/main';
	import { useProgressStore } from '@test/store/progress';

	export default defineComponent({
		name: 'MapWrapper',
		components: {
			FloorMap,
		},
		setup() {
			const progressStore = useProgressStore();
			const mainStore = useMainStore();
			const router = useRouter();

			return {
				puzzlesDone: progressStore.puzzles,
				gameName: mainStore.gameName,
				locationID: getLocationID(router),
			};
		},
	});
</script>
