<template>
	<Done>
		<template #progress>
			<ProgressBar style="margin-top: 20px" :max="progress().max" :value="progress().value" />
			<h2 v-if="!isUA.value">Brawo, udało Ci się rozwiązać {{ progress().value }} z {{ progress().max }} zagadek</h2>
			<h2 v-else>Браво, вам вдалося розв'язати {{ progress().value }} з {{ progress().max }} загадок</h2>
		</template>
		<template v-if="isUA.value"><h3>Знайди і проскануй наступний код</h3></template>
		<template v-if="isUA.value" #action>Перенести на мапу</template>
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
