<template>
	<AlreadyDone :progressStore="progressStore">
		<template v-if="isUA.value" #alreadyDone> Ви вже розв'язали цю загадку </template>
		<template v-if="isUA.value" #transferToMap> Перенести на мапу</template>

		<template v-if="isUA.value" #showPopupButton>Починайте гру заново</template>
		<template v-if="isUA.value" #popup>Ви впевнені, що хочете почати грати з початку? Це призведе до видалення всього вашого прогресу в грі.</template>
		<template v-if="isUA.value" #confirmResetButton>Так</template>
		<template v-if="isUA.value" #cancelResetButton>Скасувати</template>
	</AlreadyDone>
</template>

<script lang="ts">
import { useProgressStore } from '@help/store/progress';
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
