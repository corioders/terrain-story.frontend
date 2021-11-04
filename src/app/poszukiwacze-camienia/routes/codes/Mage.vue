<template>
	<Video url="https://www.youtube.com/embed/rh04Fv24fjo" />
	<p class="questionHelper">Znajdź po trzy różnice w każdej parze zdjęć, zaznacz je na górnych zdjęciach.</p>
	<n-space vertical>
		<Differences name="mage" :descriptors="descriptors" @correct="isCorrect = true" />
	</n-space>
	<CheckButton :isCorrect="isCorrect" @click="handleCheck()" />
</template>

<script lang="ts">
	import { NSpace } from 'naive-ui';
	import { defineComponent, ref } from 'vue';

	import Video from '@/components/Video.vue';
	import CheckButton from '@/components/buttons/CheckButton.vue';

	import magicDescriptor from '@rock/assets/photoDifferences/magic';
	import rockDescriptor from '@rock/assets/photoDifferences/rock';
	import touristDescriptor from '@rock/assets/photoDifferences/tourist';
  
	import Differences from '@rock/components/photoDifferences/Differences.vue';
	import { useProgressStore } from '@rock/store/progress';

	export default defineComponent({
		name: 'Mage',
		components: {
			Differences,
			NSpace,
			Video,
			CheckButton,
		},
		emits: ['correct'],
		setup() {
			const store = useProgressStore();
			const isCorrect = ref<boolean>(false);
			const descriptors = [magicDescriptor, rockDescriptor, touristDescriptor];

			const handleCheck = (): void => {
				if (isCorrect.value === true) store.finishPuzzle('Mage');
			};

			return { descriptors, isCorrect, handleCheck };
		},
	});
</script>
<style lang="scss" scoped>
	.questionHelper {
		text-align: center;
	}
</style>