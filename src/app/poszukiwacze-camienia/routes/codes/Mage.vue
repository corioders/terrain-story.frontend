<template>
	<p>Mag</p>
	<Video url="https://www.youtube.com/embed/4-fOGS_QcZk" />
	<Flex>
		<Difference v-for="(descriptor, i) in descriptors" :key="`differenceMage${i}`" :differenceDescriptor="descriptor" />
	</Flex>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	import Flex from '@/layouts/Flex.vue';

	import Video from '@/components/Video.vue';

	import alienDescriptor from '@rock/assets/photoDifferences/alien';
	import safariDescriptor from '@rock/assets/photoDifferences/safari';
	import someoneDescriptor from '@rock/assets/photoDifferences/someone';
	import Difference from '@rock/components/photoDifference/Difference.vue';

	export default defineComponent({
		name: 'Mage',
		components: {
			Video,
			Flex,
			Difference,
		},
		setup() {
			const descriptors = [alienDescriptor, safariDescriptor, someoneDescriptor];
			return { descriptors };
		},
	});
</script>

<style lang="scss" scoped>
	img {
		width: 200px;
	}
</style>