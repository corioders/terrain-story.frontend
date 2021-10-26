<template>
	<p>Skarbek</p>
	<Video url="https://www.youtube.com/embed/P2dcu-dIhhU" />
	<SingleChoiceQuestions :questions="questions" name="mystery" />
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	import Video from '@/components/Video.vue';
	import SingleChoiceQuestions from '@/components/closedQuestion/SingleChoiceQuestions.vue';

	import { treasurer as questions } from '@/app/poszukiwacze-camienia/assets/questions';

	export default defineComponent({
		name: 'Treasurer',
		components: {
			Video,
			SingleChoiceQuestions,
		},
		setup() {
			return { questions };
		},
	});
</script>