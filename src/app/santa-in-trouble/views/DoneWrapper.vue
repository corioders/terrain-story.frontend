<template>
	<Done replacePath="/">
		<h2>Well done, you've solved this mystery</h2>
		<h3>Moving to the home page</h3>
	</Done>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	import Done from '@/views/Done.vue';

	export default defineComponent({
		components: {
			Done,
		},
	});
</script>
