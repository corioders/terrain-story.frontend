<template>
	<n-space vertical>
		<SingleChoiceQuestion
			v-for="(question, i) in questions"
			:key="`${name}Question${i}`"
			:question="question.question"
			:options="question.options"
			:answer="question.answer"
			:name="name + i"
		>
			<slot :name="i"></slot>
		</SingleChoiceQuestion>
	</n-space>
</template>

<script lang="ts">
	import { NSpace } from 'naive-ui';
	import { defineComponent, PropType } from 'vue';

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
	});
</script>
<style lang="scss" scoped>
</style>
