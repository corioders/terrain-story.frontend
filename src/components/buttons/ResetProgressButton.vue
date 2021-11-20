<template>
	<n-popconfirm positive-text="Tak" negative-text="Anuluj" @positive-click="handleClick">
		<template #trigger>
			<InfoButton>Zacznij grać od początku</InfoButton>
		</template>
		Czy na pewno chcesz zacząć grać od początku? Usunie to Twój cały postęp w grze.
	</n-popconfirm>
</template>

<script lang="ts">
	import { NPopconfirm } from 'naive-ui';
	import { defineComponent } from 'vue';

	import { InfoButton } from '@/theme/Button';
	import { useProgressStore } from '@rock/store/progress';

	export default defineComponent({
		name: 'ResetProgressButton',
		components: {
			InfoButton,
			NPopconfirm,
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