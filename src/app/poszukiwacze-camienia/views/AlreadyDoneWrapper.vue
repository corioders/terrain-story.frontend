<template>
	<AlreadyDone :progressStore="progressStore">
		<template #mapLink>
			<div />
		</template>
	</AlreadyDone>
</template>

<script lang="ts">
import { useProgressStore } from '@rock/store/progress';
import { defineComponent } from 'vue';

import AlreadyDone from '@/views/AlreadyDone.vue';

export default defineComponent({
	components: {
		AlreadyDone,
	},
	setup() {
		return { progressStore: useProgressStore() };
	},
});
</script>
