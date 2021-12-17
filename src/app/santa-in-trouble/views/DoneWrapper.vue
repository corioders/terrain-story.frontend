<template>
	<Done replacePath="/">
		<template #progress>
			<ProgressBar style="margin-top: 20px" :max="progress().max" :value="progress().value" />
			<h2>Well done, you've solved {{ progress().value }} of {{ progress().max }} mysteries</h2>
		</template>
		<h3>Find and scan another code</h3>
		<template #action>
			<h4>Moving to the home page</h4>
		</template>
	</Done>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	import ProgressBar from '@/components/progress/ProgressBar.vue';
	import handleProgress, { HandleProgressReturn } from '@/components/progress/handleProgress';

	import Done from '@/views/Done.vue';
	import { useProgressStore, PuzzleID } from '@eng/store/progress';

	export default defineComponent({
		components: {
			Done,
			ProgressBar,
		},
		setup() {
			const progress: () => HandleProgressReturn = () => handleProgress<PuzzleID>(useProgressStore().puzzles);
			return { progress };
		},
	});
</script>
