<template>
	<div ref="mapRef" class="map"></div>
</template>

<script lang="ts">
	import { map, tileLayer, marker } from 'leaflet';
	import { defineComponent, onMounted, ref, PropType } from 'vue';

	import { defaultIcon, visitedIcon } from './icon';
	import { MapData } from './map';

	export default defineComponent({
		name: 'LeafletMap',
		props: {
			mapData: {
				type: Object as PropType<MapData<string>>,
				required: true,
			},
			puzzlesDone: {
				type: Object as PropType<Record<string, boolean>>,
				required: true,
			},
		},
		setup(props) {
			const mapRef = ref<HTMLDivElement | null>(null);

			onMounted(() => {
				if (mapRef.value === null) return;

				const lMap = map(mapRef.value, {
					// tapTolerance needs to be set to -1 beacause otherwise
					// leaflet library will emit simulated click event and it will close popup...
					// TODO: Stop using leaflets
					tapTolerance: -1,
				}).setView(props.mapData.center, props.mapData.zoom);

				tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
					attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
				}).addTo(lMap);
				for (const pin of props.mapData.pins) {
					let icon = defaultIcon;
					if (props.puzzlesDone[pin.puzzleID] === true) {
						icon = visitedIcon;
					}

					marker(pin.localization, { icon })
						.bindPopup(
							`<p>${pin.name}</p><img src="${pin.photo}" style="width:50vw; max-width: 300px;" /><br><a href="https://www.google.com/maps/dir//${pin.localization[0]},${pin.localization[1]}" target="_blank" rel="noreferrer">Prowadź</a>`,
						)
						.addTo(lMap);
				}
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
	img {
		width: 95%;
		max-width: 950px;
	}
</style>