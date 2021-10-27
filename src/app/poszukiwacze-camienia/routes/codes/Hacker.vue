<template>
	<p>Haker</p>
	<Video url="https://www.youtube.com/embed/0Gzgvkis0RY" />
	<Input label="Przesunięcie" name="displacement" @answer="submitDisplacement($event)" />
	<p v-if="displacement == 13">MKWOUZĆ</p>
	<CipherHelper v-if="displacement == 13" :displacement="displacement" />
	<Input label="Hasło" name="hackerPasswordInput" @answer="submitPass($event)" />
	<CheckButton @click="handleCheck()" />
</template>

<script lang="ts">
	import { defineComponent, ref } from 'vue';

	import Input from '@/components/Input.vue';
	import Video from '@/components/Video.vue';
	import CheckButton from '@/components/buttons/CheckButton.vue';
	import CipherHelper from '@/components/cipherHelper/CipherHelper.vue';

	import { useProgressStore } from '../../store/progress';

	export default defineComponent({
		name: 'Hacker',
		components: {
			CipherHelper,
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