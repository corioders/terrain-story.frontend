<template>
	<section v-if="showPopup">
		<p>Czy na pewno chcesz zacząć grać od początku? Usunie to Twój cały postęp w grze.</p>
		<VFlex direction="row" gap="12px" justify="flex-end">
			<ErrorButton @click="handleClick">Tak</ErrorButton>
			<DefaultButton @click="showPopup = false">Anuluj</DefaultButton>
		</VFlex>
	</section>
	<InfoButton class="showPopupButton" @click="showPopup = !showPopup">Zacznij grać od początku</InfoButton>
</template>

<script lang="ts">
	import { defineComponent, ref } from 'vue';

	import { InfoButton, ErrorButton, DefaultButton } from '@/theme/Button';
	import { VFlex } from '@corioders/vueui';
	import { useProgressStore } from '@rock/store/progress';

	export default defineComponent({
		name: 'ResetProgressButton',
		components: {
			InfoButton,
			ErrorButton,
			DefaultButton,
			VFlex,
		},
		setup() {
			const store = useProgressStore();
			const showPopup = ref<boolean>(false);
			function handleClick(): void {
				store.resetProgress();
			}

			return { handleClick, showPopup };
		},
	});
</script>
<style lang="scss" scoped>
	section {
		padding: 12px;
		border: 1px solid #e0e0e6;
		border-radius: 5px;
		background: #fff;
	}
</style>