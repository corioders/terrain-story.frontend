<template>
	<label :for="name">{{ label }}</label>
	<input v-model="input" :name="name" type="text" autocomplete="off" @keydown.enter="$emit('submitInput', input)" />
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	export default defineComponent({
		name: 'Input',
		props: {
			name: {
				type: String,
				required: true,
			},
			label: {
				type: String,
				required: true,
			},
			event: {
				type: String,
				required: true,
			},
		},
		emits: ['submitInput'],
		setup() {
			let input = '';
			return { input };
		},
	});
</script>
<style lang="scss" scoped>
</style>
