<template>
	<iframe :src="url" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	export default defineComponent({
		name: 'GMap',
		props: {
			url: {
				type: String,
				default: 'https://maps.google.com/maps?q=Ko%C5%9Bci%C3%B3%C5%82%20Mariacki,%20Katowice&t=&z=15&ie=UTF8&iwloc=&output=embed',
			},
		},
	});
</script>
<style lang="scss" scoped>
	iframe {
		width: 100%;
		height: 70vh;
		max-width: 950px;
		max-height: 700px;
	}
</style>