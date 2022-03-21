<template>
	<div ref="mapRef" class="map">
		<div class="legend">
			<VFlex align="flex-start">
				<VFlex direction="row" gap="4px">
					<img src="../assets/marker-icon-2x.png" alt="Niebieska pinezka" />
					<p>Gra dostępna publicznie</p>
				</VFlex>
				<VFlex direction="row" gap="4px">
					<img src="../assets/marker-icon-2x-indoor.png" alt="Czerwona pinezka" />
					<p>Gra wewnętrzna</p>
				</VFlex>
			</VFlex>
		</div>
	</div>
</template>

<script lang="ts">
import { VFlex } from '@corioders/vueui';
import { map, tileLayer, marker, polyline } from 'leaflet';
import { defineComponent, onMounted, ref, PropType } from 'vue';

import { defaultIcon, indoorIcon } from '../assets/icon';
import { Pin } from '../map';

export default defineComponent({
	name: 'LocationMap',
	components: {
		VFlex,
	},
	props: {
		indoor: {
			type: Array as PropType<Pin[]>,
			required: true,
		},
		outdoor: {
			type: Array as PropType<Pin[]>,
			required: true,
		},
	},
	setup(props) {
		const mapRef = ref<HTMLDivElement | null>(null);

		onMounted(() => {
			if (mapRef.value === null) return;

			const lPolyline = polyline([...props.outdoor.map((pin) => pin.localization), ...props.indoor.map((pin) => pin.localization)]);

			const lMap = map(mapRef.value, {
				// tapTolerance needs to be set to -1 beacause otherwise
				// leaflet library will emit simulated click event and it will close popup...
				// TODO: Stop using leaflets
				tapTolerance: -1,
			}).fitBounds(lPolyline.getBounds(), { padding: [100, 100] }); /* .setView([50.263305648532274, 19.02368651790381], props.mapData.zoom); */

			tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
				attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
			}).addTo(lMap);

			addPins(props.outdoor);
			addPins(props.indoor, false);

			function addPins(pins: Pin[], isOutdoor: boolean = true): void {
				for (const pin of pins) {
					marker(pin.localization, { icon: isOutdoor ? defaultIcon : indoorIcon })
						.bindPopup(
							`<p>${pin.name}</p>${
								pin.photo !== undefined ? `<img src="${pin.photo}" style="width:50vw; max-width: 300px;" />` : ''
							}<br><a href="https://www.google.com/maps/dir//${pin.localization[0]},${pin.localization[1]}" target="_blank" rel="noreferrer">Prowadź</a>`,
						)
						.addTo(lMap);
				}
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
	position: relative;

	.legend {
		position: absolute;
		bottom: 24px;
		right: 0;
		z-index: 999;
		background-color: #fff;
		opacity: 0.8;
		color: #000;
		padding: 12px 45px 12px 12px;

		img {
			width: 12px;
		}
	}
}

img {
	width: 95%;
	max-width: 950px;
}
</style>
