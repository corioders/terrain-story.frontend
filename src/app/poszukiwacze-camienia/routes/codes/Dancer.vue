<template>
	<p>Tancerz</p>
	<Video url="https://www.youtube.com/embed/4-fOGS_QcZk" />
	<SingleChoiceQuestions :questions="questions" name="dance" />
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	import Video from '@/components/Video.vue';
	import SingleChoiceQuestions from '@/components/closedQuestion/SingleChoiceQuestions.vue';

	import { dancer as questions } from '@rock/static/questions';

	export default defineComponent({
		name: 'Dancer',
		components: {
			Video,
			SingleChoiceQuestions,
		},
		setup() {
			return { questions };
		},
	});
</script>