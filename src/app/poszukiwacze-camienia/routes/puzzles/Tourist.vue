<template>
	<Video videoId="HcVCHKHy-Xw" />
	<SingleChoiceQuestions :questions="questions" name="place" :displayFeedback="displayFeedback" @correct="handleAnswer(true)" @incorrect="handleAnswer(false)">
		<template #0>
			<img src="@rock/assets/places/0.webp" alt="Miejsce 1" />
		</template>
		<template #1>
			<img src="@rock/assets/places/1.webp" alt="Miejsce 2" />
		</template>
		<template #2>
			<img src="@rock/assets/places/2.webp" alt="Miejsce 3" />
		</template>
		<template #3>
			<img src="@rock/assets/places/3.webp" alt="Miejsce 4" />
		</template>
	</SingleChoiceQuestions>
	<CheckButton :isCorrect="isCorrect" @click="handleCheck" />
</template>

<script lang="ts">
import { useProgressStore } from '@rock/store/progress';
import { defineComponent } from 'vue';

import { tourist as questions } from '@/app/poszukiwacze-camienia/assets/questions';
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
		return { questions, ...questionExecutor(() => store.finishPuzzle('Tourist')) };
	},
});
</script>
