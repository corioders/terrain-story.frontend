<template>
	<p>Mag</p>
	<Video url="https://www.youtube.com/embed/4-fOGS_QcZk" />
	<Flex>
		<Flex v-for="(photoRow, i) in photos" :key="`princessPhotoRow${i}`" flexDirection="row">
			<img v-for="(photo, j) in photoRow" :key="`princessPhoto${i}${j}`" :src="photo" />
		</Flex>
	</Flex>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	import Flex from '@/layouts/Flex.vue';

	import Video from '@/components/Video.vue';

	export default defineComponent({
		name: 'Mage',
		components: {
			Video,
			Flex,
		},
		setup() {
			const photos = [
				['https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg', 'https://images.pexels.com/photos/3293148/pexels-photo-3293148.jpeg'],
				['https://images.pexels.com/photos/33041/antelope-canyon-lower-canyon-arizona.jpg', 'https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg'],
				['https://images.pexels.com/photos/2113566/pexels-photo-2113566.jpeg', 'https://images.pexels.com/photos/1509582/pexels-photo-1509582.jpeg'],
			];
			return { photos };
		},
	});
</script>

<style lang="scss" scoped>
	img {
		width: 200px;
	}
</style>