<template>
	<canvas ref="canvasRef"></canvas>
	<n-space>
		<n-button text size="large" @click="moveRef('top')">
			<n-icon size="36">
				<img src="@rock/assets/arrows/top.svg" alt="strzałka w górę" />
			</n-icon>
		</n-button>
		<n-button text size="large" @click="moveRef('bottom')">
			<n-icon size="36">
				<img src="@rock/assets/arrows/bottom.svg" alt="strzałka w dół" />
			</n-icon>
		</n-button>
		<n-button text size="large" @click="moveRef('left')">
			<n-icon size="36">
				<img src="@rock/assets/arrows/left.svg" alt="strzałka w lewo" />
			</n-icon>
		</n-button>
		<n-button text size="large" @click="moveRef('right')">
			<n-icon size="36">
				<img src="@rock/assets/arrows/right.svg" alt="strzałka w prawo" />
			</n-icon>
		</n-button>
	</n-space>
</template>


<script lang="ts">
	import { NButton, NIcon, NSpace } from 'naive-ui';
	import { defineComponent, onMounted, PropType, ref } from 'vue';

	import { LabyrinthDescriptor, Player, Directions, expandEmpty } from './labyrinth';

	export default defineComponent({
		components: {
			NButton,
			NIcon,
			NSpace,
		},
		props: {
			labyrinthDescriptor: {
				type: Object as PropType<LabyrinthDescriptor>,
				required: true,
			},
		},
		emits: ['correct'],
		setup(props, { emit }) {
			const canvasRef = ref<HTMLCanvasElement | null>(null);
			const moveRef = ref<(direction: Directions) => void>(() => {});

			onMounted(async () => {
				if (canvasRef.value === null) return;
				const canvas = canvasRef.value;
				let ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
				if (ctx === null) return;

				const descriptor = props.labyrinthDescriptor;

				const lineWidth = descriptor.lineWidth;
				const halFlineWidth = lineWidth / 2;

				// Dimensions - how many holes per dimensions.
				const widthD = descriptor.dimensions.width;
				const heightD = descriptor.dimensions.height;

				// The actual pixel width and height of canvas, with additional line width taken into account.
				const width = widthD * descriptor.cellPixels + lineWidth;
				const height = heightD * descriptor.cellPixels + lineWidth;

				canvas.width = width;
				canvas.height = height;

				// Draw grid, add one to widthD and heightD because we want widthD and heightD holes and for that we neeed +1 lines.
				for (let x = 0; x < widthD + 1; x++) {
					const xPixPos = x * descriptor.cellPixels;
					ctx.moveTo(halFlineWidth + xPixPos, 0);
					ctx.lineTo(halFlineWidth + xPixPos, canvas.height);
					ctx.lineWidth = lineWidth;
					ctx.stroke();
				}
				for (let y = 0; y < heightD + 1; y++) {
					const yPixPos = y * descriptor.cellPixels;
					ctx.moveTo(0, halFlineWidth + yPixPos);
					ctx.lineTo(canvas.width, halFlineWidth + yPixPos);
					ctx.lineWidth = lineWidth;
					ctx.stroke();
				}

				// Remove borders to create path.
				function removeBorder(x: number, y: number, side: Directions): void {
					const xPixPos = x * descriptor.cellPixels;
					const yPixPos = y * descriptor.cellPixels;
					switch (side) {
						case 'top':
							ctx.clearRect(xPixPos + descriptor.lineWidth, yPixPos, descriptor.cellPixels - descriptor.lineWidth, descriptor.lineWidth);
							break;
						case 'bottom':
							ctx.clearRect(xPixPos + descriptor.lineWidth, yPixPos + descriptor.cellPixels, descriptor.cellPixels - descriptor.lineWidth, descriptor.lineWidth);
							break;
						case 'left':
							ctx.clearRect(xPixPos, yPixPos + descriptor.lineWidth, descriptor.lineWidth, descriptor.cellPixels - descriptor.lineWidth);
							break;
						case 'right':
							ctx.clearRect(xPixPos + descriptor.cellPixels, yPixPos + descriptor.lineWidth, descriptor.lineWidth, descriptor.cellPixels - descriptor.lineWidth);
							break;
					}
				}

				for (const empty of descriptor.empties) {
					const { x: xRange, y: yRange, side } = expandEmpty(empty);

					for (let xCord = xRange.from; xCord <= xRange.to; xCord++) {
						for (let yCord = yRange.from; yCord <= yRange.to; yCord++) {
							removeBorder(xCord, yCord, side);
						}
					}
				}

				// Create and setup player.
				const player = new Player(descriptor, ctx);
				let move = (direction: Directions): void => {
					player.clear();
					player.move(direction);
					player.draw();

					if (player.isOnEnd()) {
						player.clear();
						// Set to noop.
						move = (): void => {};
						emit('correct');
					}
				};
				moveRef.value = move;
				player.draw();

				if (!__IS_PRODUCTION__) {
					const keyHalder = (ev: KeyboardEvent): void => {
						switch (ev.key) {
							case 'ArrowUp': {
								move('top');
								break;
							}
							case 'ArrowDown': {
								move('bottom');
								break;
							}
							case 'ArrowLeft': {
								move('left');
								break;
							}
							case 'ArrowRight': {
								move('right');
								break;
							}
						}
					};

					document.addEventListener('keydown', keyHalder);
				}
			});

			return { canvasRef, moveRef };
		},
	});
</script>

<style lang="scss" scoped>
	canvas {
		margin-top: 10px;
		width: 95%;
		max-width: 950px;
	}
</style>
