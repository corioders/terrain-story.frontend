<template>
	<InfoButton class="showPopupButton" @click="showPopup = !showPopup">
		<slot name="showPopupButton">Zacznij grać od początku</slot>
	</InfoButton>
	<section :class="{ showPopup }">
		<slot>
			<p>Czy na pewno chcesz zacząć grać od początku? Usunie to Twój cały postęp w grze.</p>
		</slot>
		<VFlex direction="row" gap="12px" justify="flex-end">
			<ErrorButton @click="handleClick">
				<slot name="confirmResetButton">Tak</slot>
			</ErrorButton>
			<DefaultButton @click="showPopup = false">
				<slot name="cancelResetButton">Anuluj</slot>
			</DefaultButton>
		</VFlex>
	</section>
</template>

<script lang="ts">
	import { defineComponent, ref, PropType } from 'vue';

	import { ProgressStore } from '@/store/ProgressStore';

	import { InfoButton, ErrorButton, DefaultButton } from '@/theme/Button';
	import { VFlex } from '@corioders/vueui';

	export default defineComponent({
		name: 'ResetProgressButton',
		components: {
			InfoButton,
			ErrorButton,
			DefaultButton,
			VFlex,
		},
		props: {
			progressStore: {
				type: Object as PropType<ProgressStore>,
				required: true,
			},
		},
		setup(props) {
			const showPopup = ref<boolean>(false);
			function handleClick(): void {
				props.progressStore.resetProgress();
			}

			return { handleClick, showPopup };
		},
	});
</script>
<style lang="scss" scoped>
	.showPopup {
		transform: scaleY(1) translateY(0);
		opacity: 1;
	}
	section {
		padding: 12px;
		border: 1px solid #e0e0e6;
		border-radius: 5px;
		background: #fff;
		transform: scaleY(0) translateY(-100%);
		opacity: 0;
		transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
	}
</style>