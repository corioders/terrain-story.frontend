<template>
	<p>Mag</p>
	<Video url="https://www.youtube.com/embed/4-fOGS_QcZk" />
	<n-space vertical>
		<Difference v-for="(descriptor, i) in descriptors" :key="`differenceMage${i}`" :differenceDescriptor="descriptor" />
	</n-space>
</template>

<script lang="ts">
	import { NSpace } from 'naive-ui';
	import { defineComponent } from 'vue';

	import Video from '@/components/Video.vue';

	import alienDescriptor from '@rock/assets/photoDifferences/alien';
	import safariDescriptor from '@rock/assets/photoDifferences/safari';
	import someoneDescriptor from '@rock/assets/photoDifferences/someone';
	import Difference from '@rock/components/photoDifference/Difference.vue';

	export default defineComponent({
		name: 'Mage',
		components: {
			Difference,
			NSpace,
			Video,
		},
		setup() {
			const descriptors = [alienDescriptor, safariDescriptor, someoneDescriptor];
			return { descriptors };
		},
	});
</script>