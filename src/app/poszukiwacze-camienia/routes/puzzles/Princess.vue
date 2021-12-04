<template>
	<Video videoId="qJnJCPDnqvU" />
	<p class="questionHelper">Przejdź labirynt</p>
	<Labyrinth :labyrinthDescriptor="labyrinthDescriptor" @correct="handleFinish()" />
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	import Video from '@/components/YoutubeVideo.vue';

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
			const handleFinish = (): void => {
				store.finishPuzzle('Princess');
			};

			return { labyrinthDescriptor, handleFinish };
		},
	});
</script>
<style lang="scss" scoped>
	.questionHelper {
		text-align: center;
	}
</style>