<template>
	<div class="container">
		<n-space vertical>
			<p v-if="question !== ''">{{ question }}</p>
			<n-radio-group name="radiogroup" style="max-width: 100%">
				<n-space vertical>
					<n-radio v-for="(option, i) in options" :key="`option${i}-${option.text}`" :value="option.text" @input="handleClick($event.target.value)">
						<span v-if="option.photo === undefined">{{ option.text }}</span>
						<n-space v-else vertical>
							<n-card>
								<p>{{ option.text }}</p>
							</n-card>
							<img :src="option.photo" />
						</n-space>
					</n-radio>
				</n-space>
			</n-radio-group>
			{{ ans }}
		</n-space>
	</div>
</template>

<script lang="ts">
	import { NCard, NRadioGroup, NRadio, NSpace } from 'naive-ui';
	import { defineComponent, ref, PropType } from 'vue';

	import { checkAnswer } from './checkAnswer';
	import { hideInput } from './hideInput';
	import Question from './question';
	import { shuffleOptions } from './shuffleOptions';

	export default defineComponent({
		name: 'SingleChoiceQuestion',
		components: {
			NCard,
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
			disableMixing: {
				type: Boolean,
				default: false,
			},
		},
		setup(props) {
			let ans = ref(false);
			function handleClick(e: string): void {
				console.log(e);
				ans.value = checkAnswer(e, props.answer);
			}
			return { shuffledOptions: props.disableMixing ? props.options : shuffleOptions(props.options), ans, hideInput, handleClick };
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
			white-space: normal;
		}
		.n-card {
			max-width: 600px;
			width: 95%;
		}
	}
</style>