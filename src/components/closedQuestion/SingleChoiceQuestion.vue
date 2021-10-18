<template>
	<div class="container">
		<n-space vertical>
			<p v-if="question !== ''">{{ question }}</p>
			<n-radio-group name="radiogroup" style="max-width: 100%">
				<n-space vertical>
					<n-radio v-for="(option, i) in options" :key="`option${i}-${option}`" :value="option" @input="handleClick($event.target.value)">
						<img v-if="arePhotos" :src="option" />
						<span v-else>{{ option }}</span>
					</n-radio>
				</n-space>
			</n-radio-group>
			{{ ans }}
		</n-space>
	</div>
</template>

<script lang="ts">
	import { NRadioGroup, NRadio, NSpace } from 'naive-ui';
	import { defineComponent, ref, PropType } from 'vue';

	import { arePhotos } from './arePhotos';
	import { checkAnswer } from './checkAnswer';
	import { hideInput } from './hideInput';
	import Question from './question';
	import { shuffleOptions } from './shuffleOptions';

	export default defineComponent({
		name: 'SingleChoiceQuestion',
		components: {
			NSpace,
			NRadioGroup,
			NRadio,
		},
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
				console.log(e);
				ans.value = checkAnswer(e, props.answer);
			}
			return { arePhotos: arePhotos(props.options), shuffledOptions: shuffleOptions(props.options), ans, hideInput, handleClick };
		},
	});
</script>
<style lang="scss" scoped >
	.container {
		padding: 12px;
		input {
			visibility: v-bind('hideInput(arePhotos)');
		}
		img {
			width: 150px;
		}
		p {
			max-width: 100%;
		}
	}
</style>