<template>
	<VFlex justify="center" gap="12px" style="height: 60vh">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
			<path d="M0 0h24v24H0z" fill="none" />
			<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
		</svg>
		<h2>Brawo, udało Ci się rozwiązać tę zagadkę</h2>
		<h3>Przenoszenie do mapy</h3>
		<VSpinner />
	</VFlex>
</template>

<script lang="ts">
	import { defineComponent, onMounted } from 'vue';
	import { useRouter } from 'vue-router';

	import { VFlex, VSpinner } from '@corioders/vueui';

	export default defineComponent({
		name: 'AlreadyDone',
		components: {
			VFlex,
			VSpinner,
		},
		setup() {
			const router = useRouter();

			onMounted(() => {
				setTimeout(() => {
					if (router.currentRoute.value.name === 'Done') router.replace('/mapa');
				}, 5000);
			});
		},
	});
</script>
<style lang="scss" scoped>
	h2,
	h3 {
		font-weight: 500;
		text-align: center;
		max-width: 90%;
	}
	h2 {
		font-size: 1.5rem;
	}
	svg {
		fill: $primary;
		width: 80%;
		max-width: 200px;
	}
</style>