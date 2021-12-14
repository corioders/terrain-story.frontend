<template>
	<FloorMap :floorMapDescriptor="floorMapDescriptor" :puzzlesDone="puzzlesDone" />
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	import FloorMap from '@/components/map/floor/FloorMap.vue';
	import { FloorMapDescriptor } from '@/components/map/floor/floorMap';

	import { PuzzleID, useProgressStore } from '@test/store/progress';

	export default defineComponent({
		name: 'MapWrapper',
		components: {
			FloorMap,
		},
		setup() {
			const store = useProgressStore();
			const descriptor: FloorMapDescriptor<PuzzleID> = {
				floors: [
					{
						name: 'test floor 1',
						puzzles: ['puzzleA', 'puzzleB', 'puzzleC'],
					},
					{
						name: 'test floor 2',
						puzzles: ['puzzleD'],
					},
				],
			};

			return { puzzlesDone: store.puzzles, floorMapDescriptor: descriptor };
		},
	});
</script>
