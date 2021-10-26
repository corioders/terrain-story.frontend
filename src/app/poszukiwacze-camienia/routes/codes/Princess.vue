<template>
	<p>Księżniczka</p>
	<Video url="https://www.youtube.com/embed/qJnJCPDnqvU" />
	<Labyrinth :labyrinthDescriptor="labyrinthDescriptor" @correct="isCorrect = true" />
	<CheckButton @click="handleCheck()">SPRAWDŹ</CheckButton>
</template>

<script lang="ts">
	import { defineComponent, ref } from 'vue';

	import CheckButton from '@/components/CheckButton.vue';
	import Video from '@/components/Video.vue';

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

			return { isCorrect, handleCheck };
		},
		data: () => ({
			labyrinthDescriptor: {
				empties: [
					{ x: 5, y: { from: 0, to: 1 }, side: 'top' },
					{ x: 5, y: 0, side: 'left' },
					{ x: 4, y: { from: 1, to: 2 }, side: 'top' },
					{ x: { from: 4, to: 5 }, y: 2, side: 'right' },
					{ x: 6, y: { from: 1, to: 2 }, side: 'top' },
					{ x: 6, y: 1, side: 'right' },
					{ x: 7, y: 1, side: 'top' },
					{ x: { from: 7, to: 8 }, y: 0, side: 'right' },
					{ x: 9, y: { from: 0, to: 2 }, side: 'bottom' },
					{ x: 9, y: 3, side: 'right' },
					{ x: 10, y: 3, side: 'top' },
					{ x: 9, y: { from: 3, to: 5 }, side: 'bottom' },
					{ x: 9, y: 6, side: 'right' },
					{ x: 10, y: { from: 6, to: 5 }, side: 'top' },
					{ x: 10, y: 4, side: 'right' },
					{ x: 11, y: { from: 4, to: 1 }, side: 'top' },
					{ x: 11, y: 0, side: 'left' },
					{ x: 10, y: 0, side: 'bottom' },
					{ x: 10, y: 0, side: 'bottom' },
					{ x: 11, y: 2, side: 'right' },
					{ x: 12, y: { from: 2, to: 1 }, side: 'top' },
					{ x: 12, y: { from: 2, to: 6 }, side: 'bottom' },
					{ x: 12, y: 7, side: 'left' },
					{ x: 11, y: { from: 7, to: 8 }, side: 'bottom' },
					{ x: 11, y: 9, side: 'right' },
					{ x: 12, y: 9, side: 'top' },
					{ x: 12, y: { from: 9, to: 10 }, side: 'bottom' },
					{ x: 12, y: 11, side: 'left' },
					{ x: 11, y: 11, side: 'top' },
					{ x: 11, y: 10, side: 'left' },
					{ x: 10, y: 10, side: 'bottom' },
					{ x: { from: 10, to: 7 }, y: 11, side: 'left' },
					{ x: 7, y: 11, side: 'top' },
					{ x: { from: 7, to: 6 }, y: 10, side: 'left' },
					{ x: 5, y: 10, side: 'top' },
					{ x: 5, y: 10, side: 'bottom' },
					{ x: 5, y: 11, side: 'left' },
					{ x: 4, y: 11, side: 'top' },
					{ x: 4, y: 10, side: 'left' },
					{ x: 3, y: { from: 10, to: 11 }, side: 'bottom' },
					{ x: 3, y: 10, side: 'left' },
					{ x: 2, y: 10, side: 'bottom' },
					{ x: 3, y: { from: 10, to: 9 }, side: 'top' },
					{ x: 11, y: 7, side: 'left' },
					{ x: 10, y: { from: 7, to: 8 }, side: 'bottom' },
					{ x: 10, y: 9, side: 'left' },
					{ x: 9, y: 9, side: 'bottom' },
					{ x: 9, y: 9, side: 'top' },
					{ x: 9, y: 8, side: 'left' },
					{ x: 8, y: { from: 8, to: 6 }, side: 'top' },
					{ x: 9, y: { from: 8, to: 7 }, side: 'top' },
					{ x: 11, y: { from: 7, to: 6 }, side: 'top' },
					{ x: 9, y: 4, side: 'left' },
					{ x: 8, y: { from: 0, to: 2 }, side: 'bottom' },
					{ x: 8, y: 3, side: 'left' },
					{ x: 7, y: 3, side: 'top' },
					{ x: 7, y: { from: 3, to: 8 }, side: 'bottom' },
					{ x: 7, y: 9, side: 'right' },
					{ x: 8, y: 9, side: 'bottom' },
					{ x: 7, y: 5, side: 'left' },
					{ x: 6, y: { from: 5, to: 8 }, side: 'bottom' },
					{ x: { from: 6, to: 5 }, y: 8, side: 'left' },
					{ x: 4, y: 8, side: 'bottom' },
					{ x: 4, y: 8, side: 'top' },
					{ x: 4, y: 7, side: 'left' },
					{ x: 3, y: 7, side: 'top' },
					{ x: 3, y: 6, side: 'left' },
					{ x: 2, y: 6, side: 'bottom' },
					{ x: 2, y: 7, side: 'left' },
					{ x: 1, y: { from: 7, to: 8 }, side: 'bottom' },
					{ x: 1, y: 9, side: 'right' },
					{ x: 2, y: 9, side: 'top' },
					{ x: 1, y: { from: 9, to: 10 }, side: 'bottom' },
					{ x: 1, y: 11, side: 'left' },
					{ x: 0, y: { from: 11, to: 10 }, side: 'top' },
					{ x: 3, y: 6, side: 'top' },
					{ x: 4, y: 7, side: 'right' },
					{ x: 5, y: 7, side: 'top' },
					{ x: 5, y: 6, side: 'left' },
					{ x: 4, y: { from: 6, to: 5 }, side: 'top' },
					{ x: { from: 4, to: 3 }, y: 4, side: 'left' },
					{ x: 2, y: 4, side: 'bottom' },
					{ x: 2, y: 5, side: 'left' },
					{ x: 1, y: 5, side: 'bottom' },
					{ x: 1, y: 6, side: 'left' },
					{ x: 0, y: { from: 6, to: 7 }, side: 'bottom' },
					{ x: 0, y: { from: 6, to: 1 }, side: 'top' },
					{ x: { from: 0, to: 2 }, y: 0, side: 'right' },
					{ x: 3, y: { from: 0, to: 1 }, side: 'bottom' },
					{ x: 3, y: 2, side: 'right' },
					{ x: 6, y: { from: 2, to: 3 }, side: 'bottom' },
					{ x: 6, y: 5, side: 'left' },
					{ x: 5, y: { from: 5, to: 4 }, side: 'top' },
					{ x: 5, y: 3, side: 'left' },
					{ x: 4, y: 3, side: 'bottom' },
					{ x: 2, y: { from: 4, to: 2 }, side: 'top' },
					{ x: 2, y: 1, side: 'left' },
					{ x: 2, y: 2, side: 'left' },
					{ x: 1, y: 2, side: 'bottom' },
					{ x: 1, y: 3, side: 'left' },
					{ x: 1, y: 3, side: 'bottom' },
					{ x: 3, y: 2, side: 'bottom' },
				],
				lineWidth: 5,
				dimensions: {
					width: 13,
					height: 12,
				},
				cellPixels: 50,
				start: {
					x: 5,
					y: 0,
					side: 'top',
				},
				end: {
					x: 3,
					y: 12,
				},
			},
		}),
	});
</script>
