<template>
	<n-space vertical align="center">
		<n-button v-for="(route, i) in routes" :key="`route${i}-${route.name}`" @click="$router.push(route.path)">{{ route.name }}</n-button>
	</n-space>
</template>

<script lang="ts">
	import { NSpace, NButton } from 'naive-ui';
	import { defineComponent, PropType } from 'vue';
	import { RouteRecordRaw } from 'vue-router';

	export default defineComponent({
		name: 'DevNav',
		components: {
			NSpace,
			NButton,
		},
		props: {
			routes: {
				type: Array as PropType<RouteRecordRaw[]>,
				required: true,
			},
		},
		setup() {
			return {};
		},
	});
</script>
<style lang="scss" scoped>
</style>
