<template>
	<VFlex align="flex-start" gap="12px">
		<Differences name="mage" :descriptors="descriptors" @correct="handleAnswer(true)" />
	</VFlex>
	<CheckButton :isCorrect="isCorrect" @click="handleCheck()" />
</template>

<script lang="ts">
import { VFlex } from '@corioders/vueui';
import { descriptors } from '@fin/assets/photoDifferences/descriptors';
import { useProgressStore } from '@fin/store/progress';
import { defineComponent } from 'vue';

import Video from '@/components/YoutubeVideo.vue';
import CheckButton from '@/components/buttons/CheckButton.vue';
import { questionExecutor } from '@/components/closedQuestion/question';
import Differences from '@/components/photoDifferences/Differences.vue';

export default defineComponent({
	name: 'PhotoDifferences',
	components: {
		Differences,
		VFlex,
		CheckButton,
	},
	setup() {
		const store = useProgressStore();
		return { descriptors, ...questionExecutor(() => store.finishPuzzle('PhotoDifferences')) };
	},
});
</script>
<style lang="scss" scoped>
.questionHelper {
	text-align: center;
}
</style>
