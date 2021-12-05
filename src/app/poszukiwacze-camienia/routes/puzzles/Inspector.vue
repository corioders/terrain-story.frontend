<template>
	<Video videoId="6sP82sl1tZY" />
	<VCard class="witnesses">
		<h2>Zeznania świadków</h2>
		<VFlex align="flex-start" gap="12px">
			<VCard v-for="(witness, i) in witnesses" :key="`Witness${i + 1}`" class="witness">
				<h3>{{ `Zeznanie ${i + 1} świadka` }}</h3>
				{{ witness }}
			</VCard>
		</VFlex>
	</VCard>
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
	import { defineComponent } from 'vue';

	import Video from '@/components/YoutubeVideo.vue';
	import CheckButton from '@/components/buttons/CheckButton.vue';
	import SingleChoiceQuestion from '@/components/closedQuestion/SingleChoiceQuestion.vue';
	import { questionExecutor } from '@/components/closedQuestion/question';

	import { inspector as question } from '@/app/poszukiwacze-camienia/assets/questions';
	import witnesses from '@/app/poszukiwacze-camienia/assets/witnesses';
	import { VFlex, VCard } from '@corioders/vueui';
	import { useProgressStore } from '@rock/store/progress';

	export default defineComponent({
		name: 'Inspector',
		components: {
			VCard,
			VFlex,
			Video,
			SingleChoiceQuestion,
			CheckButton,
		},
		setup() {
			const store = useProgressStore();
			return { question, witnesses, ...questionExecutor(() => store.finishPuzzle('Inspector')) };
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