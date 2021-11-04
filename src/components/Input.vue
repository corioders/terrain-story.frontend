<template>
	<Flex alignItems="flex-start">
		<label :for="name" :class="answer === '' ? 'default' : isCorrect ? 'correct' : 'incorrect'">
			{{ answer === '' ? label : isCorrect ? correctAnswerText : incorrectAnswerText }}
		</label>
		<n-input :id="name" v-model:value="answer" type="text" size="large" :placeholder="label" @change="$emit('answer', $event)" @input="$emit('answer', $event)" />
	</Flex>
</template>

<script lang="ts">
	import { NInput } from 'naive-ui';
	import { defineComponent } from 'vue';

	import Flex from '@/layouts/Flex.vue';

	export default defineComponent({
		name: 'Input',
		components: {
			Flex,
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
				default: 'Dobra odpowiedź',
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
