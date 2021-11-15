<template>
	<Video videoId="6sP82sl1tZY" />
	<Card class="witnesses">
		<h2>Zeznania świadków</h2>
		<Flex align="flex-start" gap="12px">
			<Card v-for="(witness, i) in witnesses" :key="`Witness${i + 1}`" class="witness">
				<h3>{{ `Zeznanie ${i + 1} świadka` }}</h3>
				{{ witness }}
			</Card>
		</Flex>
	</Card>
	<p class="questionHelper">Wskaż sprawcę włamania</p>
	<SingleChoiceQuestion
		:options="question.options"
		:answer="question.answer"
		disableMixing
		name="causer"
		:displayFeedback="displayFeedback"
		@correct="handleAnswer(true)"
		@incorrect="handleAnswer(false)"
	/>
	<CheckButton :isCorrect="isCorrect" @click="handleCheck" />
</template>

<script lang="ts">
	import { defineComponent, ref } from 'vue';

	import Video from '@/components/YoutubeVideo.vue';
	import CheckButton from '@/components/buttons/CheckButton.vue';
	import SingleChoiceQuestion from '@/components/closedQuestion/SingleChoiceQuestion.vue';

	import { inspector as question } from '@/app/poszukiwacze-camienia/assets/questions';
	import witnesses from '@/app/poszukiwacze-camienia/assets/witnesses';
	import { Card } from '@corioders/vueui';
	import { Flex } from '@corioders/vueui';
	import { useProgressStore } from '@rock/store/progress';

	export default defineComponent({
		name: 'Inspector',
		components: {
			Card,
			Flex,
			Video,
			SingleChoiceQuestion,
			CheckButton,
		},
		setup() {
			const store = useProgressStore();
			const isCorrect = ref<boolean>(false);
			const displayFeedback = ref<boolean>(false);

			const handleAnswer = (isAnswerCorrect: boolean): void => {
				isCorrect.value = isAnswerCorrect;
				displayFeedback.value = false;
			};

			const handleCheck = (): void => {
				if (isCorrect.value === true) {
					store.finishPuzzle('Inspector');
				}
				displayFeedback.value = true;
			};

			return { question, witnesses, isCorrect, handleCheck, handleAnswer, displayFeedback };
		},
	});
</script>

<style lang="scss" scoped>
	.witnesses {
		width: 95%;
		max-width: 950px;
		h2,
		h3 {
			font-size: 1.3em;
			margin: 0.5em 0;
		}

		.witness {
			width: 100%;
		}
	}
	.questionHelper {
		text-align: center;
	}
</style>