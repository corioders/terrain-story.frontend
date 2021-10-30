<template>
	<div ref="map" class="map"></div>
</template>

<script lang="ts">
	import * as L from 'leaflet';
	import { defineComponent, onMounted, ref } from 'vue';

	export default defineComponent({
		name: 'LeafletMap',
		setup() {
			const map = ref<HTMLDivElement | null>(null);
			onMounted(() => {
				if (map.value !== null) {
					const myMap = L.map(map.value).setView([50.25667900327114, 19.017880926181164], 13);

					L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
						attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
					}).addTo(myMap);
				}
			});
			return { map };
		},
	});
</script>
<style lang="scss" scoped>
	@import 'leaflet/dist/leaflet.css';

	.map {
		width: 100%;
		height: 70vh;
		max-width: 950px;
		max-height: 700px;
		margin: 0 12px;
	}
</style>
