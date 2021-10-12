<template>
	<div v-for="(question, i) in questions" :key="`${name}Question${i}`">
		<SingleChoiceQuestion :question="question.question" :options="question.options" :name="name + i" @answer="$emit('answer', i + $event)" />
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
		emits: ['answer'],
	});
</script>
<style lang="scss" scoped>
</style>
