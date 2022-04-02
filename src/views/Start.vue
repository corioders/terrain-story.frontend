<template>
	<IncognitoWarning>
		<slot name="incognitoWarning"></slot>
	</IncognitoWarning>
	<VFlex gap="12px" class="VFlex">
		<p v-if="videoId !== ''" class="info">
			<slot name="info">Zobacz cały film, a następnie zagraj!</slot>
		</p>
		<Video v-if="videoId !== ''" :videoId="videoId" class="video" :endBias="10" @end="videoEnded = true" />
		<InfoButton @click="$router.push('/jak-grac')">
			<slot name="howToPlayButton">Zobacz jak grać</slot>
		</InfoButton>
		<PlayButton :disabled="videoId !== '' ? !videoEnded : false" @click="start()">
			<slot name="playButton"></slot>
			<template #card>
				<slot name="playButtonCard"></slot>
			</template>
		</PlayButton>
		<slot></slot>
	</VFlex>
</template>

<script lang="ts">
import { VFlex } from '@corioders/vueui';
import { defineComponent, ref, PropType } from 'vue';

import IncognitoWarning from '@/components/IncognitoWarning.vue';
import Video from '@/components/YoutubeVideo.vue';
import PlayButton from '@/components/buttons/PlayButton.vue';
import { InfoButton } from '@/theme/Button';

export default defineComponent({
	name: 'Start',
	components: {
		IncognitoWarning,
		Video,
		PlayButton,
		VFlex,
		InfoButton,
	},
	props: {
		start: {
			type: Function as PropType<() => void>,
			required: true,
		},
		videoId: {
			type: String as PropType<string>,
			required: false,
			default: '',
		},
	},
	setup() {
		const videoEnded = ref<boolean>(false);
		return { videoEnded };
	},
});
</script>
<style lang="scss" scoped>
.VFlex {
	width: 100%;
	max-width: 950px;
}

:deep(.info) {
	font-size: 1.1em;
	text-align: center;
	width: 95%;
	max-width: 950px;
}
</style>
