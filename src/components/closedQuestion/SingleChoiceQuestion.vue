<template>
	<div class="container">
		<p v-if="question !== ''">{{ question }}</p>
		<div v-for="(option, i) in options" :key="`option${i}`">
			<input :id="`${name}Option${i}`" :name="name" :value="option" type="radio" @click="handleClick($event.target.value)" />
			<label :for="`${name}Option${i}`">
				<img v-if="arePhotos" :src="option" />
				<span v-else>{{ option }}</span>
			</label>
		</div>
		{{ ans }}
	</div>
</template>

<script lang="ts">
	import { defineComponent, ref, PropType } from 'vue';

	import { arePhotos } from './arePhotos';
	import { checkAnswer } from './checkAnswer';
	import { hideInput } from './hideInput';
	import Question from './question';
	import { shuffleOptions } from './shuffleOptions';

	export default defineComponent({
		name: 'SingleChoiceQuestion',
		props: {
			name: {
				type: String,
				required: true,
			},
			question: {
				type: String as PropType<Question['question']>,
				default: '',
			},
			options: {
				type: Array as PropType<Question['options']>,
				required: true,
			},
			answer: {
				type: String as PropType<Question['answer']>,
				required: true,
			},
		},
		setup(props) {
			let ans = ref(false);
			function handleClick(e: string): void {
				ans.value = checkAnswer(e, props.answer);
			}
			return { arePhotos: arePhotos(props.options), shuffledOptions: shuffleOptions(props.options), ans, hideInput, handleClick };
		},
	});
</script>
<style lang="scss" scoped >
	.container {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		input {
			visibility: v-bind('hideInput(arePhotos)');
		}
		img {
			width: 150px;
		}
	}
</style>