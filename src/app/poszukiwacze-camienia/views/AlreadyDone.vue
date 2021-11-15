<template>
	<Flex gap="12px" justify="center" style="height: 60vh">
		<n-result status="info" title="Już rozwiązałeś tę zagadkę">
			<template #footer>
				<ResetProgressButton />
			</template>
		</n-result>
	</Flex>
</template>

<script lang="ts">
	import { NResult } from 'naive-ui';
	import { defineComponent } from 'vue';

	import ResetProgressButton from '@/components/buttons/ResetProgressButton.vue';

	import { Flex } from '@corioders/vueui';

	export default defineComponent({
		name: 'AlreadyDone',
		components: { NResult, Flex, ResetProgressButton },
	});
</script>
