<template>
	<n-popconfirm positive-text="Tak" negative-text="Anuluj" @positive-click="handleClick">
		<template #trigger>
			<n-button size="large" type="info" :disabled="disabled">Zacznij grać od początku</n-button>
		</template>
		Czy na pewno chcesz zacząć grać od początku? Usunie to Twój cały postęp w grze.
	</n-popconfirm>
</template>

<script lang="ts">
	import { NButton, NPopconfirm } from 'naive-ui';
	import { defineComponent } from 'vue';

	import { useProgressStore } from '@rock/store/progress';

	export default defineComponent({
		name: 'ResetProgressButton',
		components: {
			NButton,
			NPopconfirm,
		},
		props: {
			disabled: {
				type: Boolean,
				default: false,
				required: false,
			},
		},
		setup() {
			const store = useProgressStore();

			function handleClick(): void {
				store.resetProgress();
			}

			return { handleClick };
		},
	});
</script>