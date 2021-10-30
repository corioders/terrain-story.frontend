<template>
	<div class="container">
		<canvas ref="canvasRef" class="image" role="img" :aria-label="differenceDescriptor.photoAlt"></canvas>
		<img :src="differenceDescriptor.originalPhotoSrc" class="image" :alt="differenceDescriptor.photoAlt" />
	</div>
</template>

<script lang="ts">
	import { defineComponent, onMounted, PropType, ref } from 'vue';

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
		props: {
			differenceDescriptor: {
				type: Object as PropType<DifferenceDescriptor>,
				required: true,
			},
		},
		emits: ['correct'],
		setup(props, { emit }) {
			const canvasRef = ref<HTMLCanvasElement | null>(null);

			onMounted(async () => {
				if (canvasRef.value === null) return;
				const canvas = canvasRef.value;
				let ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
				if (ctx === null) return;

				const descriptor = props.differenceDescriptor;

				const image = await loadImage(descriptor.differentPhotoSrc);
				canvas.width = image.width;
				canvas.height = image.height;

				ctx.drawImage(image, 0, 0, image.width, image.height);

				function showDifference(difference: PhotoDifference): void {
					ctx.beginPath();
					// Draw a circle.
					ctx.arc(difference.x, difference.y, difference.radius, 0, Math.PI * 2, true);

					ctx.lineWidth = 10;
					ctx.strokeStyle = descriptor.strokeStyle;
					ctx.stroke();
				}

				let doneDifferences = 0;
				const differences = [...descriptor.differences];
				canvas.addEventListener('click', (ev) => {
					const boundingRect = canvas.getBoundingClientRect();

					const x = map(ev.offsetX, 0, boundingRect.width, 0, canvas.width);
					const y = map(ev.offsetY, 0, boundingRect.height, 0, canvas.height);

					for (let i = 0; i < differences.length; i++) {
						const difference = differences[i];
						if (!isWithinCircle(x, y, difference.x, difference.y, difference.radius + 10)) {
							continue;
						}

						differences.splice(i, 1);
						if (differences.length === 0) emit('correct');

						showDifference(difference);
					}
				});

				// for (const d of descriptor.differences) {
				// 	showDifference(d);
				// }
			});

			return { canvasRef };
		},
	});
</script>

<style lang="scss" scoped>
	.container {
		margin: 16px 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 8px;
		width: 100%;
		max-width: 950px;
		canvas,
		img {
			width: 95%;
			max-height: 48vh;
			object-fit: contain;
		}
	}
</style>