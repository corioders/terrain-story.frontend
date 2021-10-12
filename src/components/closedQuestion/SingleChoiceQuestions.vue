<template>
	<div v-for="(question, i) in questions" :key="`${name}Question${i}`">
		<SingleChoiceQuestion :question="question.question" :options="question.options" :answer="question.answer" :name="name + i" />
	</div>
</template>

<script lang="ts">
	import { defineComponent, PropType } from 'vue';

	import SingleChoiceQuestion from './SingleChoiceQuestion.vue';
	import Question from './question';

	export default defineComponent({
		name: 'SingleChoiceQuestions',
		components: {
			SingleChoiceQuestion,
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
