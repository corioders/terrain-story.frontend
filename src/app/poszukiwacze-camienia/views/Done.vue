<template>
	<VFlex justify="center" gap="12px" style="height: 60vh">
		<n-result status="success" title="Brawo udało Ci się rozwiązać tę zagadkę">
			<template #footer>
				<VFlex gap="12px">
					<p>Przenoszenie do mapy</p>
					<VSpinner />
				</VFlex>
			</template>
		</n-result>
	</VFlex>
</template>

<script lang="ts">
	import { NResult } from 'naive-ui';
	import { defineComponent, onMounted } from 'vue';
	import { useRouter } from 'vue-router';

	import { VFlex, VSpinner } from '@corioders/vueui';

	export default defineComponent({
		name: 'AlreadyDone',
		components: {
			NResult,
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
