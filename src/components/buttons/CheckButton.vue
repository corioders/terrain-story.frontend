<template>
	<VButton class="CheckButton" :class="wrongAnswerState ? 'error' : 'primary'" @click="handleClick($event)">
		{{ wrongAnswerState ? 'Zła odpowiedź' : 'Sprawdź' }}
	</VButton>
</template>

<script lang="ts">
	import { defineComponent, ref } from 'vue';

	import { sleep } from '@corioders/jskit/time/time';
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
			async function handleClick(e: MouseEvent): Promise<void> {
				emit('click', e);
				await sleep(500);
				if (!props.isCorrect) {
					wrongAnswerState.value = true;
					await sleep(4000);
					wrongAnswerState.value = false;
				}
			}
			return { handleClick, wrongAnswerState };
		},
	});
</script>
<style lang="scss" scoped>
	@use '@/theme/Button/Button.scss' as *;
	.VButton {
		@include Button;
		transition: all 1s;
	}
	.primary {
		@include Button($primary);
	}
	.error {
		@include Button($error);
	}
</style>