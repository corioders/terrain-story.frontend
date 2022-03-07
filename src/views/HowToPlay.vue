<template>
	<Video videoId="osnMvAcWdZc" :endBias="0" @end="$router.push('/start')" />
	<PrimaryButton @click="$router.push('/start')">Wróć do gry</PrimaryButton>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Video from '@/components/YoutubeVideo.vue';
import { PrimaryButton } from '@/theme/Button';

export default defineComponent({
	name: 'HowToPlay',
	components: {
		Video,
		PrimaryButton,
	},
});
</script>
