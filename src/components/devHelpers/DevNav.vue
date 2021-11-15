<template>
	<n-card style="width: 300px">
		<n-collapse>
			<n-collapse-item title="dev nav">
				<Flex gap="12px">
					<n-button v-for="(route, i) in routes" :key="`route${i}-${route.name}`" @click="$router.push(route.path)">{{ route.name }}</n-button>
				</Flex>
			</n-collapse-item>
		</n-collapse>
	</n-card>
</template>

<script lang="ts">
	import { NCard, NCollapse, NCollapseItem, NButton } from 'naive-ui';
	import { defineComponent, PropType } from 'vue';
	import { RouteRecordRaw } from 'vue-router';

	import { Flex } from '@corioders/vueui';

	export default defineComponent({
		name: 'DevNav',
		components: {
			NCard,
			NCollapse,
			NCollapseItem,
			Flex,
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
