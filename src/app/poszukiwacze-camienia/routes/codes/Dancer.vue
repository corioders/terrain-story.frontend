<template>
	<p>Tancerz</p>
	<Video url="https://www.youtube.com/embed/8O_EcEENaaw" />
	<SingleChoiceQuestions :questions="questions" name="dance" @correct="isCorrect = true" @incorrect="isCorrect = false">
		<template #0>
			<audio controls :src="require('@rock/assets/dancer/belgijka.wav')"></audio>
		</template>
		<template #1>
			<audio controls :src="require('@rock/assets/dancer/macarena.wav')"></audio>
		</template>
		<template #2>
			<audio controls :src="require('@rock/assets/dancer/tango.wav')"></audio>
		</template>
	</SingleChoiceQuestions>
	<CheckButton @click="handleCheck()" />
</template>

<script lang="ts">
	import { defineComponent, ref } from 'vue';

	import Video from '@/components/Video.vue';
	import CheckButton from '@/components/buttons/CheckButton.vue';
	import SingleChoiceQuestions from '@/components/closedQuestion/SingleChoiceQuestions.vue';

	import { dancer as questions } from '@/app/poszukiwacze-camienia/assets/questions';
	import { useProgressStore } from '@rock/store/progress';

	export default defineComponent({
		name: 'Dancer',
		components: {
			Video,
			SingleChoiceQuestions,
			CheckButton,
		},
		setup() {
			const store = useProgressStore();
			const isCorrect = ref<boolean>(false);

			const handleCheck = (): void => {
				if (isCorrect.value === true) {
					store.finishPuzzle('Dancer');
				}
			};

			return { questions, isCorrect, handleCheck };
		},
	});
</script>