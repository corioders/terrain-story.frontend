<template>
	<n-popconfirm positive-text="Tak" negative-text="Anuluj" @positive-click="handleClick">
		<template #trigger>
			<n-button size="large" type="info">Zacznij grać od początku</n-button>
		</template>
		Czy na pewno chcesz zacząć grać od początku? Usunie to Twój cały postęp w grze.
	</n-popconfirm>
</template>

<script lang="ts">
	import { NButton, NPopconfirm } from 'naive-ui';
	import { defineComponent } from 'vue';
	import { useRouter } from 'vue-router';

	import { removeLocalStorage } from '@/store/plugin/localStorage';

	import { useProgressStore } from '@rock/store/progress';

	export default defineComponent({
		name: 'ResetProgressButton',
		components: {
			NButton,
			NPopconfirm,
		},
		setup() {
			const store = useProgressStore();
			const router = useRouter();

			function handleClick(): void {
				removeLocalStorage(store);
				router.replace({ name: 'Home' });
			}

			return { handleClick };
		},
	});
</script>