<template>
	<MapWrapper />
	<p>W tych miejscach znajdują się kody QR. Znajdź i zeskanuj je wszystkie, żeby przejść całą grę.</p>
</template>

<script lang="ts">
import MapWrapper from '@rock/components/OutdoorMapWrapper.vue';
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'Map',
	components: {
		MapWrapper,
	},
});
</script>
<style lang="scss" scoped>
p {
	font-size: 1.2em;
	padding: 0 12px;
}
</style>
