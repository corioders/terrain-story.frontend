<template>
	<Video videoId="8O_EcEENaaw" />
	<SingleChoiceQuestions :questions="questions" name="dance" :displayFeedback="displayFeedback" @correct="handleAnswer(true)" @incorrect="handleAnswer(false)">
		<template #0>
			<audio controls :src="require('@rock/assets/dancer/belgijka.mp3')"></audio>
		</template>
		<template #1>
			<audio controls :src="require('@rock/assets/dancer/macarena.mp3')"></audio>
		</template>
		<template #2>
			<audio controls :src="require('@rock/assets/dancer/tango.mp3')"></audio>
		</template>
	</SingleChoiceQuestions>
	<CheckButton :isCorrect="isCorrect" @click="handleCheck()" />
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	import Video from '@/components/YoutubeVideo.vue';
	import CheckButton from '@/components/buttons/CheckButton.vue';
	import SingleChoiceQuestions from '@/components/closedQuestion/SingleChoiceQuestions.vue';
	import { questionExecutor } from '@/components/closedQuestion/question';

	import { dancer as questions } from '@/app/poszukiwacze-camienia/assets/questions';
	import { useProgressStore } from '@rock/store/progress';

	export default defineComponent({
		name: 'Dancer',
		components: {
			Video,
			SingleChoiceQuestions,
			CheckButton,
		},
		setup() {
			const store = useProgressStore();
			return { questions, ...questionExecutor(() => store.finishPuzzle('Dancer')) };		},
	});
</script>