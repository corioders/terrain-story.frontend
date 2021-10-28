<template>
	<p>Mag</p>
	<Video url="https://www.youtube.com/embed/rh04Fv24fjo" />
	Znajdź po trzy różnice na krażdym ze zdjęć
	<n-space vertical>
		<Differences name="mage" :descriptors="descriptors" @correct="isCorrect = true" />
	</n-space>
	<CheckButton @click="handleCheck()" />
</template>

<script lang="ts">
	import { NSpace } from 'naive-ui';
	import { defineComponent, ref } from 'vue';

	import Video from '@/components/Video.vue';
	import CheckButton from '@/components/buttons/CheckButton.vue';

	import alienDescriptor from '@rock/assets/photoDifferences/alien';
	import safariDescriptor from '@rock/assets/photoDifferences/safari';
	import someoneDescriptor from '@rock/assets/photoDifferences/someone';
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
			const descriptors = [alienDescriptor, safariDescriptor, someoneDescriptor];

			const handleCheck = (): void => {
				if (isCorrect.value === true) store.finishPuzzle('Mage');
			};

			return { descriptors, isCorrect, handleCheck };
		},
	});
</script>