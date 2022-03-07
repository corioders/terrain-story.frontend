<template>
	<a v-if="href === ''"><slot></slot></a>
	<a v-else :href="href" :target="!newCard ? '' : '_blank'" :rel="!newCard ? '' : 'noreferrer'"><slot></slot></a>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
	name: 'Info',
	props: {
		href: {
			type: String as PropType<string>,
			default: '',
		},
		newCard: {
			type: Boolean as PropType<boolean>,
			default: false,
		},
	},
});
</script>
<style lang="scss" scoped>
@use '@scssGlobals/colors';
@use '../Link' as *;

a {
	@include Link(colors.$infoDarker, colors.$info);
}
</style>
