<template>
	<div class="container">
		<p v-for="elem in bingoDescriptor.data" :key="`${elem}_bingo`" @click="handleClick($event)">{{ elem }}</p>
	</div>
</template>

<script lang="ts">
	import { defineComponent, PropType } from 'vue';

	import { BingoDescriptor } from './bingo';

	export default defineComponent({
		props: {
			bingoDescriptor: {
				required: true,
				type: Object as PropType<BingoDescriptor>,
			},
		},
		emits: ['correct'],
		setup(props, { emit }) {
			let checkedCount = 0;
			const checkedClassName = 'checked';

			const handleClick = (e: Event): void => {
				const elem = e.target as HTMLParagraphElement;
				if (!elem.classList.contains(checkedClassName)) {
					elem.classList.add(checkedClassName);
					checkedCount++;

					if (checkedCount === props.bingoDescriptor.data.length) emit('correct');
				}
			};

			return {
				handleClick,
			};
		},
	});
</script>

<style lang="scss" scoped>
	.container {
		display: grid;

		grid-template-columns: repeat(v-bind('bingoDescriptor.dimensions.width'), 1fr);
		grid-template-rows: repeat(v-bind('bingoDescriptor.dimensions.height'), 1fr);
	}

	.checked {
		background-color: red;
	}
</style>
