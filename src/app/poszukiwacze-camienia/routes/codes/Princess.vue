<template>
	<p>Księżniczka</p>
	<Video url="https://www.youtube.com/embed/qJnJCPDnqvU" />
	<Labyrinth :labyrinthDescriptor="labyrinthDescriptor" @correct="isCorrect = true" />
	<CheckButton @click="handleCheck()">SPRAWDŹ</CheckButton>
</template>

<script lang="ts">
	import { defineComponent, ref } from 'vue';

	import Video from '@/components/Video.vue';
	import CheckButton from '@/components/buttons/CheckButton.vue';

	import { labyrinthDescriptor } from '@rock/assets/princess';
	import Labyrinth from '@rock/components/labyrinth/Labyrinth.vue';
	import { useProgressStore } from '@rock/store/progress';

	export default defineComponent({
		name: 'Princess',
		components: {
			Video,
			Labyrinth,
			CheckButton,
		},
		setup() {
			const store = useProgressStore();
			const isCorrect = ref<boolean>(false);

			const handleCheck = (): void => {
				if (isCorrect.value === true) store.finishPuzzle('Princess');
			};

			return { labyrinthDescriptor, isCorrect, handleCheck };
		},
	});
</script>
