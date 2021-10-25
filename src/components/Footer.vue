<template>
	<footer>
		<n-divider />
		<NSpace vertical align="center">
			<slot name="informations"></slot>
			<slot name="menu"></slot>
		</NSpace>
	</footer>
</template>

<script lang="ts">
	import { NDivider, NSpace } from 'naive-ui';
	import { defineComponent } from 'vue';

	export default defineComponent({
		name: 'Footer',
		components: {
			NDivider,
			NSpace,
		},
	});
</script>
<style lang="scss" scoped>
	footer {
		width: 100%;
		margin-bottom: 32px;
	}
	.n-space {
		width: 100%;
		:deep(.n-button) {
			color: #5a5a5a;
		}
	}
</style>
