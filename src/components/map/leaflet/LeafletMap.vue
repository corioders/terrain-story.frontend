<template>
	<div ref="mapRef" class="map"></div>
	<n-button v-if="isPopupOpen" size="large" type="primary" @click="displayPhoto = !displayPhoto">{{ !displayPhoto ? 'Pokaż podpowiedź' : 'Ukryj podpowiedź' }}</n-button>
	<img v-if="displayPhoto" :src="photo" />
</template>

<script lang="ts">
	import { map, tileLayer, marker, PopupEvent } from 'leaflet';
	import { NButton } from 'naive-ui';
	import { defineComponent, onMounted, ref, PropType } from 'vue';

	import { defaultIcon, visitedIcon } from './icon';
	import { MapData } from './map';

	export default defineComponent({
		name: 'LeafletMap',
		components: { NButton },
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
			const photo = ref('');
			const displayPhoto = ref(false);
			const isPopupOpen = ref(false);

			function handlePopupOpen(e: PopupEvent): void {
				const content = e.popup.getContent() as string;
				const index = props.mapData.pins.findIndex((pin) => content.includes(pin.name));
				photo.value = props.mapData.pins[index].photo;
				isPopupOpen.value = true;
			}

			onMounted(() => {
				if (mapRef.value === null) return;

				const lMap = map(mapRef.value).setView(props.mapData.center, props.mapData.zoom);

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
							`<p>${pin.name}</p><a href="https://www.google.com/maps/dir//${pin.localization[0]},${pin.localization[1]}" target="_blank" rel="noreferrer">Prowadź</a>`,
						)
						.on('popupopen', (e: PopupEvent) => {
							handlePopupOpen(e);
						})
						.on('popupclose', () => {
							isPopupOpen.value = false;
							displayPhoto.value = false;
						})
						.addTo(lMap);
				}
			});
			return { mapRef, isPopupOpen, photo, displayPhoto };
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