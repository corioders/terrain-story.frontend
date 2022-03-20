<template>
	<MapLoader v-if="loading" />
	<LocationMap v-else :indoor="indoor" :outdoor="outdoor" />
</template>

<script lang="ts">
import { collection, getDocs, getFirestore } from '@firebase/firestore';
import { mapData as mapDataKat } from '@help/assets/map/outdoor/kat';
import { defineComponent, Ref, ref } from 'vue';

import MapLoader from '@/components/map/MapLoader.vue';
import LocationMap from '@/components/map/location/LocationMap.vue';
import '@/firebaseInit';

import { Pin } from './map/map';

function transformPins(pins: Pin[], gameName: string): Pin[] {
	const transformedPins = [];
	for (const pin of pins) {
		transformedPins.push({
			...pin,
			name: `${gameName}: ${pin.name}`,
		});
	}
	return transformedPins;
}

async function fetchIndoorPins(): Promise<Pin[]> {
	const db = getFirestore();
	const mapCms = collection(db, 'map-cms');
	const querySnapshot = await getDocs(mapCms);

	const pins: Pin[] = [];
	for (const doc of querySnapshot.docs) {
		// Keep type in sync with cms.
		const d = doc.data() as { friendlyName: string; latitude: string; longitude: string };
		pins.push({
			name: d.friendlyName,
			localization: [Number(d.latitude), Number(d.longitude)],

			// TODO: make it optional.
			photo: '',
		});
	}

	return pins;
}

export default defineComponent({
	name: 'LocationMapAllWrapper',
	components: {
		LocationMap,
		MapLoader,
	},
	setup() {
		const loading = ref(true);

		const indoor: Ref<Pin[] | null> = ref(null);
		const outdoor: Ref<Pin[]> = ref([]);
		outdoor.value.push(...transformPins(mapDataKat.pins, 'Gra Pomóż Abelardowi'));

		async function load(): Promise<void> {
			indoor.value = await fetchIndoorPins();
			loading.value = false;
		}
		load();

		return {
			loading,
			indoor,
			outdoor,
		};
	},
});
</script>
