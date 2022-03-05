<template>
	<Done>
		<template #progress>
			<ProgressBar style="margin-top: 20px" :max="progress().max" :value="progress().value" />
			<h2>Brawo, udało Ci się rozwiązać {{ progress().value }} z {{ progress().max }} zagadek</h2>
		</template>
	</Done>
</template>

<script lang="ts">
import { useProgressStore, PuzzleID } from '@help/store/progress';
import { defineComponent } from 'vue';

import ProgressBar from '@/components/progress/ProgressBar.vue';
import handleProgress, { HandleProgressReturn } from '@/components/progress/handleProgress';
import Done from '@/views/Done.vue';

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
