<template>
	<Video videoId="osnMvAcWdZc" :endBias="0" @end="$router.push('/start')" />
	<PrimaryButton @click="$router.push('/start')">
		<template v-if="!isUA"> Wróć do gry </template>
		<template v-else> Поверніться до гри </template>
	</PrimaryButton>
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
