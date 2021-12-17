<template>
	<PrimaryButton :disabled="disabled" @click="handleClick" @use-disabled-click="$emit('click')"><slot>Zagraj</slot></PrimaryButton>
	<VCard v-if="disabled" :style="`opacity:${showCard ? '1' : '0'}`" class="card">
		<slot name="card">
			<p>Musisz najpierw zobaczyć film.</p>
		</slot>
	</VCard>
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
			let timeout: number | null = null;
			function handleClick(): void {
				if (props.disabled === false) return;
				if (timeout !== null) clearTimeout(timeout);
				showCard.value = true;
				timeout = setTimeout(() => {
					showCard.value = false;
				}, 3000);
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
