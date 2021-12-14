<template>
	<div></div>
</template>

<script lang="ts">
	import { defineComponent, PropType } from 'vue';

	import { FloorMapDescriptor } from './floorMap';

	export default defineComponent({
		name: 'FloorMap',
		props: {
			floorMapDescriptor: {
				type: Object as PropType<FloorMapDescriptor<string>>,
				required: true,
			},
			puzzlesDone: {
				type: Object as PropType<Record<string, boolean>>,
				required: true,
			},
		},
		setup(props) {
			for (const floor of props.floorMapDescriptor.floors) {
				for (const puzzleID of floor.puzzles) {
					if (props.puzzlesDone[puzzleID] === true) {
						// Do something when puzzle is done
					} else {
						// Do something when puzzle isn't  done
						console.log(puzzleID);
					}
				}
			}
		},
	});
</script>
<style lang="scss" scoped></style>
