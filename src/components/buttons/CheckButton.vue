<template>
	<VButton class="checkButton" :class="wrongAnswerState ? 'error' : ''" @click="handleClick($event)">
		{{ wrongAnswerState ? 'Zła odpowiedź' : 'Sprawdź' }}
	</VButton>
</template>

<script lang="ts">
	import { defineComponent, ref } from 'vue';

	import { VButton } from '@corioders/vueui';

	export default defineComponent({
		name: 'CheckButton',
		components: {
			VButton,
		},
		props: {
			isCorrect: {
				type: Boolean,
				required: true,
			},
		},

		emits: ['click'],
		setup(props, { emit }) {
			let wrongAnswerState = ref(false);
			const timeout = ref<number | null>(null);
			async function handleClick(e: MouseEvent): Promise<void> {
				emit('click', e);
				if (timeout.value !== null) clearTimeout(timeout.value);
				if (!props.isCorrect) {
					wrongAnswerState.value = true;
					timeout.value = setTimeout(function () {
						wrongAnswerState.value = false;
					}, 4000);
				}
			}
			return { handleClick, wrongAnswerState };
		},
	});
</script>
<style lang="scss" scoped>
	@use '@/theme/Button/Button.scss' as *;
	.checkButton {
		@include Button($primary);
		transition: all 0.5s;
	}
	.error {
		background-color: #{$error};
	}
</style>