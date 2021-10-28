<template>
	<p>Księżniczka</p>
	<Video url="https://www.youtube.com/embed/qJnJCPDnqvU" />
	<p class="questionHelper">Przejdź labirynt</p>
	<Labyrinth :labyrinthDescriptor="labyrinthDescriptor" @correct="finishHandler()" />
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	import Video from '@/components/Video.vue';

	import { labyrinthDescriptor } from '@rock/assets/princess';
	import Labyrinth from '@rock/components/labyrinth/Labyrinth.vue';
	import { useProgressStore } from '@rock/store/progress';

	export default defineComponent({
		name: 'Princess',
		components: {
			Video,
			Labyrinth,
		},
		setup() {
			const store = useProgressStore();

			const finishHandler = (): void => {
				store.finishPuzzle('Princess');
			};

			return { labyrinthDescriptor, finishHandler };
		},
	});
</script>
<style lang="scss" scoped>
	.questionHelper {
		text-align: center;
	}
</style>