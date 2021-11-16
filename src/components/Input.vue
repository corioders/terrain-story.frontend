<template>
	<VFlex align="flex-start">
		<label :for="name" :class="answer === '' ? 'default' : isCorrect ? 'correct' : 'incorrect'">
			{{ answer === '' ? label : isCorrect ? correctAnswerText : incorrectAnswerText }}
		</label>
		<n-input :id="name" v-model:value="answer" type="text" size="large" :placeholder="label" @change="$emit('answer', $event)" @input="$emit('answer', $event)" />
	</VFlex>
</template>

<script lang="ts">
	import { NInput } from 'naive-ui';
	import { defineComponent } from 'vue';

	import { VFlex } from '@corioders/vueui';

	export default defineComponent({
		name: 'Input',
		components: {
			VFlex,
			NInput,
		},
		props: {
			name: {
				type: String,
				required: true,
			},
			label: {
				type: String,
				required: true,
			},
			isCorrect: {
				type: Boolean,
				required: true,
			},
			correctAnswerText: {
				type: String,
				default: 'Dobra odpowiedź',
			},
			incorrectAnswerText: {
				type: String,
				default: 'Zła odpowiedź',
			},
		},
		emits: ['answer'],
		data() {
			return {
				answer: '',
			};
		},
	});
</script>
<style lang="scss" scoped>
	.correct {
		color: $primary;
	}
	.incorrect {
		color: $errorDarker;
	}
</style>
