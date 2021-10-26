<template>
	<n-button size="large" @click="$emit('click', $event)">Sprawdź</n-button>
</template>

<script lang="ts">
	import { NButton } from 'naive-ui';
	import { defineComponent } from 'vue';

	export default defineComponent({
		name: 'CheckButton',
		components: {
			NButton,
		},
		emits: ['click'],
	});
</script>
