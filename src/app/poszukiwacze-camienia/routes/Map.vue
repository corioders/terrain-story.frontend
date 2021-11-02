<template>
	<Map />
	<p>W tych miejscach znajdują się kody QR. Znajdź i zeskanuj je wszystkie, żeby przejść całą grę</p>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	import Map from '@rock/components/Map.vue';

	export default defineComponent({
		name: 'Map',
		components: {
			Map,
		},
	});
</script>
<style lang="scss" scoped>
	p {
		font-size: 1.2em;
		padding: 0 12px;
	}
</style>