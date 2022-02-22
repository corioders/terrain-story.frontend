<template>
	<div></div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
	name: 'ProgressBar',
	props: {
		max: {
			type: Number as PropType<number>,
			required: true,
		},
		value: {
			type: Number as PropType<number>,
			required: true,
		},
	},
});
</script>
<style lang="scss" scoped>
div {
	width: 100%;
	height: 5px;
	position: relative;
	box-sizing: border-box;
	background-color: $disabled;
	border-radius: 5px;

	&::after {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		height: 100%;
		width: calc(v-bind('value') * 100% / v-bind('max'));
		background-color: $primaryDarker;
		border-radius: 5px;
	}
}
</style>
