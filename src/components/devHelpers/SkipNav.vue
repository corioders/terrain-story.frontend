<template>
	<button @click="nextRoute()">Dalej</button>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	export default defineComponent({
		name: 'SkipNav',
		props: {
			nextRoute: {
				type: Function,
				required: true,
			},
		},
	});
</script>
