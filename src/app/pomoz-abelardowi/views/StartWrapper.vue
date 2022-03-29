<template>
	<Start :start="handleStart" videoId="4l1kEdSWxlY">
		<template v-if="isUA" #incognitoWarning>Якщо ваш браузер знаходиться в анонімному режимі, ваш прогрес не буде зберігатися!</template>
		<template v-if="isUA" #info>Перегляньте фільм повністю, а потім грайте!</template>
		<template v-if="isUA" #howToPlayButton>Туторіал</template>
		<template v-if="isUA" #playButton>Старт</template>
		<template v-if="isUA" #playButtonCard>Спершу потрібно подивитися фільм.</template>
		<DefaultButton @click="isUA.value = !isUA.value">
			<template v-if="!isUA.value">Przełącz na polski</template>
			<template v-else>Перейти на українську</template>
		</DefaultButton>
	</Start>
</template>

<script lang="ts">
import { useProgressStore } from '@help/store/progress';
import { defineComponent } from 'vue';

import { DefaultButton } from '@/theme/Button';
import Start from '@/views/Start.vue';

export default defineComponent({
	name: 'StartWrapper',
	components: {
		Start,
		DefaultButton,
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
