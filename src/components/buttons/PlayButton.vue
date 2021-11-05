<template>
	<n-button size="large" type="primary" :disabled="disabled" @click="$emit('click')">Zagraj</n-button>
</template>

<script lang="ts">
	import { NButton } from 'naive-ui';
	import { defineComponent } from 'vue';

	export default defineComponent({
		name: 'PlayButton',
		components: {
			NButton,
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
