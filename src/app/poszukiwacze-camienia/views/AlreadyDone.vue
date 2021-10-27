<template>
	<n-space vertical align="center" justify="center">
		<n-result status="info" title="Już rozwiązałeś tę zagadkę">
			<template #footer>
				<ResetProgressButton />
			</template>
		</n-result>
	</n-space>
</template>

<script lang="ts">
	import { NResult, NSpace } from 'naive-ui';
	import { defineComponent } from 'vue';

	import ResetProgressButton from '@/components/buttons/ResetProgressButton.vue';

	export default defineComponent({
		name: 'AlreadyDone',
		components: { NResult, NSpace, ResetProgressButton },
	});
</script>
<style lang="scss" scoped>
	.n-space {
		height: 60vh;
	}
</style>
