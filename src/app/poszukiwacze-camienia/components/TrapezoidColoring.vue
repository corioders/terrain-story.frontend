<template>
	<div class="container">
		<n-scrollbar x-scrollable>
			<div class="columnLabelContainer">
				<div class="filler"></div>
				<div v-for="column in COLUMNS" :key="`columnLabel${column}`" class="columnLabel">
					<p>a</p>
				</div>
			</div>
			<div class="trapezoidColoring">
				<div class="rowLabelContainer">
					<div v-for="row in ROWS" :key="`rowLabel${row}`" class="rowLabel">
						<p>{{ row }}</p>
					</div>
				</div>
				<div v-for="column in COLUMNS" :key="`column${column}`" class="column">
					<div v-for="row in ROWS" :key="`row${row}`" class="box" @click="handleClick($event.target.classList)" @tap="handleClick($event.target.classList)"></div>
				</div>
			</div>
		</n-scrollbar>
	</div>
</template>

<script lang="ts">
	import { NScrollbar } from 'naive-ui';
	import { defineComponent } from 'vue';

	export default defineComponent({
		name: 'TrapezoidColoring',
		components: {
			NScrollbar,
		},
		setup() {
			const COLUMNS = 70;
			const ROWS = 15;

			function handleClick(classList: DOMTokenList): void {
				classList.toggle('checked');
			}

			return { handleClick, COLUMNS, ROWS };
		},
	});
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
	}
	.columnLabelContainer,
	.rowLabelContainer {
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
