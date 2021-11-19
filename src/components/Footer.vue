<template>
	<footer>
		<VDivider style="font-size: 0.5rem" />
		<VFlex gap="12px">
			<slot name="informations"></slot>
			<slot name="menu"></slot>
		</VFlex>
	</footer>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	import { VFlex, VDivider } from '@corioders/vueui';

	export default defineComponent({
		name: 'Footer',
		components: {
			VDivider,
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
