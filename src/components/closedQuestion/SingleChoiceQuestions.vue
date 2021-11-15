<template>
	<Flex align="flex-start">
		<SingleChoiceQuestion
			v-for="(question, i) in questions"
			:key="`${name}Question${i}`"
			:question="question.question"
			:options="question.options"
			:answer="question.answer"
			:name="name + i"
			:displayFeedback="displayFeedback"
			@correct="isCorrect[i] = true"
			@incorrect="isCorrect[i] = false"
		>
			<slot :name="i"></slot>
		</SingleChoiceQuestion>
	</Flex>
</template>

<script lang="ts">
	import { defineComponent, PropType, ref, watch } from 'vue';

	import { Flex } from '@corioders/vueui';

	import SingleChoiceQuestion from './SingleChoiceQuestion.vue';
	import Question from './question';

	export default defineComponent({
		name: 'SingleChoiceQuestions',
		components: {
			SingleChoiceQuestion,
			Flex,
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