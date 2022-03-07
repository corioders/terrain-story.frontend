<template>
	<p>Dziękujemy za przejście gry!</p>
	<ResetProgressButton :progressStore="progressStore" />
</template>

<script lang="ts">
import { useProgressStore } from '@recap/store/progress';
import { defineComponent } from 'vue';

import ResetProgressButton from '@/components/buttons/ResetProgressButton.vue';

export default defineComponent({
	name: 'End',
	components: {
		ResetProgressButton,
	},
	setup() {
		const store = useProgressStore();
		return { progressStore: store };
	},
});
</script>
<style lang="scss" scoped>
p {
	padding: 0 12px;
	font-size: 1.2em;
}
</style>
