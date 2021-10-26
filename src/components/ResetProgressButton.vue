<template>
	<n-button size="large" type="info" @click="handleClick">Usuń mój postęp</n-button>
</template>

<script lang="ts">
	import { NButton } from 'naive-ui';
	import { defineComponent } from 'vue';

	export default defineComponent({
		name: 'ResetProgressButton',
		components: {
			NButton,
		},
		setup() {
			function handleClick(): void {
				console.log('Reset progress');
			}
			return { handleClick };
		},
	});
</script>