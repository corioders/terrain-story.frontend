<template>
	<Video videoId="P2dcu-dIhhU" />
	<SingleChoiceQuestions :questions="questions" name="mystery" :displayFeedback="displayFeedback" @correct="handleAnswer(true)" @incorrect="handleAnswer(false)" />
	<CheckButton :isCorrect="isCorrect" @click="handleCheck" />
</template>

<script lang="ts">
import { useProgressStore } from '@rock/store/progress';
import { defineComponent } from 'vue';

import { treasurer as questions } from '@/app/poszukiwacze-camienia/assets/questions';
import Video from '@/components/YoutubeVideo.vue';
import CheckButton from '@/components/buttons/CheckButton.vue';
import SingleChoiceQuestions from '@/components/closedQuestion/SingleChoiceQuestions.vue';
import { questionExecutor } from '@/components/closedQuestion/question';

export default defineComponent({
	name: 'Tourist',
	components: {
		Video,
		SingleChoiceQuestions,
		CheckButton,
	},
	setup() {
		const store = useProgressStore();
		return { questions, ...questionExecutor(() => store.finishPuzzle('Treasurer')) };
	},
});
</script>
