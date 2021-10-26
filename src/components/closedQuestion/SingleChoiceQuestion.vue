<template>
	<div ref="container" class="container">
		<n-space vertical>
			<p v-if="question !== ''">{{ question }}</p>
			<n-radio-group name="radiogroup" style="max-width: 100%">
				<n-space vertical>
					<n-radio v-for="(option, i) in options" :key="`option${i}-${option}`" :value="option" @input="handleClick($event.target.parentElement, $event.target.value)">
						<span v-if="!arePhotos">{{ option }}</span>
						<img v-else :src="option" />
					</n-radio>
				</n-space>
			</n-radio-group>
		</n-space>
	</div>
</template>

<script lang="ts">
	import { NRadioGroup, NRadio, NSpace } from 'naive-ui';
	import { defineComponent, ref, PropType } from 'vue';

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
			let ans = ref(false);

			const container = ref<HTMLDivElement | null>(null);
			function handleClick(parent: Element, val: string): void {
				ans.value = checkAnswer(val, props.answer);
				if (ans.value) {
					emit('correct');
					const el = parent.querySelector('div.n-radio__label');
					if (el != null) {
						const classList = el.classList;
						classList.add('correct');
					}
				} else {
					emit('incorrect');
					container.value?.querySelectorAll('.correct').forEach((element) => {
						element.classList.remove('correct');
					});
				}
			}

			return {
				arePhotos: arePhotos(props.options),
				shuffledOptions: props.disableMixing ? props.options : shuffleOptions(props.options),
				ans,
				hideInput,
				handleClick,
				container,
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
	.correct {
		span {
			color: $primary;
		}
		img {
			border: 5px $primary solid;
		}
	}
</style>