<template>
	<VFlex class="VFlex">
		<img src="@rock/assets/rockLogo.webp" alt="Logo gry Poszukiwacze Camienia" role="heading" aria-level="2" />
		<section class="dark">
			<VFlex>
				<h3>Jak grać?</h3>
				<p>
					Znajdź kody QR, zeskanuj je i rozwiąż wszystkie zagadki, aby odnaleźć Camień! Kody znajdują się w tych miejscach. Kolejność ich odwiedzania zależy tylko od
					ciebie. Na wytrwałych czekają nagrody!
				</p>
				<n-button type="primary" style="margin-bottom: 24px" @click="$router.push('/jak-grac')">Dowiedz się jak grać w grę</n-button>
				<div v-if="showReset" style="margin-bottom: 32px">
					<ResetProgressButton />
				</div>
				<MapWrapper />
			</VFlex>
		</section>
		<section class="light">
			<VFlex>
				<h4>Chcesz wiedzieć więcej?</h4>
				<p>Nieodłączną częścią naszej gry są filmiki, tutaj możesz zobaczyć ich urywki.</p>
				<n-button type="info" style="margin-bottom: 24px" @click="$router.push('/o-grze')">Dowiedz się więcej o fabule gry</n-button>
				<Video videoId="AmJaWzUYsow" />
			</VFlex>
		</section>
		<section class="dark">
			<VFlex>
				<h5>Twórcy Gry</h5>
				<img class="logo" src="@/assets/whiteLogo.webp" alt="Terrain Story" />
				<img class="logo" src="@/assets/CAMLogo.webp" alt="CAM" />
			</VFlex>
		</section>
		<section class="light">
			<VFlex>
				<h6>Kontakt</h6>
				<p>terrainstory@gmail.com</p>
				<p style="margin-top: 0">
					Wiadomość na <n-button tag="a" type="info" text href="https://www.instagram.com/terrain.story/" target="_blank" rel="noreferrer">Instagramie</n-button> lub
					<n-button tag="a" type="info" text href="https://www.facebook.com/terrain.story/" target="_blank" rel="noreferrer">Facebooku</n-button>
				</p>
			</VFlex>
		</section>
	</VFlex>

	<DevNav v-if="!IS_PRODUCTION" :routes="routes" />
</template>

<script lang="ts">
	import { NButton } from 'naive-ui';
	import { defineComponent, ref } from 'vue';

	import Video from '@/components/YoutubeVideo.vue';
	import ResetProgressButton from '@/components/buttons/ResetProgressButton.vue';
	import DevNav from '@/components/devHelpers/DevNav.vue';

	import { VFlex } from '@corioders/vueui';
	import MapWrapper from '@rock/components/MapWrapper.vue';
	import { routes } from '@rock/router';
	import { useProgressStore } from '@rock/store/progress';

	export default defineComponent({
		name: 'Home',
		components: {
			VFlex,
			MapWrapper,
			NButton,
			Video,
			ResetProgressButton,
			DevNav,
		},
		setup() {
			const showModal = ref(true);
			const store = useProgressStore();
			return { routes, showModal, showReset: store.ended, IS_PRODUCTION: __IS_PRODUCTION__ };
		},
	});
</script>
<style lang="scss" scoped>
	.VFlex {
		width: 100%;

		img {
			width: 100%;
			max-height: 100%;
			max-width: 950px;
			margin-bottom: 32px;
		}
		section {
			width: 100%;
			padding: 64px 8px;
			text-align: center;
			h3,
			h4,
			h5,
			h6 {
				font-weight: 600;
				font-size: 2em;
				margin-bottom: 0;
			}
			p {
				font-size: 18px;
				max-width: 950px;
				.n-button {
					font-size: 18px;
					text-decoration: underline;
				}
			}

			.logo {
				width: 200px;
				max-height: 150px;
				object-fit: contain;
				margin: 18px 0;
			}
		}
		.dark {
			background-color: $secondaryDarker;
			color: #fff;
		}
	}
</style>