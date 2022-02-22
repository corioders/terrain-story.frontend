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
	width: 100% !important;
	max-width: 950px;
	grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
	justify-items: stretch;
	align-items: stretch;
}

.checked {
	background-color: $primaryDarker;
	color: #fff;
}

p {
	padding: 12px;
}
</style>
