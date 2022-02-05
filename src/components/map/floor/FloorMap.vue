<template>
	<MapLoader v-if="floorMapDescriptor === null" />
	<VFlex v-else class="container" gap="12px">
		<div v-for="(floor, i) in floorMapDescriptor.floors" :key="`floor${i}-${floor}`" class="floor">
			<VFlex direction="row" justify="center" gap="13px">
				<div v-for="(puzzleID, j) in floor.puzzleIDs" :key="`puzzle${j}-${puzzleID}`" class="puzzle" :class="puzzlesDone[puzzleID] === true ? 'done' : ''" />
			</VFlex>
			<div class="floor --line" />
			<p class="floor --label">{{ floor.name }}</p>
		</div>
	</VFlex>
</template>

<script lang="ts">
	import { defineComponent, PropType, ref } from 'vue';

	import { VFlex } from '@corioders/vueui';

	import { FloorMapDescriptor, getFloorMapDescriptor } from './floorMap';

	import MapLoader from '../MapLoader.vue';

	export default defineComponent({
		name: 'FloorMap',
		components: {
			VFlex,
			MapLoader,
		},
		props: {
			puzzlesDone: {
				type: Object as PropType<Record<string, boolean>>,
				required: true,
			},
			locationID: {
				type: String,
				required: true,
			},
			gameName: {
				type: String,
				required: true,
			},
		},
		// async setup is currently unstable :<, https://v3.vuejs.org/guide/migration/suspense.html
		setup(props) {
			const floorMapDescriptor = ref<FloorMapDescriptor<string> | null>(null);

			const loadMap = async (): Promise<void> => {
				floorMapDescriptor.value = await getFloorMapDescriptor(props.locationID, props.gameName);
			};
			loadMap();

			return { floorMapDescriptor };
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
