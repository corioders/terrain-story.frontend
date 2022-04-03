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
		<section v-if="knowMoreVideoId !== ''" class="light">
			<VFlex>
				<h3>
					<slot name="knowMore"> Chcesz wiedzieć więcej? </slot>
				</h3>
				<Video class="video" :videoId="knowMoreVideoId" />
			</VFlex>
		</section>
		<section :class="knowMoreVideoId !== '' ? 'dark' : 'light'">
			<VFlex>
				<h5 style="margin-bottom: 24px">
					<slot name="ourGames"> Tu znajdziesz nasze gry </slot>
				</h5>
				<LocationMapAllWrapper />
			</VFlex>
		</section>
		<VFlex v-if="knowMoreVideoId !== ''" class="VFlex">
			<section class="light">
				<ContactSectionContent>
					<template #contact>
						<slot name="contact"></slot>
					</template>
					<template #messageOn>
						<slot name="messageOn"></slot>
					</template>
					<template #messageOnInstagram>
						<slot name="messageOnInstagram"></slot>
					</template>
					<template #messageOr>
						<slot name="messageOr"></slot>
					</template>
					<template #messageOnFacebook>
						<slot name="messageOnFacebook"></slot>
					</template>
				</ContactSectionContent>
			</section>
			<section class="dark">
				<CreatorsSectionContent :isTextLightOnDarkBg="isTextLightOnDarkBg">
					<template #gameCreatorsText>
						<slot name="gameCreatorsText"></slot>
					</template>
					<template #gameCreators>
						<slot name="gameCreators"></slot>
					</template>
				</CreatorsSectionContent>
			</section>
		</VFlex>

		<VFlex v-else class="VFlex">
			<section class="dark">
				<CreatorsSectionContent :isTextLightOnDarkBg="isTextLightOnDarkBg">
					<template #gameCreatorsText>
						<slot name="gameCreatorsText"></slot>
					</template>
					<template #gameCreators>
						<slot name="gameCreators"></slot>
					</template>
				</CreatorsSectionContent>
			</section>
			<section class="light">
				<ContactSectionContent>
					<template #contact>
						<slot name="contact"></slot>
					</template>
					<template #messageOn>
						<slot name="messageOn"></slot>
					</template>
					<template #messageOnInstagram>
						<slot name="messageOnInstagram"></slot>
					</template>
					<template #messageOr>
						<slot name="messageOr"></slot>
					</template>
					<template #messageOnFacebook>
						<slot name="messageOnFacebook"></slot>
					</template>
				</ContactSectionContent>
			</section>
		</VFlex>

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

import ContactSectionContent from './ContactSectionContent.vue';
import CreatorsSectionContent from './CreatorsSectionContent.vue';

export default defineComponent({
	name: 'Home',
	components: {
		VFlex,
		Video,
		LocationMapAllWrapper,
		ContactSectionContent,
		CreatorsSectionContent,
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
			required: false,
			type: String,
			default: '',
		},
		darkSectionColor: {
			required: true,
			type: String,
		},
		isTextLightOnDarkBg: {
			required: true,
			type: Boolean,
		},
	},
	setup(props) {
		const darkSectionTextColor = props.isTextLightOnDarkBg ? '#fff' : '#000';
		return { window: useWindowSize(), darkSectionTextColor };
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

		:deep(h3),
		:deep(h4),
		:deep(h5),
		:deep(h6) {
			font-weight: 600;
			font-size: 2em;
			margin-bottom: 0;
		}

		:deep(p) {
			font-size: 18px;
			max-width: 950px;
		}

		:deep(.logo),
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
	background-color: v-bind('darkSectionColor');
	color: v-bind('darkSectionTextColor');
}

.logoLink {
	cursor: pointer;
}
</style>
