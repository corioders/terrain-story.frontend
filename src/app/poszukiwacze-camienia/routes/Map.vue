<template><GMap /></template>

<script lang="ts">
	import { defineComponent } from 'vue';

	import GMap from '@/components/map/GMap.vue';

	export default defineComponent({
		name: 'Map',
		components: {
			GMap,
		},
	});
</script>
<style lang="scss" scoped>
</style>
