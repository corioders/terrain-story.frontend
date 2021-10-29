<template>
	<Flex>
		<img src="@rock/assets/rockLogo.png" alt="Logo gry Poszukiwacze Camienia" />
		<section class="dark">
			<Flex>
				<p class="head">Jak grać?</p>
				<p>
					Znajdź kody QR, zeskanuj je i rozwiąż wszystkie zagadki, aby odnaleźć Camień! Kody znajdują się w tych miejscach. Kolejność ich odwiedzania zależy tylko od
					ciebie. Na wytrwałych czekają nagrody!
				</p>
				<GMap style="margin-top: 32px" />
			</Flex>
		</section>
		<section class="light">
			<Flex>
				<p class="head">Chcesz wiedzieć więcej?</p>
				<p>Nieodłączną częścią naszej gry są filmiki, tutaj możesz zobaczyć ich urywki</p>
				<Video url="https://www.youtube.com/embed/AmJaWzUYsow" />
			</Flex>
		</section>
		<section class="dark">
			<Flex>
				<p class="head">Twórcy Gry</p>
				<img class="logo" src="@/assets/logo.png" alt="Terrain Story" />
				<img class="logo" src="@/assets/CAMLogo.png" alt="CAM" />
			</Flex>
		</section>
		<section class="light">
			<Flex>
				<p class="head">Kontakt</p>
				<p>terrainstory@gmail.com</p>
				<p style="margin-top: 0">
					Wiadomość na <n-button tag="a" type="info" text href="https://www.instagram.com/terrain.story/" target="_blank">Instagramie</n-button> lub
					<n-button tag="a" type="info" text href="https://www.facebook.com/terrain.story/" target="_blank">Facebooku</n-button>
				</p>
			</Flex>
		</section>
	</Flex>
	<DevNav v-if="!IS_PRODUCTION" :routes="routes" />
</template>

<script lang="ts">
	import { NButton } from 'naive-ui';
	import { defineComponent } from 'vue';

	import Flex from '@/layouts/Flex.vue';

	import Video from '@/components/Video.vue';
	import DevNav from '@/components/devHelpers/DevNav.vue';
	import GMap from '@/components/map/GMap.vue';

	import { routes } from '@rock/router';

	export default defineComponent({
		name: 'Home',
		components: {
			Flex,
			GMap,
			NButton,
			Video,
			DevNav,
		},
		setup() {
			return { routes, IS_PRODUCTION: __IS_PRODUCTION__ };
		},
	});
</script>
<style lang="scss" scoped>
	.flex {
		img {
			width: 100%;
			max-height: 100%;
			max-width: 950px;
		}
		section {
			width: 100%;
			padding: 64px 8px;
			text-align: center;
			.head {
				font-size: 2em;
				margin-bottom: 0;
			}
			p {
				font-size: 18px;
				max-width: 950px;
				.n-button {
					font-size: 18px;
				}
			}

			.logo {
				width: 200px;
				max-height: 150px;
				object-fit: contain;
				margin: 8px 0;
			}
		}
		.dark {
			background-color: $secondaryDarker;
			color: #fff;
		}
	}
</style>