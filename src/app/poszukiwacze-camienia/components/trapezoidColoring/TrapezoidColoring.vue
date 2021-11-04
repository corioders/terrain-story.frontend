<template>
	<div class="container">
		<n-scrollbar x-scrollable>
			<div class="columnLabelContainer">
				<div class="filler"></div>
				<div v-for="column in COLUMNS" :key="`columnLabel${column}`" class="columnLabel">
					<p>{{ alphabet[column - 1] }}</p>
				</div>
			</div>
			<div class="trapezoidColoring">
				<div class="rowLabelContainer">
					<div v-for="row in ROWS" :key="`rowLabel${row}`" class="rowLabel">
						<p>{{ row }}</p>
					</div>
				</div>
				<div v-for="column in COLUMNS" :key="`column${column}`" class="column">
					<div
						v-for="row in ROWS"
						:key="`row${row}`"
						class="box"
						@click="handleClick($event.target.classList, column, row)"
						@tap="handleClick($event.target.classList, column, row)"
					></div>
				</div>
			</div>
		</n-scrollbar>
	</div>
</template>

<script lang="ts">
	import { NScrollbar } from 'naive-ui';
	import { defineComponent, PropType } from 'vue';

	import { alphabetUpper } from '@rock/assets/alphabet';

	import { TrapezoidDescriptor } from './trapezoid';

	export default defineComponent({
		name: 'TrapezoidColoring',
		components: {
			NScrollbar,
		},
		props: {
			trapezoidDescriptor: {
				type: Object as PropType<TrapezoidDescriptor>,
				required: true,
			},
		},
		emits: ['correct', 'incorrect'],
		setup(props, { emit }) {
			const correctColorsMap = new Map<string, boolean>();
			for (const color of props.trapezoidDescriptor.correctColors) {
				const key = getKey(color.x, color.y);
				correctColorsMap.set(key, true);
			}
			const colorsMap = new Map<string, boolean>();

			function handleClick(classList: DOMTokenList, column: number, row: number): void {
				classList.toggle('checked');
				const x = column - 1;
				const y = row - 1;

				const key = getKey(x, y);
				if (!colorsMap.has(key)) {
					colorsMap.set(key, true);
				} else {
					const value = colorsMap.get(key);
					colorsMap.set(key, !value);
				}

				// Check correct answer.
				for (const [key, value] of colorsMap) {
					if (value === true && !correctColorsMap.has(key)) {
						emit('incorrect');
						return;
					}
				}
				for (const key of correctColorsMap.keys()) {
					if (!colorsMap.has(key)) {
						emit('incorrect');
						return;
					}
					if (colorsMap.get(key) === false) {
						emit('incorrect');
						return;
					}
				}

				emit('correct');
			}

			return { alphabet: alphabetUpper, handleClick, COLUMNS: props.trapezoidDescriptor.dimensions.width, ROWS: props.trapezoidDescriptor.dimensions.height };
		},
	});

	function getKey(x: number, y: number): string {
		return `${x}.${y}`;
	}
</script>
<style lang="scss" scoped>
	.trapezoidColoring {
		box-sizing: border-box;
		display: flex;
		flex-direction: row;
		border: 1px #000 solid;
	}
	.rowLabelContainer {
		display: flex;
		flex-direction: column;
		border-right: 1px #000 solid;
	}
	.columnLabelContainer {
		display: flex;
		flex-direction: row;
		border: 1px #000 solid;
		border-bottom: none;
		z-index: 999;
	}
	.columnLabelContainer,
	.rowLabelContainer {
		position: sticky;
		top: 0;
		left: 0;
		background-color: #fff;
		p {
			text-align: center;
		}
	}
	.box,
	.rowLabel,
	.columnLabel {
		width: 50px;
		height: 50px;
		border: 1px #000 solid;
	}
	.filler {
		width: 50px;
		width: 51px;
		border: 1px #000 solid;
		border-right: 2px #000 solid;
	}
	.checked {
		background-color: $primary;
	}
	.column {
		display: flex;
		flex-direction: column;
	}
	.container {
		max-width: 95%;
		height: 300px;
		@media (min-width: 1000px) {
			max-width: 950px;
		}
	}
</style>
