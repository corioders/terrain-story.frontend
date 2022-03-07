<template>
	<AlreadyDone :progressStore="progressStore">
		<h2>You've already solved this mystery</h2>
		<template #showPopupButton>Start playing from the beginning</template>
		<template #popup>
			<p>Are you sure you want to start the game from the beginning? <br />This will delete all of the progress in the game.</p>
		</template>
		<template #confirmResetButton>Yes</template>
		<template #cancelResetButton>Cancel</template>
	</AlreadyDone>
</template>

<script lang="ts">
import { useProgressStore } from '@eng/store/progress';
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
