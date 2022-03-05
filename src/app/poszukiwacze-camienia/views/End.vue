<template>
	<Video videoId="PIJysna39aM" />
	<p>Dziękujemy za przejście gry! Zapraszamy po odbiór nagrody do Centrum Aktywności Młodzieżowej - znajdź skrytkę i wprowadź kod <span>31140</span></p>
	<GMap
		url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5101.912886134328!2d19.011423987882665!3d50.25539779028273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716ce37fbdbaac3%3A0x784bfa3f8e97160e!2sCenter%20NGO%20-%20COP%20Katowice!5e0!3m2!1sen!2spl!4v1636800187485!5m2!1sen!2spl"
		style="margin: 0"
	/>
	<ResetProgressButton :progressStore="progressStore" />
</template>

<script lang="ts">
import { useProgressStore } from '@rock/store/progress';
import { defineComponent } from 'vue';

import Video from '@/components/YoutubeVideo.vue';
import ResetProgressButton from '@/components/buttons/ResetProgressButton.vue';
import GMap from '@/components/map/GMap.vue';

export default defineComponent({
	name: 'End',
	components: {
		GMap,
		ResetProgressButton,
		Video,
	},
	setup() {
		const store = useProgressStore();
		return { progressStore: store };
	},
});
</script>
<style lang="scss" scoped>
@use '@scssGlobals/colors';

p {
	padding: 0 12px;
	font-size: 1.2em;
	span {
		color: colors.$secondary;
	}
}
</style>
