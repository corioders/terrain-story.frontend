<template>
	<n-button size="large" @click="nextRoute()">Dalej</n-button>
</template>

<script lang="ts">
	import { NButton } from 'naive-ui';
	import { defineComponent } from 'vue';

	export default defineComponent({
		name: 'SkipNav',
		components: {
			NButton,
		},
		props: {
			nextRoute: {
				type: Function,
				required: true,
			},
		},
	});
</script>
