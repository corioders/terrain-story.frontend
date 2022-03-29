<template>
	<Start :start="handleStart" videoId="4l1kEdSWxlY">
		<template v-if="isUA.value" #incognitoWarning>Якщо ваш браузер знаходиться в анонімному режимі, ваш прогрес не буде зберігатися!</template>
		<template v-if="isUA.value" #info>Перегляньте фільм повністю, а потім грайте!</template>
		<template v-if="isUA.value" #howToPlayButton>Туторіал</template>
		<template v-if="isUA.value" #playButton>Старт</template>
		<template v-if="isUA.value" #playButtonCard>Спершу потрібно подивитися фільм.</template>
	</Start>
</template>

<script lang="ts">
import { useProgressStore } from '@help/store/progress';
import { defineComponent } from 'vue';

import Start from '@/views/Start.vue';

export default defineComponent({
	name: 'StartWrapper',
	components: {
		Start,
	},
	setup() {
		const store = useProgressStore();

		const handleStart = (): void => {
			store.start();
		};

		return { handleStart };
	},
});
</script>
