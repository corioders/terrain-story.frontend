<template>
	<VFlex class="container" gap="12px">
		<div v-for="(floor, i) in floorMapDescriptor.floors" :key="`floor${i}-${floor}`" class="floor">
			<VFlex direction="row" justify="center" gap="12px">
				<div v-for="(puzzleID, j) in floor.puzzles" :key="`puzzle${j}-${puzzleID}`" class="puzzle" :class="puzzlesDone[puzzleID] === true ? 'done' : ''" />
			</VFlex>
			<div class="floor --line" />
			<p class="floor --label">{{ floor.name }}</p>
		</div>
	</VFlex>
</template>

<script lang="ts">
	import { defineComponent, PropType } from 'vue';

	import { VFlex } from '@corioders/vueui';

	import { FloorMapDescriptor } from './floorMap';

	export default defineComponent({
		name: 'FloorMap',
		components: {
			VFlex,
		},
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
	});
</script>
<style lang="scss" scoped>
	$offset: 4px;
	.container {
		margin: 50px 0;
		min-width: 300px;
		max-width: 100%;
		.floor {
			width: 100%;
			.puzzle {
				width: 25px;
				height: 25px;
				background-color: $disabled;
				border-radius: 50%;
				margin-bottom: $offset;
				&.done {
					background-color: $primary;
				}
			}
			&.--line {
				width: 100%;
				height: $offset;
				border-radius: 5px;
				background-color: $infoDarker;
			}
			&.--label {
				margin: 0 0 0 $offset;
				font-size: 0.8em;
			}
		}
	}
</style>
