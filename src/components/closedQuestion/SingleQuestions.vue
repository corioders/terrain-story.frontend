<template>
	<div v-for="(question, i) in questions" :key="`${name}Question${i}`">
		<p>{{ question.question }}</p>
		<SingleQuestion :options="question.options" :name="name + i" @answer="$emit('answer', i + $event)" />
	</div>
</template>

<script lang="ts">
	import { defineComponent, PropType } from 'vue';

	import SingleQuestion from './SingleQuestion.vue';
	import Question from './question';

	export default defineComponent({
		name: 'SingleQuestions',
		components: {
			SingleQuestion,
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
