<template>
	<Flex alignItems="flex-start">
		<n-input :id="name" type="text" :placeholder="label" @change="$emit('answer', $event)" @input="$emit('answer', $event)" />
	</Flex>
</template>

<script lang="ts">
	import { NInput } from 'naive-ui';
	import { defineComponent } from 'vue';

	import Flex from '@/layouts/Flex.vue';

	export default defineComponent({
		name: 'Input',
		components: {
			Flex,
			NInput,
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
		emits: ['answer'],
	});
</script>
<style lang="scss" scoped>
</style>
