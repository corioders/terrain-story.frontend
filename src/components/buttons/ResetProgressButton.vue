<template>
	<n-button size="large" type="info" @click="handleClick">Usuń mój postęp</n-button>
</template>

<script lang="ts">
	import { NButton } from 'naive-ui';
	import { defineComponent } from 'vue';

	import { removeLocalStorage } from '@/store/plugin/localStorage';

	import { useProgressStore } from '@rock/store/progress';

	export default defineComponent({
		name: 'ResetProgressButton',
		components: {
			NButton,
		},
		setup() {
			const store = useProgressStore();

			function handleClick(): void {
				removeLocalStorage(store);
			}

			return { handleClick };
		},
	});
</script>