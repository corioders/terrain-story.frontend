<template>
	<footer>
		<n-divider />
		<VFlex gap="12px">
			<slot name="informations"></slot>
			<slot name="menu"></slot>
		</VFlex>
	</footer>
</template>

<script lang="ts">
	import { NDivider } from 'naive-ui';
	import { defineComponent } from 'vue';

	import { VFlex } from '@corioders/vueui';

	export default defineComponent({
		name: 'Footer',
		components: {
			NDivider,
			VFlex,
		},
	});
</script>
<style lang="scss" scoped>
	footer {
		width: 100%;
		margin-bottom: 32px;
		:deep(.n-button) {
			color: #5a5a5a;
		}
	}
</style>
