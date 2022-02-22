<template>
	<Video videoId="rh04Fv24fjo" />
	<p class="questionHelper">Znajdź po trzy różnice w każdej parze zdjęć, zaznacz je na górnych zdjęciach.</p>
	<VFlex align="flex-start" gap="12px">
		<Differences name="mage" :descriptors="descriptors" @correct="handleAnswer(true)" />
	</VFlex>
	<CheckButton :isCorrect="isCorrect" @click="handleCheck()" />
</template>

<script lang="ts">
import { VFlex } from '@corioders/vueui';
import magicDescriptor from '@rock/assets/photoDifferences/magic';
import rockDescriptor from '@rock/assets/photoDifferences/rock';
import touristDescriptor from '@rock/assets/photoDifferences/tourist';
import Differences from '@rock/components/photoDifferences/Differences.vue';
import { useProgressStore } from '@rock/store/progress';
import { defineComponent } from 'vue';

import Video from '@/components/YoutubeVideo.vue';
import CheckButton from '@/components/buttons/CheckButton.vue';
import { questionExecutor } from '@/components/closedQuestion/question';

export default defineComponent({
	name: 'Mage',
	components: {
		Differences,
		VFlex,
		Video,
		CheckButton,
	},
	emits: ['correct'],
	setup() {
		const store = useProgressStore();
		const descriptors = [magicDescriptor, rockDescriptor, touristDescriptor];
		return { descriptors, ...questionExecutor(() => store.finishPuzzle('Mage')) };
	},
});
</script>
<style lang="scss" scoped>
.questionHelper {
	text-align: center;
}
</style>
