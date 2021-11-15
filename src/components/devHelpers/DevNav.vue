<template>
	<Card style="width: 300px">
		<n-collapse>
			<n-collapse-item title="dev nav">
				<Flex gap="12px">
					<n-button v-for="(route, i) in routes" :key="`route${i}-${route.name}`" @click="$router.push(route.path)">{{ route.name }}</n-button>
				</Flex>
			</n-collapse-item>
		</n-collapse>
	</Card>
</template>

<script lang="ts">
	import { NCollapse, NCollapseItem, NButton } from 'naive-ui';
	import { defineComponent, PropType } from 'vue';
	import { RouteRecordRaw } from 'vue-router';

	import { Card, Flex } from '@corioders/vueui';

	export default defineComponent({
		name: 'DevNav',
		components: {
			Card,
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
