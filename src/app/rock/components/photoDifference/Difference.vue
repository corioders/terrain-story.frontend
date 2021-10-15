<template>
	<Flex flexDirection="row">
		<canvas ref="canvasRef" class="image"></canvas>
		<img :src="$props.differenceDescriptor.originalPhotoSrc" class="image" />
	</Flex>
</template>

<script lang="ts">
	import { defineComponent, onMounted, PropType, ref } from 'vue';

	import Flex from '@/layouts/Flex.vue';

	import { DifferenceDescriptor, PhotoDifference } from './difference';

	async function loadImage(src: string): Promise<HTMLImageElement> {
		return new Promise((resolve, reject) => {
			const image = new Image();
			image.src = src;
			image.onload = (): void => {
				resolve(image);
			};
		});
	}

	function isWithinCircle(x: number, y: number, circleX: number, circleY: number, radius: number): boolean {
		const distance = Math.sqrt(Math.pow(circleX - x, 2) + Math.pow(circleY - y, 2));
		return distance <= radius;
	}

	function map(number: number, inMin: number, inMax: number, outMin: number, outMax: number): number {
		return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
	}

	export default defineComponent({
		components: {
			Flex,
		},

		props: {
			differenceDescriptor: {
				type: Object as PropType<DifferenceDescriptor>,
				required: true,
			},
		},

		setup(props) {
			const canvasRef = ref<HTMLCanvasElement | null>(null);

			onMounted(async () => {
				if (canvasRef.value === null) return;
				const canvas = canvasRef.value;
				let ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
				if (ctx === null) return;

				const image = await loadImage(props.differenceDescriptor.differentPhotoSrc);
				canvas.width = image.width;
				canvas.height = image.height;

				ctx.drawImage(image, 0, 0, image.width, image.height);

				function showDifference(difference: PhotoDifference): void {
					ctx.beginPath();
					// Draw a circle.
					ctx.arc(difference.x, difference.y, difference.radius, 0, Math.PI * 2, true);

					ctx.lineWidth = 10;
					ctx.strokeStyle = props.differenceDescriptor.strokeStyle;
					ctx.stroke();
				}

				canvas.addEventListener('click', (ev) => {
					const boundingRect = canvas.getBoundingClientRect();

					const x = map(ev.offsetX, 0, boundingRect.width, 0, canvas.width);
					const y = map(ev.offsetY, 0, boundingRect.height, 0, canvas.height);

					for (const difference of props.differenceDescriptor.differences) {
						if (!isWithinCircle(x, y, difference.x, difference.y, difference.radius)) {
							continue;
						}

						showDifference(difference);
					}
				});
			});

			return { canvasRef };
		},
	});
</script>

<style lang="scss" scoped>
</style>