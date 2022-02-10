<template>
	<DevNav v-if="!IS_PRODUCTION" :routes="routes" />
	<VFlex class="VFlex">
		<div v-once>
			<img v-if="window.width.value * 1.5 >= window.height.value" class="gameLogo" src="@recap/assets/recapLogo.webp" alt="Wygraj Maturę" role="heading" aria-level="2" />
			<img v-else class="gameLogo" src="@recap/assets/recapLogoHorizontal.webp" alt="Wygraj Maturę" role="heading" aria-level="2" />
		</div>
		<section class="dark">
			<VFlex>
				<h3>Jak grać?</h3>
				<Video class="video" videoId="CkPtuFFHjII" />
			</VFlex>
		</section>
		<section class="light">
			<VFlex>
				<h3>Chcesz wiedzieć więcej?</h3>
				<Video class="video" videoId="VeFpHN3-K2g" />
			</VFlex>
		</section>
		<section class="dark">
			<VFlex>
				<h5>Twórcy Gry</h5>
				<img class="logo" src="@/assets/blackLogo.webp" alt="Terrain Story" />
				<p>Nauczyciele z VIII LO im. Marii Skłodowskiej-Curie w Katowicach</p>
			</VFlex>
		</section>
		<section class="light">
			<VFlex>
				<h6>Patroni medialni</h6>
				<img class="logo" src="@/assets/patrons/portalKatowice.webp" alt="Portal Katowice" />
			</VFlex>
		</section>
		<section class="dark">
			<VFlex>
				<h6 style="margin: 0">Kontakt</h6>
				<p style="margin-bottom: 0">terrainstory@gmail.com</p>
			</VFlex>
		</section>
	</VFlex>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	import Video from '@/components/YoutubeVideo.vue';
	import DevNav from '@/components/devHelpers/DevNav.vue';

	import { VFlex } from '@corioders/vueui';
	import { routes } from '@recap/router';
	import { useWindowSize } from '@vueuse/core';

	export default defineComponent({
		name: 'Home',
		components: {
			DevNav,
			VFlex,
			Video,
		},
		setup() {
			return { routes, IS_PRODUCTION: __IS_PRODUCTION__, window: useWindowSize() };
		},
	});
</script>
<style lang="scss" scoped>
	.VFlex {
		width: 100%;
		.gameLogo {
			width: 100%;
			max-width: 1500px;
			margin-bottom: 64px;
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
			}

			.logo {
				width: 200px;
				max-height: 150px;
				object-fit: contain;
				margin: 18px 0;
			}
			.video {
				margin-top: 24px;
			}
		}
	}
	.dark {
		background-color: #fedd76;
	}
</style>
<style lang="scss">
	body {
		margin: 0;
	}
</style>
