<template>
	<PrimaryButton :disabled="disabled" @click="handleClick" @use-disabled-click="$emit('click')"><slot>Zagraj</slot></PrimaryButton>
	<Transition name="show">
		<VCard v-if="disabled && showCard" class="card">
			<slot name="card">
				<p>Musisz najpierw zobaczyć film.</p>
			</slot>
		</VCard>
	</Transition>
</template>

<script lang="ts">
import { VCard } from '@corioders/vueui';
import { defineComponent, ref } from 'vue';

import { PrimaryButton } from '@/theme/Button';

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
.show-enter-active,
.show-leave-active {
	transition: opacity 0.2s ease-in-out;
}

.show-leave-active {
	transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.show-enter-from,
.show-leave-to {
	opacity: 0;
}
</style>
