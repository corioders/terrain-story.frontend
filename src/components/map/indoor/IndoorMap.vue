<template>
	<MapLoader v-if="indoorMapDescriptor === null" />
	<VFlex v-else class="container" gap="48px">
		<div v-for="(floor, i) in indoorMapDescriptor.floors" :key="`floor${i}-${floor}`" class="floor">
			<VFlex direction="row" justify="center" gap="13px">
				<div v-if="floor.puzzleIDs[0] !== undefined">
					<VFlex direction="row" justify="center" gap="13px">
						<div v-for="(puzzleID, j) in floor.puzzleIDs" :key="`puzzle${j}-${puzzleID}`" class="puzzle" :class="puzzlesDone[puzzleID] === true ? 'done' : ''"></div>
					</VFlex>
				</div>
				<div v-else class="puzzle invisible"></div>
			</VFlex>
			<div class="floor --line" />
			<p class="floor --label">{{ floor.name }}</p>
		</div>
	</VFlex>
</template>

<script lang="ts">
import { VFlex } from '@corioders/vueui';
import { defineComponent, PropType, ref } from 'vue';

import { IndoorMapDescriptor, getIndoorMapDescriptor } from './indoorMap';

import MapLoader from '../MapLoader.vue';

export default defineComponent({
	name: 'IndoorMap',
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
		const indoorMapDescriptor = ref<IndoorMapDescriptor<string> | null>(null);

		const loadMap = async (): Promise<void> => {
			indoorMapDescriptor.value = await getIndoorMapDescriptor(props.locationID, props.gameName);
		};
		loadMap();

		return { indoorMapDescriptor };
	},
});
</script>
<style lang="scss" scoped>
@use '@scssGlobals/colors';

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
			background-color: colors.$disabled;
			border-radius: 50%;
			margin-bottom: $offset;

			&.done {
				background-color: colors.$primary;
			}

			&.invisible {
				background-color: transparent;
			}
		}

		&.--line {
			width: 100%;
			height: $offset;
			border-radius: 5px;
			background-color: colors.$infoDarker;
		}

		&.--label {
			margin: 0 0 0 $offset;
			font-size: 0.8em;
		}
	}
}
</style>
