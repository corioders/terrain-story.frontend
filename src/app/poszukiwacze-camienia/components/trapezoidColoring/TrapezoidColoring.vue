<template>
	<div class="container">
		<VScrollbar class="scrollbar">
			<table>
				<thead>
					<tr>
						<th>
							<div></div>
						</th>
						<th v-for="column in COLUMNS" :key="`columnLabel${column}`">
							<div>
								{{ alphabet[column - 1] }}
							</div>
						</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="row in ROWS" :key="`row${row}`">
						<th>
							<div>
								{{ row }}
							</div>
						</th>
						<td
							v-for="column in COLUMNS"
							:key="`box${row}${column}`"
							class="box"
							@click="handleClick($event.target.classList, column, row)"
							@tap="handleClick($event.target.classList, column, row)"
						>
							<div></div>
						</td>
					</tr>
				</tbody>
			</table>
		</VScrollbar>
	</div>
</template>

<script lang="ts">
	import { defineComponent, PropType } from 'vue';

	import { VScrollbar } from '@corioders/vueui';
	import { alphabetUpper } from '@rock/assets/alphabet';

	import { TrapezoidDescriptor } from './trapezoid';

	export default defineComponent({
		name: 'TrapezoidColoring',
		components: {
			VScrollbar,
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
	table {
		margin: 0;
		table-layout: fixed;
		border-collapse: separate;
		border-spacing: 0;
		border: 1px solid black;
		text-align: center;
		background-color: #fff;

		tbody {
			th {
				position: sticky;
				left: 0;
				z-index: 1;
				background-color: #fff;
				border: 1px solid black;
			}
		}
	}

	td,
	th {
		border: 1px solid black;
		padding: 0;
		div {
			margin: 0;
			line-height: 50px;
			width: 50px;
			height: 50px;
		}
	}
	.checked {
		background-color: $primary;
	}

	thead {
		th {
			position: sticky;
			top: 0;
			z-index: 1;
			&:first-child {
				position: static;
			}
		}
	}

	.container {
		max-width: 95%;
		@media (min-width: 1000px) {
			max-width: 950px;
		}
	}
	.scrollbar {
		overflow: auto;
	}
</style>
