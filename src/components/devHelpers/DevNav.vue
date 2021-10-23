<template>
	<n-card style="width: 300px">
		<n-collapse>
			<n-collapse-item title="dev nav">
				<n-space vertical align="center">
					<n-button v-for="(route, i) in routes" :key="`route${i}-${route.name}`" @click="$router.push(route.path)">{{ route.name }}</n-button>
				</n-space>
			</n-collapse-item>
		</n-collapse>
	</n-card>
</template>

<script lang="ts">
	import { NCard, NCollapse, NCollapseItem, NSpace, NButton } from 'naive-ui';
	import { defineComponent, PropType } from 'vue';
	import { RouteRecordRaw } from 'vue-router';

	export default defineComponent({
		name: 'DevNav',
		components: {
			NCard,
			NCollapse,
			NCollapseItem,
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
