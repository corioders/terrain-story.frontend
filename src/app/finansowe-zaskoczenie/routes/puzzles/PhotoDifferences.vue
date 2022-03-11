<template>
	<VFlex align="flex-start" gap="12px">
		<p>
			10 lutego 2017 r. NBP wprowadziło do obiegu banknot o nominale 500 zł. To kolejny banknot z serii „Władcy polscy”. Znajduje się na nim wizerunek Jana III
			Sobieskiego pochodzący z jego medalionu koronacyjnego. Niestety banknot poniżej został sfałszowany, znajdź na nim 5 błędów.
		</p>
		<Differences name="differences" :descriptors="descriptors" @correct="handleAnswer(true)" />
	</VFlex>
	<CheckButton :isCorrect="isCorrect" @click="handleCheck()" />
</template>

<script lang="ts">
import { VFlex } from '@corioders/vueui';
import { descriptors } from '@fin/assets/photoDifferences/descriptors';
import { useProgressStore } from '@fin/store/progress';
import { defineComponent } from 'vue';

import CheckButton from '@/components/buttons/CheckButton.vue';
import { questionExecutor } from '@/components/closedQuestion/question';
import Differences from '@/components/photoDifferences/Differences.vue';

export default defineComponent({
	name: 'PhotoDifferences',
	components: {
		Differences,
		VFlex,
		CheckButton,
	},
	setup() {
		const store = useProgressStore();
		return { descriptors, ...questionExecutor(() => store.finishPuzzle('PhotoDifferences')) };
	},
});
</script>
<style lang="scss" scoped>
p {
	width: 80vw;
	max-width: 950px;
}
</style>
