<template>
	<FlexRow>
		<label :for="name">{{ label }}</label>
		<input :id="name" v-model="input" type="text" autocomplete="off" @keydown.enter="$emit('submitInput', input)" />
	</FlexRow>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	import FlexRow from '@/layouts/FlexRow.vue';

	export default defineComponent({
		name: 'Input',
		components: {
			FlexRow,
		},
		props: {
			name: {
				type: String,
				required: true,
			},
			label: {
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
