<template>
	<div class="container">
		<n-space vertical>
			<p v-if="question !== ''">{{ question }}</p>
			<div class="slot">
				<slot></slot>
			</div>
			<n-radio-group name="radiogroup" style="max-width: 100%">
				<n-space vertical>
					<n-radio v-for="(option, i) in options" :key="`option${i}-${option}`" :value="option" @input="handleClick($event.target.value)">
						<span v-if="!arePhotos">{{ option }}</span>
						<img v-else :src="option" :alt="i" />
					</n-radio>
				</n-space>
			</n-radio-group>
		</n-space>
	</div>
</template>

<script lang="ts">
	import { NRadioGroup, NRadio, NSpace } from 'naive-ui';
	import { defineComponent, PropType } from 'vue';

	import arePhotos from './arePhotos';
	import checkAnswer from './checkAnswer';
	import hideInput from './hideInput';
	import Question from './question';
	import shuffleOptions from './shuffleOptions';

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
			disableMixing: {
				type: Boolean,
				default: false,
			},
		},
		emits: ['correct', 'incorrect'],
		setup(props, { emit }) {
			function handleClick(val: string): void {
				checkAnswer(val, props.answer) ? emit('correct') : emit('incorrect');
			}

			return {
				arePhotos: arePhotos(props.options),
				shuffledOptions: props.disableMixing ? props.options : shuffleOptions(props.options),
				hideInput,
				handleClick,
			};
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
	.slot {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		:deep(img) {
			width: 95%;
			max-width: 950px;
		}
	}
</style>