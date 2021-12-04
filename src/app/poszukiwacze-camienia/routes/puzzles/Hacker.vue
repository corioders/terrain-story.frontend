<template>
	<Video videoId="0Gzgvkis0RY" />
	<p class="questionHelper">Wpisz liczbę zauważoną na filmiku. Liczba ta jest przesunięciem do w szyfru cezariańskiego.</p>
	<Input label="Przesunięcie" name="displacement" :isCorrect="isDisplacementCorrect" @answer="submitDisplacement($event)" />
	<VFlex v-if="isDisplacementCorrect" gap="12px">
		<p class="questionHelper">
			Odkoduj hasło przy użyciu szyfru cezariańskiego. Odnajdź litery hasła w górnym wierszu i przeczytaj te przyporządkowane do nich w dolnym wierszu.
		</p>
		<p>MKWOUZĆ</p>
	</VFlex>

	<CipherHelper v-if="isDisplacementCorrect" :displacement="displacement" />

	<VFlex v-if="isDisplacementCorrect" gap="12px">
		<Input label="Hasło" name="hackerPasswordInput" :isCorrect="isPasswordCorrect" @answer="submitPass($event)" />
		<CheckButton :isCorrect="isPasswordCorrect" @click="handleCheck()" />
	</VFlex>
</template>

<script lang="ts">
	import { defineComponent, ref } from 'vue';

	import Input from '@/components/Input.vue';
	import Video from '@/components/YoutubeVideo.vue';
	import CheckButton from '@/components/buttons/CheckButton.vue';
	import CipherHelper from '@/components/cipherHelper/CipherHelper.vue';

	import { VFlex } from '@corioders/vueui';
	import { useProgressStore } from '@rock/store/progress';

	export default defineComponent({
		name: 'Hacker',
		components: {
			CipherHelper,
			VFlex,
			Input,
			Video,
			CheckButton,
		},
		setup() {
			let displacement = ref(0);
			let isDisplacementCorrect = ref(false);
			function submitDisplacement(e: string): void {
				displacement.value = parseInt(e);
				isDisplacementCorrect.value = displacement.value === 13;
			}

			let isPasswordCorrect = ref(false);
			function submitPass(e: string): void {
				isPasswordCorrect.value = e.toLowerCase() === 'camelot';
			}

			const store = useProgressStore();
			const handleCheck = (): void => {
				if (isPasswordCorrect.value === true) store.finishPuzzle('Hacker');
			};

			return { submitDisplacement, displacement, isDisplacementCorrect, submitPass, isPasswordCorrect, handleCheck };
		},
	});
</script>
<style lang="scss" scoped>
	.questionHelper {
		text-align: center;
		margin: initial 12px;
	}
</style>