<template>
	<VButton class="ErrorButton" :class="disabled ? 'disabled' : ''" @click="handleClick($event)">
		<slot></slot>
	</VButton>
</template>

<script lang="ts">
import { VButton } from '@corioders/vueui';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
	name: 'ErrorButton',
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
@use '@scssGlobals/colors';
@use '../Button' as *;

.ErrorButton {
	@include Button(colors.$error);
}
</style>
