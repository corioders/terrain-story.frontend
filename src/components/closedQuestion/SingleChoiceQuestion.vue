<template>
	<div ref="container" class="container" :class="{ displayFeedback }">
		<VFlex align="flex-start" gap="12px">
			<p v-if="question !== '' && !isHtml">{{ question }}</p>
			<div v-else-if="question !== ''" v-html="question" />
			<div class="slot">
				<slot></slot>
			</div>
			<VFlex align="flex-start" gap="12px" style="max-width: 100%">
				<VRadio
					v-for="(option, i) in options"
					:key="`option${i}-${option}`"
					:name="name"
					:value="option"
					@input="handleClick($event.target.parentElement, $event.target.value)"
				>
					<span v-if="!arePhotos && !isHtml">{{ option }}</span>
					<div v-else-if="!arePhotos" v-html="option" />
					<img v-else :src="option" :alt="i" />
				</VRadio>
			</VFlex>
		</VFlex>
	</div>
</template>

<script lang="ts">
	import { defineComponent, PropType, ref } from 'vue';

	import { VFlex, VRadio } from '@corioders/vueui';

	import arePhotos from './arePhotos';
	import checkAnswer from './checkAnswer';
	import hideInput from './hideInput';
	import Question from './question';
	import shuffleOptions from './shuffleOptions';

	export default defineComponent({
		name: 'SingleChoiceQuestion',
		components: {
			VFlex,
			VRadio,
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
			isHtml: {
				type: Boolean,
				default: false,
			},
		},
		emits: ['correct', 'incorrect'],
		setup(props, { emit }) {
			const container = ref<HTMLDivElement | null>(null);

			let lastTargetParentElement: Element | null = null;
			function handleClick(targetParentElement: Element, val: string): void {
				if (lastTargetParentElement !== null) lastTargetParentElement.classList.remove('correct', 'incorrect');
				lastTargetParentElement = targetParentElement;

				if (checkAnswer(val, props.answer)) {
					emit('correct');
					targetParentElement.classList.add('correct');
				} else {
					emit('incorrect');
					targetParentElement.classList.add('incorrect');
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
<style lang="scss" scoped>
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
			color: $primary;
			img {
				border: 5px $primary solid;
			}
		}
		.incorrect {
			color: $errorDarker;
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
	:deep(label) {
		* {
			margin: 0;
		}
	}
</style>
