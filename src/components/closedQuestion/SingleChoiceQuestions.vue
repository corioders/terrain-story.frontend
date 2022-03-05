<template>
	<VFlex align="flex-start">
		<SingleChoiceQuestion
			v-for="(question, i) in questions"
			:key="`${name}Question${i}`"
			:question="question.question"
			:options="question.options"
			:answer="question.answer"
			:name="name + i"
			:displayFeedback="displayFeedback"
			:disableMixing="disableMixing"
			:isHtml="isHtml[i]"
			@correct="isCorrect[i] = true"
			@incorrect="isCorrect[i] = false"
		>
			<slot :name="i"></slot>
		</SingleChoiceQuestion>
	</VFlex>
</template>

<script lang="ts">
import { VFlex } from '@corioders/vueui';
import { defineComponent, PropType, ref, watch } from 'vue';

import SingleChoiceQuestion from './SingleChoiceQuestion.vue';
import Question from './question';

export default defineComponent({
	name: 'SingleChoiceQuestions',
	components: {
		SingleChoiceQuestion,
		VFlex,
	},

	props: {
		name: {
			type: String,
			required: true,
		},
		questions: {
			type: Array as PropType<Question[]>,
			required: true,
		},
		displayFeedback: {
			type: Boolean,
			required: true,
		},
		disableMixing: {
			type: Boolean,
			default: false,
		},
		isHtml: {
			type: Array as PropType<boolean[]>,
			// default() {
			// 	return [false, false, false];
			// },
			// default: [false, false, false],
			default: () => [false, false, false],
		},
	},

	emits: ['correct', 'incorrect'],
	setup(props, { emit }) {
		const isCorrect = ref<Array<boolean>>([]);

		// Initalize to incorrect.
		for (let i = 0; i < props.questions.length; i++) {
			isCorrect.value[i] = false;
		}

		watch(
			isCorrect,
			() => {
				if (!isCorrect.value.includes(false)) emit('correct');
				else emit('incorrect');
			},
			{ deep: true },
		);

		return { isCorrect };
	},
});
</script>
