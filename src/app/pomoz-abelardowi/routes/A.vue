<template>
	<LocationMap
		:indoor="[
			{
				localization: [54.348242859952435, 18.670722605812728],
				name: 'a',
				photo:
					'https://ocdn.eu/pulscms-transforms/1/rGVk9kqTURBXy9hYTViZmJlYTMwMGZhMzIwZTU1YjAwMmI1NmY2NzI4Ni5qcGVnk5UDzP4WzQQCzQJBlQLNAwcAw8OTCaYyZmE5ZGIGgaEwAQ/robert-maklowicz.jpg',
			},

			{
				localization: [50.2520757901687, 19.00993701411417],
				name: 'b',
				photo:
					'https://ocdn.eu/pulscms-transforms/1/rGVk9kqTURBXy9hYTViZmJlYTMwMGZhMzIwZTU1YjAwMmI1NmY2NzI4Ni5qcGVnk5UDzP4WzQQCzQJBlQLNAwcAw8OTCaYyZmE5ZGIGgaEwAQ/robert-maklowicz.jpg',
			},
		]"
		:outdoor="[
			{
				localization: [50.259746803097094, 19.02271542025077],
				name: 'c',
				photo:
					'https://ocdn.eu/pulscms-transforms/1/rGVk9kqTURBXy9hYTViZmJlYTMwMGZhMzIwZTU1YjAwMmI1NmY2NzI4Ni5qcGVnk5UDzP4WzQQCzQJBlQLNAwcAw8OTCaYyZmE5ZGIGgaEwAQ/robert-maklowicz.jpg',
			},
			{
				localization: [50.25868312080847, 19.021272323843615],
				name: 'c',
				photo:
					'https://ocdn.eu/pulscms-transforms/1/rGVk9kqTURBXy9hYTViZmJlYTMwMGZhMzIwZTU1YjAwMmI1NmY2NzI4Ni5qcGVnk5UDzP4WzQQCzQJBlQLNAwcAw8OTCaYyZmE5ZGIGgaEwAQ/robert-maklowicz.jpg',
			},
		]"
	/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import LocationMap from '@/components/map/location/LocationMap.vue';

export default defineComponent({
	name: 'A',
	components: {
		LocationMap,
	},
});
</script>
