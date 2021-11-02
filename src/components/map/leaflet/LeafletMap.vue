<template>
	<div ref="mapRef" class="map"></div>
</template>

<script lang="ts">
	import { map, tileLayer, marker, IconOptions, Icon } from 'leaflet';
	import { defineComponent, onMounted, ref, PropType } from 'vue';

	import { MapData } from './map';

	export default defineComponent({
		name: 'LeafletMap',
		props: {
			mapData: {
				type: Object as PropType<MapData>,
				required: true,
			},
			icons: {
				type: Array as PropType<IconOptions[]>,
				required: true,
			},
		},
		setup(props) {
			const mapRef = ref<HTMLDivElement | null>(null);
			onMounted(() => {
				if (mapRef.value === null) return;
				const lMap = map(mapRef.value).setView(props.mapData.center, props.mapData.zoom);

				tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
					attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
				}).addTo(lMap);
				props.mapData.pins.forEach((pin, index) => {
					marker(pin.localization, { icon: new Icon(props.icons[index]) })
						.bindPopup(
							`<p>${pin.name}</p><a href="https://www.google.com/maps/dir//${pin.localization[0]},${pin.localization[1]}" target="_blank" rel="noreferrer">Prowadź</a>`,
						)
						.addTo(lMap);
				});
			});
			return { mapRef };
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