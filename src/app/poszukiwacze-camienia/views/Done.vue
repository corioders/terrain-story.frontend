<template>
	<Flex justify="center" gap="12px" style="height: 60vh">
		<n-result status="success" title="Brawo udało Ci się rozwiązać tę zagadkę">
			<template #footer>
				<Flex gap="12px">
					<p>Przenoszenie do mapy</p>
					<n-spin size="large" />
				</Flex>
			</template>
		</n-result>
	</Flex>
</template>

<script lang="ts">
	import { NResult, NSpin } from 'naive-ui';
	import { defineComponent, onMounted } from 'vue';
	import { useRouter } from 'vue-router';

	import { Flex } from '@corioders/vueui';

	export default defineComponent({
		name: 'AlreadyDone',
		components: { NResult, Flex, NSpin },
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
