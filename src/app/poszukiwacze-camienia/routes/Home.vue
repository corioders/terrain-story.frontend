<template>
	<Flex>
		<img src="@rock/assets/rockLogo.png" alt="Logo gry Poszukiwacze Camienia" role="heading" aria-level="2" />
		<section class="dark">
			<Flex>
				<h3>Jak grać?</h3>
				<p>
					Znajdź kody QR, zeskanuj je i rozwiąż wszystkie zagadki, aby odnaleźć Camień! Kody znajdują się w tych miejscach. Kolejność ich odwiedzania zależy tylko od
					ciebie. Na wytrwałych czekają nagrody!
				</p>
				<GMap url="https://www.google.com/maps/d/u/2/embed?mid=18uPKlUIeYkk0al-D2q9NAfdxmL2rZISO" style="margin-top: 32px" />
			</Flex>
		</section>
		<section class="light">
			<Flex>
				<h4>Chcesz wiedzieć więcej?</h4>
				<p>Nieodłączną częścią naszej gry są filmiki, tutaj możesz zobaczyć ich urywki.</p>
				<Video url="https://www.youtube.com/embed/AmJaWzUYsow" />
			</Flex>
		</section>
		<section class="dark">
			<Flex>
				<h5>Twórcy Gry</h5>
				<img class="logo" src="@/assets/whiteLogo.png" alt="Terrain Story" />
				<img class="logo" src="@/assets/CAMLogo.png" alt="CAM" />
			</Flex>
		</section>
		<section class="light">
			<Flex>
				<h6>Kontakt</h6>
				<p>terrainstory@gmail.com</p>
				<p style="margin-top: 0">
					Wiadomość na <n-button tag="a" type="info" text href="https://www.instagram.com/terrain.story/" target="_blank" rel="noreferrer">Instagramie</n-button> lub
					<n-button tag="a" type="info" text href="https://www.facebook.com/terrain.story/" target="_blank" rel="noreferrer">Facebooku</n-button>
				</p>
			</Flex>
		</section>
	</Flex>

	<n-modal v-model:show="showModal">
		<n-card :bordered="false" size="huge">
			<h6>Premiera gry Poszukiwacze Camienia</h6>
			<p>Zapraszamy do gry od <span class="date">05.11.2021</span></p>
			<template #footer>
				<Flex justifyContent="center" flexDirection="row">
					<n-button type="info" @click="showModal = false">OK</n-button>
				</Flex>
			</template>
		</n-card>
	</n-modal>

	<DevNav v-if="!IS_PRODUCTION" :routes="routes" />
</template>

<script lang="ts">
	import { NButton, NCard, NModal } from 'naive-ui';
	import { defineComponent, ref } from 'vue';

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
			NCard,
			NModal,
			Video,
			DevNav,
		},
		setup() {
			const showModal = ref(true);
			return { routes, showModal, IS_PRODUCTION: __IS_PRODUCTION__ };
		},
	});
</script>
<style lang="scss" scoped>
	.flex {
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

	.n-modal {
		width: 95%;
		max-width: 600px;
		h6 {
			font-size: 1.35em;
			margin-bottom: 1em;
		}
		p {
			margin: 0;
			font-size: 1.1em;
		}
		.date {
			color: $secondary;
		}
	}
</style>