<template>
	<VButton class="checkButton" :class="wrongAnswerState ? 'error' : ''" @click="handleClick($event)"><div></div></VButton>
</template>

<script lang="ts">
import { VButton } from '@corioders/vueui';
import { defineComponent, ref, computed } from 'vue';

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

		const buttonContent = computed(() => (window.isUA.value !== true ? "'Sprawdź'" : "'Перевірте'"));
		const errorContent = computed(() => (window.isUA.value !== true ? "'Zła odpowiedź'" : "'Неправильна відповідь'"));
		const buttonWidth = computed(() => (window.isUA.value !== true ? '110px' : '220px'));

		return { handleClick, wrongAnswerState, buttonContent, errorContent, buttonWidth };
	},
});
</script>
<style lang="scss" scoped>
@use '@scssGlobals/colors';
@use '@/theme/Button/Button.scss' as *;

.checkButton {
	@include Button(colors.$primary);

	transition: all 0.5s;

	div {
		width: v-bind('buttonWidth');
		height: 22px;
		position: relative;

		&::before {
			content: v-bind('buttonContent');
			opacity: 1;
		}

		&::after {
			content: v-bind('errorContent');
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
	background-color: colors.$error;

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
