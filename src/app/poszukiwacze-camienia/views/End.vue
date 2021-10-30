<template>
	<Video url="https://www.youtube.com/embed/PIJysna39aM" />
	<p>Dziękujemy za przejście gry! Zapraszamy po odbiór nagrody - znajdź skrytkę i wprowadź kod <span>31140</span></p>
	<GMap
		url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2550.9310696014113!2d19.012753216455202!3d50.25587167944901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716ce465cc22f79%3A0x96127f5f56c08640!2splac%20Andrzeja%2C%2040-061%20Katowice!5e0!3m2!1sen!2spl!4v1635515719926!5m2!1sen!2spl"
		style="margin: 0"
	/>
	<ResetProgressButton />
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	import Video from '@/components/Video.vue';
	import ResetProgressButton from '@/components/buttons/ResetProgressButton.vue';
	import GMap from '@/components/map/GMap.vue';

	export default defineComponent({
		name: 'End',
		components: {
			GMap,
			ResetProgressButton,
			Video,
		},
	});
</script>
<style lang="scss" scoped>
	p {
		padding: 0 12px;
		font-size: 1.2em;
		span {
			color: $secondary;
		}
	}
</style>
