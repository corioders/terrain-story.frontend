<template>
	<div ref="container" class="container" :class="{ displayFeedback }">
		<Flex align="flex-start" gap="12px">
			<p v-if="question !== ''">{{ question }}</p>
			<div class="slot">
				<slot></slot>
			</div>
			<n-radio-group name="radiogroup" style="max-width: 100%">
				<Flex align="flex-start" gap="12px">
					<n-radio v-for="(option, i) in options" :key="`option${i}-${option}`" :value="option" @input="handleClick($event.target.parentElement, $event.target.value)">
						<span v-if="!arePhotos">{{ option }}</span>
						<img v-else :src="option" :alt="i" />
					</n-radio>
				</Flex>
			</n-radio-group>
		</Flex>
	</div>
</template>

<script lang="ts">
	import { NRadioGroup, NRadio } from 'naive-ui';
	import { defineComponent, PropType, ref } from 'vue';

	import { Flex } from '@corioders/vueui';

	import arePhotos from './arePhotos';
	import checkAnswer from './checkAnswer';
	import hideInput from './hideInput';
	import Question from './question';
	import shuffleOptions from './shuffleOptions';

	export default defineComponent({
		name: 'SingleChoiceQuestion',
		components: {
			Flex,
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
			displayFeedback: {
				type: Boolean,
				default: false,
				required: true,
			},
		},
		emits: ['correct', 'incorrect'],
		setup(props, { emit }) {
			const container = ref<HTMLDivElement | null>(null);

			function clear(): void {
				container.value?.querySelectorAll('.incorrect').forEach((element) => {
					element.classList.remove('incorrect');
				});
				container.value?.querySelectorAll('.correct').forEach((element) => {
					element.classList.remove('correct');
				});
			}

			function handleClick(parent: Element, val: string): void {
				const el = parent.querySelector('div.n-radio__label');
				if (checkAnswer(val, props.answer)) {
					emit('correct');
					if (el != null) {
						clear();
						el.classList.add('correct');
					}
				} else {
					emit('incorrect');
					if (el != null) {
						clear();
						el.classList.add('incorrect');
					}
				}
			}

			return {
				arePhotos: arePhotos(props.options),
				shuffledOptions: props.disableMixing ? props.options : shuffleOptions(props.options),
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
			width: 200px;
		}
		p {
			max-width: 100%;
			white-space: normal;
		}
	}
	.displayFeedback {
		.correct {
			span {
				color: $primary;
			}
			img {
				border: 5px $primary solid;
			}
		}
		.incorrect {
			span {
				color: $errorDarker;
			}
			img {
				border: 5px $errorDarker solid;
			}
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