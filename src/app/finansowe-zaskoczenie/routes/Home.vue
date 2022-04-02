<template>
	<DevNav v-if="!IS_PRODUCTION" :routes="routes" />
	<VFlex class="VFlex">
		<div v-once>
			<img
				v-if="window.width.value * 1.5 >= window.height.value"
				class="gameLogo"
				src="@fin/assets/ecoLogo.webp"
				alt="Finansowe Zaskoczenie"
				role="heading"
				aria-level="2"
			/>
			<img v-else class="gameLogo" src="@fin/assets/ecoLogoHorizontal.webp" alt="Finansowe Zaskoczenie" role="heading" aria-level="2" />
		</div>
		<section class="dark">
			<VFlex>
				<h3>Jak grać?</h3>
				<Video class="video" videoId="osnMvAcWdZc" />
			</VFlex>
		</section>
		<section class="light">
			<VFlex>
				<h3>Chcesz wiedzieć więcej?</h3>
				<Video class="video" videoId="yLmjRKen2UE" />
			</VFlex>
		</section>
		<section class="dark">
			<VFlex>
				<h5>Twórcy Gry</h5>
				<img class="logo" src="@/assets/whiteLogo.webp" alt="Terrain Story" />
				<p>Psycholog Łucja Chwastek</p>
			</VFlex>
		</section>
		<section class="light">
			<VFlex>
				<h6>Honorowe Patronaty</h6>
				<img src="@/assets/patronage/silesia.webp" alt="Marszałek Województwa Śląskiego" class="logoVertical" />
				<img src="@/assets/patronage/katowice.webp" alt="Prezydent Miasta Katowice" class="logoVertical" />
				<h6>Patroni medialni</h6>
				<img class="logo logoLink" src="@/assets/patrons/portalKatowice.webp" alt="Portal Katowice" @click="redirect" />
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
import { VFlex } from '@corioders/vueui';
import { routes } from '@fin/router';
import { useWindowSize } from '@vueuse/core';
import { defineComponent } from 'vue';

import Video from '@/components/YoutubeVideo.vue';
import DevNav from '@/components/devHelpers/DevNav.vue';

export default defineComponent({
	name: 'Home',
	components: {
		DevNav,
		VFlex,
		Video,
	},
	setup() {
		function redirect(): void {
			location.href = 'http://www.portal.katowice.pl';
		}
		return { routes, IS_PRODUCTION: __IS_PRODUCTION__, window: useWindowSize(), redirect };
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

		.logo,
		%logo {
			width: 200px;
			max-height: 150px;
			object-fit: contain;
			margin: 18px 0;
		}

		.logoVertical {
			@extend %logo;

			width: 100vw;
			max-height: 200px;

			@media (min-width: 500px) {
				width: 500px;
			}
		}

		.video {
			margin-top: 24px;
		}
	}
}

.dark {
	background-color: #406258;
	color: #fff;
}

.logoLink {
	cursor: pointer;
}
</style>
<style lang="scss">
body {
	margin: 0;
}
</style>
