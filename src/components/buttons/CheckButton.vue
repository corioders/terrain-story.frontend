<template>
	<n-button :type="wrongAnswerState ? 'error' : 'default'" size="large" @click="handleClick($event)">
		{{ wrongAnswerState ? 'Zła odpowiedź' : 'Sprawdź' }}
	</n-button>
</template>

<script lang="ts">
	import { NButton } from 'naive-ui';
	import { defineComponent, ref } from 'vue';

	import { sleep } from '@corioders/jskit/time/time';

	export default defineComponent({
		name: 'CheckButton',
		components: {
			NButton,
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
