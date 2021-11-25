<template>
	<PrimaryButton :disabled="disabled" @use-disabled-click="$emit('click')">Zagraj</PrimaryButton>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	import { PrimaryButton } from '@/theme/Button';

	export default defineComponent({
		name: 'PlayButton',
		components: {
			PrimaryButton,
		},
		props: {
			disabled: {
				type: Boolean,
				default: false,
				required: false,
			},
		},
		emits: ['click'],
	});
</script>
