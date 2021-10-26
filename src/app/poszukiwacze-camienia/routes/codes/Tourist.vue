<template>
	<p>Turysta</p>
	<Video url="https://www.youtube.com/embed/4-fOGS_QcZk" />
	<SingleChoiceQuestions :questions="questions" name="place" />
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	import Video from '@/components/Video.vue';
	import SingleChoiceQuestions from '@/components/closedQuestion/SingleChoiceQuestions.vue';

	import { tourist as questions } from '@rock/static/questions';

	export default defineComponent({
		name: 'Tourist',
		components: {
			Video,
			SingleChoiceQuestions,
		},
		setup() {
			return { questions };
		},
	});
</script>