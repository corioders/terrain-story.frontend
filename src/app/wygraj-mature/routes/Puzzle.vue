<template>
	<!-- {{ questionsDescriptor.map((q) => q) }} -->
	<VFlex v-if="loading" style="font-size: 1.2rem">
		<p>Ładowanie zadania</p>
		<VSpinner style="font-size: 1em" />
	</VFlex>
	<SingleChoiceQuestions
		v-else
		:questions="questionsDescriptor"
		name="puzzle"
		:displayFeedback="displayFeedback"
		:isHtml="questionsDescriptor.map((q) => q.isHtml)"
		@correct="handleAnswer(true)"
		@incorrect="handleAnswer(false)"
	/>
	<CheckButton :isCorrect="isCorrect" @click="handleCheck" />
</template>

<script lang="ts">
import { VSpinner, VFlex } from '@corioders/vueui';
import { QuestionsDescriptor } from '@recap/components/questions/QuestionsDescriptor';
import { useProgressStore, PuzzleID } from '@recap/store/progress';
import { useQuestionsStore } from '@recap/store/questions';
import { defineComponent, ref, watch, PropType, onUpdated } from 'vue';

import CheckButton from '@/components/buttons/CheckButton.vue';
import SingleChoiceQuestions from '@/components/closedQuestion/SingleChoiceQuestions.vue';
import { questionExecutor } from '@/components/closedQuestion/question';

interface CWindow extends Window {
	MathJax: { typeset: () => void };
}
declare const window: CWindow;

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
		const questionsStore = useQuestionsStore();
		const progressStore = useProgressStore();

		// The loading flag forces vue to remount Questions component, this is super important because
		// Questions component is not aware of setup function 'not running as normal', so we need to
		// force the setup function to run.
		const loading = ref(true);
		const questionsDescriptor = ref<null | QuestionsDescriptor>(null);

		const update = async (): Promise<void> => {
			loading.value = true;
			questionsDescriptor.value = await questionsStore.getQuestionsDescriptor(props.puzzleID);
			loading.value = false;
		};
		
		onUpdated(() => {
			// Update MathJax html tree, so that it will render our equations.
			window.MathJax.typeset();
		});

		watch(props, () => {
			update();
		});
		update();

		return {
			questionsDescriptor,
			loading,
			...questionExecutor(() => progressStore.finishPuzzle(props.puzzleID), true),
		};
	},
});
</script>
