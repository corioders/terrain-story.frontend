<template>
	<n-button :type="incorrectAnswer ? 'error' : 'default'" size="large" @click="$emit('click', $event)">
		{{ incorrectAnswer ? 'Zła odpowiedź, Sprawdź ponownie' : 'Sprawdź' }}
	</n-button>
</template>

<script lang="ts">
	import { NButton } from 'naive-ui';
	import { defineComponent } from 'vue';

	export default defineComponent({
		name: 'CheckButton',
		components: {
			NButton,
		},
		props: {
			incorrectAnswer: {
				type: Boolean,
				required: true,
			},
		},
		emits: ['click'],
	});
</script>
