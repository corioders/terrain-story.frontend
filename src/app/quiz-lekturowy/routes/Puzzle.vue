<template>
	<VFlex v-if="loading" style="font-size: 1.2rem">
		<p>Ładowanie zadania</p>
		<VSpinner style="font-size: 1em" />
	</VFlex>
	<SingleChoiceQuestions
		v-else
		:questions="questions"
		name="puzzle"
		:displayFeedback="displayFeedback"
		@correct="handleAnswer(true)"
		@incorrect="handleAnswer(false)"
	/>
	<CheckButton :isCorrect="isCorrect" @click="handleCheck" />
</template>

<script lang="ts">
import { VSpinner, VFlex } from '@corioders/vueui';
import { lectureQuiz } from '@quiz/assets/questions';
import { useProgressStore, PuzzleID } from '@quiz/store/progress';
import { defineComponent, ref, watch, PropType, onUpdated } from 'vue';

import CheckButton from '@/components/buttons/CheckButton.vue';
import SingleChoiceQuestions from '@/components/closedQuestion/SingleChoiceQuestions.vue';
import Question from '@/components/closedQuestion/question';
import { questionExecutor } from '@/components/closedQuestion/question';

export default defineComponent({
	name: 'Puzzle',
	components: {
		SingleChoiceQuestions,
		CheckButton,
		VSpinner,
		VFlex,
	},
	props: {
		puzzleID: {
			required: true,
			type: String as PropType<PuzzleID>,
		},
	},
	setup(props) {
		//! Read this note before doing anything in this component!
		// This component is mounted by router and then event thought routes
		// are changing from pytanie1 to pytanie2 etc. the setup function is not executed
		// after the first time. BUT props between those routes are changing this is why
		// we need to watch for props changes
		const progressStore = useProgressStore();

		// The loading flag forces vue to remount Questions component, this is super important because
		// Questions component is not aware of setup function 'not running as normal', so we need to
		// force the setup function to run.
		const loading = ref(true);
		const questions = ref<null | Question[]>(null);

		const update = (): void => {
			loading.value = true;
			questions.value = lectureQuiz[props.puzzleID];
			loading.value = false;
		};

		watch(props, () => {
			update();
		});
		update();

		return {
			questions,
			loading,
			...questionExecutor(() => progressStore.finishPuzzle(props.puzzleID), true),
		};
	},
});
</script>
