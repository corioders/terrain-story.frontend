<template>
	<DevNav v-if="!IS_PRODUCTION" :routes="routes" />
	<VFlex class="VFlex">
		<div v-once>
			<img
				v-if="window.width.value * 1.5 >= window.height.value"
				class="gameLogo"
				src="@help/assets/helpLogo.webp"
				alt="Pomóż Abelardowi"
				role="heading"
				aria-level="2"
			/>
			<img v-else class="gameLogo" src="@help/assets/helpLogoHorizontal.webp" alt="Pomóż Abelardowi" role="heading" aria-level="2" />
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
				<h6>Patroni medialni</h6>
				<img class="logo" src="@/assets/patrons/portalKatowice.webp" alt="Portal Katowice" />
			</VFlex>
		</section>
	</VFlex>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	import Video from '@/components/YoutubeVideo.vue';
	import DevNav from '@/components/devHelpers/DevNav.vue';

	import { VFlex } from '@corioders/vueui';
	import { routes } from '@help/router';
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
		background-color: #406258;
		color: #fff;
	}
</style>
<style lang="scss">
	body {
		margin: 0;
	}
</style>
