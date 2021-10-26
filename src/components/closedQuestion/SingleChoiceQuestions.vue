<template>
	<n-space vertical>
		<SingleChoiceQuestion
			v-for="(question, i) in questions"
			:key="`${name}Question${i}`"
			:question="question.question"
			:options="question.options"
			:answer="question.answer"
			:name="name + i"
			@correct="isCorrect[i] = true"
			@incorrect="isCorrect[i] = false"
		/>
	</n-space>
</template>

<script lang="ts">
	import { NSpace } from 'naive-ui';
	import { defineComponent, PropType, ref, watch } from 'vue';

	import SingleChoiceQuestion from './SingleChoiceQuestion.vue';
	import Question from './question';

	export default defineComponent({
		name: 'SingleChoiceQuestions',
		components: {
			SingleChoiceQuestion,
			NSpace,
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
<style lang="scss" scoped>
</style>
