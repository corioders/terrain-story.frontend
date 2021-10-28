<template>
	<p>Inspektor</p>
	<Video url="https://www.youtube.com/embed/6sP82sl1tZY" />
	<n-card title="Zeznania świadków" class="witnesses">
		<n-space vertical>
			<n-card v-for="(witness, i) in witnesses" :key="`Witness${i + 1}`" :title="`Zeznanie ${i + 1} świadka`">
				{{ witness }}
			</n-card>
		</n-space>
	</n-card>
	<p class="questionHelper">Wskaż sprawcę włamania</p>
	<SingleChoiceQuestion :options="question.options" :answer="question.answer" disableMixing name="causer" @correct="isCorrect = true" @incorrect="isCorrect = false" />
	<CheckButton @click="handleCheck" />
</template>

<script lang="ts">
	import { NCard, NSpace } from 'naive-ui';
	import { defineComponent, ref } from 'vue';

	import Video from '@/components/Video.vue';
	import CheckButton from '@/components/buttons/CheckButton.vue';
	import SingleChoiceQuestion from '@/components/closedQuestion/SingleChoiceQuestion.vue';

	import { inspector as question } from '@/app/poszukiwacze-camienia/assets/questions';
	import witnesses from '@/app/poszukiwacze-camienia/assets/witnesses';
	import { useProgressStore } from '@rock/store/progress';

	export default defineComponent({
		name: 'Inspector',
		components: {
			NCard,
			NSpace,
			Video,
			SingleChoiceQuestion,
			CheckButton,
		},
		setup() {
			const store = useProgressStore();
			const isCorrect = ref<boolean>(false);

			const handleCheck = (): void => {
				if (isCorrect.value === true) {
					store.finishPuzzle('Inspector');
				}
			};

			return { question, witnesses, isCorrect, handleCheck };
		},
	});
</script>

<style lang="scss" scoped>
	.witnesses {
		width: 95%;
		max-width: 950px;
		.n-space {
			.n-card {
				width: 100%;
			}
		}
	}
	.questionHelper {
		text-align: center;
	}
</style>