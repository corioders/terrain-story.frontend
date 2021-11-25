<template>
	<VButton class="PrimaryButton" :class="disabled ? 'disabled' : ''" @click="handleClick($event)">
		<slot></slot>
	</VButton>
</template>

<script lang="ts">
	import { defineComponent, PropType } from 'vue';

	import { VButton } from '@corioders/vueui';

	export default defineComponent({
		name: 'PrimaryButton',
		components: {
			VButton,
		},
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
	@use '../Button' as *;
	.PrimaryButton {
		@include Button($primary);
	}
</style>
