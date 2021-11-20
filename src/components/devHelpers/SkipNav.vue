<template>
	<DefaultButton @click="nextRoute()">Dalej</DefaultButton>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	import { DefaultButton } from '@/theme/Button';

	export default defineComponent({
		name: 'SkipNav',
		components: {
			DefaultButton,
		},
		props: {
			nextRoute: {
				type: Function,
				required: true,
			},
		},
	});
</script>
