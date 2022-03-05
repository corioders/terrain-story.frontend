<template>
	<button :class="disabled ? 'disabled' : ''" @click="handleClick($event)"><slot></slot></button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
	name: 'PlainButton',
	props: {
		disabled: {
			type: Boolean as PropType<boolean>,
			default: false,
		},
	},
	emits: ['use-disabled-click'],
	methods: {
		handleClick(event: MouseEvent) {
			if (this.disabled) return;
			this.$emit('use-disabled-click', event);
		},
	},
});
</script>
<style lang="scss" scoped>
button {
	margin: 0;
	padding: 0;
	border: none;
	background-color: transparent;
	cursor: pointer;

	&.disabled {
		cursor: not-allowed;
	}
}
</style>
