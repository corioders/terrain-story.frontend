<template>
	<VFlex class="VFlex">
		<div v-once>
			<img v-if="window.width.value * 1.5 >= window.height.value" class="gameLogo" :src="gameLogoSrc" :alt="gameName" role="heading" aria-level="2" />
			<img v-else class="gameLogo" :src="gameLogoHorizontalSrc" :alt="gameName" role="heading" aria-level="2" />
		</div>
		<section class="dark">
			<VFlex>
				<h3>
					<slot name="howToPlay"> Jak grać? </slot>
				</h3>
				<Video class="video" videoId="osnMvAcWdZc" />
			</VFlex>
		</section>
		<section class="light">
			<VFlex>
				<h3>
					<slot name="knowMore"> Chcesz wiedzieć więcej? </slot>
				</h3>
				<Video class="video" :videoId="knowMoreVideoId" />
			</VFlex>
		</section>
		<section class="dark">
			<VFlex>
				<h5 style="margin-bottom: 24px">
					<slot name="ourGames"> Tu znajdziesz nasze gry </slot>
				</h5>
				<LocationMapAllWrapper />
			</VFlex>
		</section>
		<section class="light">
			<VFlex>
				<h6 style="margin: 0"><slot name="contact"> Kontakt </slot></h6>
				<p style="margin-bottom: 0">terrainstory@gmail.com</p>
				<p style="margin-top: 0">
					<slot name="messageOn"> Wiadomość na</slot>
					<InfoLink href="https://www.instagram.com/terrain.story/" newCard>
						<slot name="messageOnInstagram"> Instagramie </slot>
					</InfoLink>
					<slot name="messageOr">lub</slot>
					<InfoLink href="https://www.facebook.com/terrain.story/" newCard>
						<slot name="messageOnFacebook"> Facebooku</slot>
					</InfoLink>
				</p>
			</VFlex>
		</section>
		<section class="dark">
			<VFlex>
				<h5>
					<slot name="gameCreatorsText">Twórcy Gry</slot>
				</h5>
				<img v-if="isTextLightTheme" class="logo" src="@/assets/whiteLogo.webp" alt="Terrain Story" />
				<img v-else class="logo" src="@/assets/blackLogo.webp" alt="Terrain Story" />
				<slot name="gameCreators" />
			</VFlex>
		</section>
		<section class="light">
			<VFlex>
				<slot name="patrons">Honorowe Patronaty</slot>
				<img src="@/assets/patronage/silesia.webp" alt="Marszałek Województwa Śląskiego" class="logoVertical" />
				<img src="@/assets/patronage/katowice.webp" alt="Prezydent Miasta Katowice" class="logoVertical" />
				<slot name="mediaPatrons">Patroni medialni</slot>
				<img class="logo logoLink" src="@/assets/patrons/portalKatowice.webp" alt="Portal Katowice" @click="location.href = 'http://www.portal.katowice.pl'" />
			</VFlex>
		</section>
	</VFlex>
</template>

<script lang="ts">
import { VFlex } from '@corioders/vueui';
import { useWindowSize } from '@vueuse/core';
import { defineComponent } from 'vue';

import LocationMapAllWrapper from '@/components/LocationMapAllWrapper.vue';
import Video from '@/components/YoutubeVideo.vue';
import { InfoLink } from '@/theme/Link';

export default defineComponent({
	name: 'Home',
	components: {
		VFlex,
		Video,
		LocationMapAllWrapper,
		InfoLink,
	},
	props: {
		gameName: {
			required: true,
			type: String,
		},
		gameLogoSrc: {
			required: true,
			type: String,
		},
		gameLogoHorizontalSrc: {
			required: true,
			type: String,
		},
		knowMoreVideoId: {
			required: true,
			type: String,
		},
		lightSectionColor: {
			required: true,
			type: String,
		},
		isTextLightTheme: {
			required: true,
			type: Boolean,
		},
	},
	setup(props) {
		const darkSectionColor = props.isTextLightTheme ? '#fff' : '#000';
		return { window: useWindowSize(), darkSectionColor };
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
	background-color: v-bind('lightSectionColor');
	color: v-bind('darkSectionColor');
}

.logoLink {
	cursor: pointer;
}
</style>
