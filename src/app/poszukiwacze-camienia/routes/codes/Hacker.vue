<template>
	<Video url="https://www.youtube.com/embed/0Gzgvkis0RY" />
	<p class="questionHelper">Wpisz liczbę zauważoną na filmiku. Liczba ta jest przesunięciem do w szyfru cezariańskiego.</p>
	<Input label="Przesunięcie" name="displacement" @answer="submitDisplacement($event)" />
	<Flex v-if="displacement == 13" gap="12px">
		<p class="questionHelper">Odkoduj słowo przy użyciu szyfru cezariańskiego, pomoże Ci w tym alfabet - górny jest przesunięty, a dolny zwykły</p>
		<p>MKWOUZĆ</p>
	</Flex>

	<CipherHelper v-if="displacement == 13" :displacement="displacement" />

	<Flex v-if="displacement == 13" gap="12px">
		<Input label="Hasło" name="hackerPasswordInput" @answer="submitPass($event)" />
		<CheckButton :isCorrect="isCorrect" @click="handleCheck()" />
	</Flex>
</template>

<script lang="ts">
	import { defineComponent, ref } from 'vue';

	import Flex from '@/layouts/Flex.vue';

	import Input from '@/components/Input.vue';
	import Video from '@/components/Video.vue';
	import CheckButton from '@/components/buttons/CheckButton.vue';
	import CipherHelper from '@/components/cipherHelper/CipherHelper.vue';

	import { useProgressStore } from '@rock/store/progress';

	export default defineComponent({
		name: 'Hacker',
		components: {
			CipherHelper,
			Flex,
			Input,
			Video,
			CheckButton,
		},
		setup() {
			let displacement = ref(0);
			let isCorrect = false;

			function submitDisplacement(e: string): void {
				displacement.value = parseInt(e);
			}

			let pass = ref('');
			function submitPass(e: string): void {
				pass.value = e;
				if (pass.value.toLowerCase() === 'camelot') isCorrect = true;
				else isCorrect = false;
			}
			const store = useProgressStore();
			const handleCheck = (): void => {
				if (isCorrect === true) store.finishPuzzle('Hacker');
			};

			return { submitDisplacement, displacement, submitPass, pass, handleCheck };
		},
	});
</script>
<style lang="scss" scoped>
	.questionHelper {
		text-align: center;
	}
</style>