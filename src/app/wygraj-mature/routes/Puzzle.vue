<template>
	<VFlex v-if="loading" style="font-size: 1.2rem">
		<p>Ładowanie zadania</p>
		<VSpinner style="font-size: 1em" />
	</VFlex>
	<Questions v-else :questions="questionsDescriptor" />
</template>

<script lang="ts">
	import { defineComponent, ref, watch } from 'vue';

	import { VSpinner, VFlex } from '@corioders/vueui';
	import Questions from '@recap/components/questions/Questions.vue';
	import { QuestionsDescriptor } from '@recap/components/questions/QuestionsDescriptor';
	import { useQuestionsStore } from '@recap/store/questions';

	export default defineComponent({
		name: 'Puzzle',
		components: {
			Questions,
			VSpinner,
			VFlex,
		},
		props: {
			puzzleIndex: {
				required: true,
				type: Number,
			},
		},
		setup(props) {
			//! Read this note before doing anything in this component!
			// This component is mounted by router and then event thought routes
			// are changing from pytanie1 to pytanie2 etc. the setup function is not executed
			// after the first time. BUT props between those routes are changing this is why
			// we need to watch for props changes
			const questionsStore = useQuestionsStore();

			// The loading flag forces vue to remount Questions component, this is super important because
			// Questions component is not aware of setup function 'not running as normal', so we need to
			// force the setup function to run.
			const loading = ref(true);
			const questionsDescriptor = ref<null | QuestionsDescriptor>(null);

			const update = async (): Promise<void> => {
				loading.value = true;
				questionsDescriptor.value = await questionsStore.getQuestionsDescriptor(props.puzzleIndex);
				loading.value = false;
			};

			watch(props, () => {
				update();
			});
			update();

			return { questionsDescriptor, loading };
		},
	});
</script>
