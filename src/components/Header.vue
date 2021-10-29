<template>
	<header>
		<img src="@/assets/logo.png" alt="Logo Terrain Story" />
	</header>
	<n-divider />
</template>

<script lang="ts">
	import { NDivider } from 'naive-ui';
	import { defineComponent } from 'vue';

	export default defineComponent({
		name: 'Header',
		setup() {
			return {
				NDivider,
			};
		},
	});
</script>
<style lang="scss" scoped>
	header {
		display: flex;
		align-items: center;
		width: 100%;
		justify-content: center;
		img {
			margin-top: 18px;
			height: 70px !important;
		}
	}
</style>
