<template>
	<VButton class="checkButton" :class="wrongAnswerState ? 'error' : ''" @click="handleClick($event)"><div></div></VButton>
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
			let timeout: number | null = null;
			async function handleClick(e: MouseEvent): Promise<void> {
				emit('click', e);
				if (timeout !== null) clearTimeout(timeout);
				if (!props.isCorrect) {
					wrongAnswerState.value = true;
					timeout = setTimeout(function () {
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
		div {
			width: 108px;
			height: 22px;
			position: relative;
			&::before {
				content: 'Sprawdź';
				opacity: 1;
			}
			&::after {
				content: 'Zła odpowiedź';
				opacity: 0;
			}

			&::before,
			&::after {
				width: 100%;
				top: 0;
				left: 0;
				margin: 0 auto;
				text-align: center;
				position: absolute;
				transition: opacity 0.3s ease-in-out;
			}
		}
	}
	.error {
		background-color: $error;
		div {
			&::before {
				opacity: 0;
			}
			&::after {
				opacity: 1;
			}
		}
	}
</style>