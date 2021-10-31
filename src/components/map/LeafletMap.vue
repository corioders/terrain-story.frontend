<template>
	<div ref="map" class="map"></div>
</template>

<script lang="ts">
	import * as L from 'leaflet';
	import { defineComponent, onMounted, ref, PropType } from 'vue';

	import { useDefaultIcon, useVisitedIcon } from '@/components/map/icon';

	import { MapData } from './map';

	const defaultMarkerIcon = new L.Icon(useDefaultIcon(L.Icon.Default.prototype.options as L.IconOptions));
	const visitedMarkerIcon = new L.Icon(useVisitedIcon(L.Icon.Default.prototype.options as L.IconOptions));

	export default defineComponent({
		name: 'LeafletMap',
		props: {
			mapData: {
				type: Object as PropType<MapData>,
				required: true,
			},
		},
		setup(props) {
			const map = ref<HTMLDivElement | null>(null);
			onMounted(() => {
				if (map.value !== null) {
					const lMap = L.map(map.value).setView(props.mapData.center, props.mapData.zoom);

					L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
						attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
					}).addTo(lMap);
					props.mapData.pins.forEach((pin) => {
						L.marker(pin.localization, { icon: !pin.visited ? defaultMarkerIcon : visitedMarkerIcon })
							.bindPopup(
								`<p>${pin.name}</p><a href="https://www.google.com/maps/dir//${pin.localization[0]},${pin.localization[1]}" target="_blank" rel="noreferrer">Prowadź</a>`,
							)
							.addTo(lMap);
					});
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