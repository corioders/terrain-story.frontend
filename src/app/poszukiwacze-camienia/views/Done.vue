<template>
	<n-space vertical align="center" justify="center" class="done">
		<n-result status="success" title="Brawo udało Ci się rozwiązać tę zagadkę">
			<template #footer>
				<n-space vertical align="center">
					<p>Przenoszenie do mapy</p>
					<n-spin size="large" />
				</n-space>
			</template>
		</n-result>
	</n-space>
</template>

<script lang="ts">
	import { NResult, NSpace, NSpin } from 'naive-ui';
	import { defineComponent, onMounted } from 'vue';
	import { useRouter } from 'vue-router';

	export default defineComponent({
		name: 'AlreadyDone',
		components: { NResult, NSpace, NSpin },
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
	.done {
		height: 60vh;
	}
</style>
