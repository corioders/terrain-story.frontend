<template>
	<VCard style="width: 300px">
		<n-collapse>
			<n-collapse-item title="dev nav">
				<VFlex gap="12px">
					<n-button v-for="(route, i) in routes" :key="`route${i}-${route.name}`" @click="$router.push(route.path)">{{ route.name }}</n-button>
				</VFlex>
			</n-collapse-item>
		</n-collapse>
	</VCard>
</template>

<script lang="ts">
	import { NCollapse, NCollapseItem, NButton } from 'naive-ui';
	import { defineComponent, PropType } from 'vue';
	import { RouteRecordRaw } from 'vue-router';

	import { VCard, VFlex } from '@corioders/vueui';

	export default defineComponent({
		name: 'DevNav',
		components: {
			VCard,
			NCollapse,
			NCollapseItem,
			VFlex,
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
