<template>
	<n-button size="large" type="primary" @click="$emit('click')">Zagraj</n-button>
</template>

<script lang="ts">
	import { NButton } from 'naive-ui';
	import { defineComponent } from 'vue';

	export default defineComponent({
		name: 'PlayButton',
		components: {
			NButton,
		},
		emits: ['click'],
	});
</script>
