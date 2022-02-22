<template>
	<DevNav v-if="!IS_PRODUCTION" :routes="routes" />
	<VFlex class="VFlex">
		<img class="gameLogo" src="@eng/assets/santaLogo.webp" alt="Santa in trouble" role="heading" aria-level="2" />

		<section class="dark">
			<VFlex>
				<h3>Jak grać?</h3>
				<Video class="video" videoId="osnMvAcWdZc" />
			</VFlex>
		</section>
		<section class="light">
			<VFlex>
				<h3>Chcesz wiedzieć więcej?</h3>
				<Video class="video" videoId="U0Zl1PcSvHE" />
			</VFlex>
		</section>
		<section class="dark">
			<VFlex>
				<h5>Twórcy Gry</h5>
				<img class="logo" src="@/assets/whiteLogo.webp" alt="Terrain Story" />
				<p>Nauczyciele angielskiego z VIII LO im. Marii Skłodowskiej-Curie w Katowicach</p>
			</VFlex>
		</section>
		<section class="light">
			<VFlex>
				<h6>Kontakt</h6>
				<p>terrainstory@gmail.com</p>
				<p style="margin-top: 0">
					Wiadomość na <InfoLink href="https://www.instagram.com/terrain.story/" newCard>Instagramie</InfoLink> lub
					<InfoLink href="https://www.facebook.com/terrain.story/" newCard>Facebooku</InfoLink>
				</p>
			</VFlex>
		</section>
	</VFlex>
</template>

<script lang="ts">
import { VFlex } from '@corioders/vueui';
import { routes } from '@eng/router';
import { defineComponent } from 'vue';

import Video from '@/components/YoutubeVideo.vue';
import DevNav from '@/components/devHelpers/DevNav.vue';
import { InfoLink } from '@/theme/Link';

export default defineComponent({
	name: 'Home',
	components: {
		DevNav,
		VFlex,
		Video,
		InfoLink,
	},
	setup() {
		return { routes, IS_PRODUCTION: __IS_PRODUCTION__ };
	},
});
</script>
<style lang="scss" scoped>
.VFlex {
	width: 100%;

	.gameLogo {
		width: 100%;
		max-width: 950px;
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
	background-color: #0f498a;
	color: #fff;
}
</style>
<style lang="scss">
body {
	margin: 0;
}
</style>
