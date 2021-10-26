<template>
	<n-space vertical align="center" justify="center">
		<n-result status="info" title="Już rozwiązałeś tę zagadkę">
			<template #footer>
				<n-button size="large" type="info" @click="handleClick">Usuń mój postęp</n-button>
			</template>
		</n-result>
	</n-space>
</template>

<script lang="ts">
	import { NButton, NResult, NSpace } from 'naive-ui';
	import { defineComponent } from 'vue';

	export default defineComponent({
		name: 'AlreadyDone',
		components: { NButton, NResult, NSpace },
		setup() {
			function handleClick(): void {
				console.log('Reset progress');
			}
			return { handleClick };
		},
	});
</script>
<style lang="scss" scoped>
	.n-space {
		height: 60vh;
	}
</style>
