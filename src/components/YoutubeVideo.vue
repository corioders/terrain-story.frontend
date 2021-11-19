<template>
	<div class="container">
		<div class="inner">
			<div ref="divRef"></div>
		</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent, onMounted, ref } from 'vue';

	interface CWindow extends Window {
		ytAPILoaded: null | Promise<void> | undefined;
		onYouTubeIframeAPIReady: () => void;
	}
	declare const window: CWindow;

	export default defineComponent({
		name: 'Video',
		props: {
			videoId: {
				type: String,
				required: true,
			},
			// In seconds.
			endBias: {
				type: Number,
				required: false,
				default: 0,
			},
		},
		emits: ['end'],
		setup(props, { emit }) {
			// Load youtube iframe api.
			if (window.ytAPILoaded === undefined) {
				const ytAPI = window.document.createElement('script');
				ytAPI.src = 'https://www.youtube.com/iframe_api';
				ytAPI.async = true;
				window.document.body.appendChild(ytAPI);

				window.ytAPILoaded = new Promise((resolve) => {
					// This function is called by YouTubeApi when it's ready.
					window.onYouTubeIframeAPIReady = resolve;
					window.ytAPILoaded = null;
				});
			}

			let ended = false;
			function end(): void {
				if (ended === true) return;
				emit('end');
				ended = true;
			}

			function checkBias(duration: number, currentTime: number): void {
				if (duration - currentTime <= props.endBias) end();
			}

			const divRef = ref<HTMLDivElement | null>(null);
			const scopeId = ref<string | null>(null);

			onMounted(async function () {
				if (divRef.value === null) return;
				if (scopeId.value === null) return;

				await window.ytAPILoaded;
				const player = new YT.Player(divRef.value, { videoId: props.videoId });
				const iframe = player.getIframe();

				// Add scopedId.
				iframe.setAttribute(scopeId.value, '');

				let playerHackDone = false;
				player.addEventListener('onStateChange', (event: YT.OnStateChangeEvent) => {
					switch (event.data) {
						case YT.PlayerState.PLAYING: {
							if (props.endBias === 0) break;
							if (playerHackDone === true) break;
							playerHackDone = true;

							const playerHack = player as unknown as { playerInfo: { currentTime: number } };
							const playerInfo = {
								...playerHack.playerInfo,
								_currentTime: 0,
								set currentTime(value: number) {
									this._currentTime = value;
									checkBias(player.getDuration(), this._currentTime);
								},
								get currentTime(): number {
									return this._currentTime;
								},
							};

							playerHack.playerInfo = playerInfo;
							break;
						}

						case YT.PlayerState.ENDED: {
							end();
							break;
						}
					}
				});
			});

			return { divRef, scopeId };
		},
		beforeCreate() {
			// Get scoped id, there is no normal way to do this in composition API.
			this.scopeId = this.$options.__scopeId as string;
		},
	});
</script>
<style lang="scss" scoped>
	.container {
		width: 95%;
		max-width: 950px;
		.inner {
			width: 100%;
			position: relative;
			padding-bottom: 56.25%;
			iframe {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
