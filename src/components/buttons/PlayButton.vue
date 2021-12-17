<template>
	<PrimaryButton :disabled="disabled" @click="handleClick" @use-disabled-click="$emit('click')"><slot>Zagraj</slot></PrimaryButton>
	<VCard v-if="disabled" :style="`opacity:${showCard ? '1' : '0'}`" class="card"><slot name="card">Musisz najpierw zobaczyć film</slot></VCard>
</template>

<script lang="ts">
	import { defineComponent, ref } from 'vue';

	import { PrimaryButton } from '@/theme/Button';
	import { VCard } from '@corioders/vueui';

	export default defineComponent({
		name: 'PlayButton',
		components: {
			PrimaryButton,
			VCard,
		},
		props: {
			disabled: {
				type: Boolean,
				default: false,
				required: false,
			},
		},
		emits: ['click'],
		setup(props) {
			const showCard = ref(false);
			function handleClick(): void {
				if (props.disabled === false) return;
				showCard.value = true;
				setTimeout(() => {
					showCard.value = false;
				}, 1000);
			}
			return { showCard, handleClick };
		},
	});
</script>
<style lang="scss" scoped>
	.card {
		transition: opacity 0.2s ease-in-out;
	}
</style>
