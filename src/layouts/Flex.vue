<template>
	<div class="flex"><slot></slot></div>
</template>
<script lang="ts">
	import { defineComponent } from 'vue';

	export default defineComponent({
		name: 'Flex',
		props: {
			flexDirection: {
				type: String,
				default: 'column',
			},
			flexWrap: {
				type: String,
				default: 'nowrap',
			},
			justifyContent: {
				type: String,
				default: 'flex-start',
			},
			alignItems: {
				type: String,
				default: 'center',
			},
			alignContent: {
				type: String,
				default: 'normal',
			},
			gap: {
				type: String,
				default: '0',
			},
		},
	});
</script>
<style lang="scss" scoped>
	.flex {
		display: flex;
		flex-direction: v-bind('flexDirection');
		flex-wrap: v-bind('flexWrap');
		justify-content: v-bind('justifyContent');
		align-items: v-bind('alignItems');
		align-content: v-bind('alignContent');
		gap: v-bind('gap');
	}
</style>
