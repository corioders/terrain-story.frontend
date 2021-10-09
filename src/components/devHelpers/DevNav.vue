<template>
	<Flex>
		<router-link v-for="(route, i) in routes" :key="`route${i}-${route.name}`" :to="route.path">{{ route.name }}</router-link>
	</Flex>
</template>

<script lang="ts">
	import { defineComponent, PropType } from 'vue';
	import { RouteRecordRaw } from 'vue-router';

	import Flex from '@/layouts/Flex.vue';

	export default defineComponent({
		name: 'DevNav',
		components: { Flex },
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
