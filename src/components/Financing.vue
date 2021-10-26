<template>
	<img
		src="@/assets/financing.png"
		alt="Inicjatywa młodzieżowa realizowana w ramach projektu pn. Centrum Aktywności Młodzieżowej
Projekt dofinansowany ze środków Unii Europejskiej w ramach Regionalnego Programu Operacyjnego Województwa Śląskiego na lata 2014 – 2020, Działanie 9.1. Aktywna integracja"
	/>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	export default defineComponent({
		name: 'Financing',
		setup() {
			console.log('Aaaaaaaaaa');
		},
	});
</script>
<style lang="scss" scoped>
	img,
	div {
		width: 95vw;
		max-height: 95vh;
		object-fit: contain;
	}
</style>
