<template>
	<p>Inspektor</p>
	<Video url="https://www.youtube.com/embed/4-fOGS_QcZk" />
	<SingleChoiceQuestion :options="question.options" :answer="question.answer" disableMixing name="causer" />
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	import Video from '@/components/Video.vue';
	import SingleChoiceQuestion from '@/components/closedQuestion/SingleChoiceQuestion.vue';

	import { inspector as question } from '@rock/static/questions';

	export default defineComponent({
		name: 'Inspector',
		components: {
			Video,
			SingleChoiceQuestion,
		},
		setup() {
			return { question };
		},
	});
</script>