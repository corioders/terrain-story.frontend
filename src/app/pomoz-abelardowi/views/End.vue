<template>
	<p v-if="!isUA.value">Dziękujemy za przejście gry!</p>
	<p v-else>Дякуємо за проходження гри!</p>

	<ResetProgressButton :progressStore="progressStore">
		<template v-if="isUA" #showPopupButton>Починайте гру заново</template>
		<template v-if="isUA">Ви впевнені, що хочете почати грати з початку? Це призведе до видалення всього вашого прогресу в грі.</template>
		<template v-if="isUA" #confirmResetButton>Так</template>
		<template v-if="isUA" #cancelResetButton>Скасувати</template>
	</ResetProgressButton>
</template>

<script lang="ts">
import { useProgressStore } from '@help/store/progress';
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
