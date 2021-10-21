<template>
	<iframe
		width="600"
		height="500"
		style="margin-top: 24px"
		src="https://maps.google.com/maps?q=Ko%C5%9Bci%C3%B3%C5%82%20Mariacki,%20Katowice&t=&z=15&ie=UTF8&iwloc=&output=embed"
		frameborder="0"
		scrolling="no"
		marginheight="0"
		marginwidth="0"
	></iframe>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	export default defineComponent({
		name: 'GMap',
		setup() {
			return {};
		},
	});
</script>
