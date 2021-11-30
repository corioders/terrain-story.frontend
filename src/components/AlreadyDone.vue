<template>
	<VFlex gap="12px" justify="center" style="height: 60vh">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
			<path d="M0 0h24v24H0z" fill="none" />
			<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
		</svg>
		<h2>Już rozwiązałeś tę zagadkę</h2>
		<ResetProgressButton :progressStore="progressStore" />
	</VFlex>
</template>

<script lang="ts">
	import { defineComponent, PropType } from 'vue';

	import ProgressStore from '@/store/ProgressStore';

	import ResetProgressButton from '@/components/buttons/ResetProgressButton.vue';

	import { VFlex } from '@corioders/vueui';

	export default defineComponent({
		name: 'AlreadyDone',
		components: {
			VFlex,
			ResetProgressButton,
		},
		props: {
			progressStore: {
				type: Object as PropType<ProgressStore>,
				required: true,
			},
		},
	});
</script>
<style lang="scss" scoped>
	h2 {
		font-weight: 500;
		text-align: center;
		max-width: 90%;
		font-size: 1.5rem;
	}
	svg {
		fill: $info;
		width: 80%;
		max-width: 200px;
	}
</style>