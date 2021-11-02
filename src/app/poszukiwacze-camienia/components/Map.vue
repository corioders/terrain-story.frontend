<template>
	<LeafletMap :mapData="map" :icons="icons" />
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	import LeafletMap from '@/components/map/leaflet/LeafletMap.vue';

	import mapData from '@rock/assets/map';
	import { useProgressStore } from '@rock/store/progress';

	export default defineComponent({
		name: 'Map',
		components: {
			LeafletMap,
		},
		setup() {
			return { map: mapData, icons: useProgressStore().icons };
		},
	});
</script>