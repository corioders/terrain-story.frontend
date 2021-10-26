<template>
	<p>Inspektor</p>
	<Video url="https://www.youtube.com/embed/4-fOGS_QcZk" />
	<n-card title="Zeznania świadków" class="witnesses">
		<n-space vertical>
			<n-card v-for="(witness, i) in witnesses" :key="`Witness${i + 1}`" :title="`Zeznanie ${i + 1} świadka`">
				{{ witness }}
			</n-card>
		</n-space>
	</n-card>
	<SingleChoiceQuestion :options="question.options" :answer="question.answer" disableMixing name="causer" @correct="isCorrect = true" @incorrect="isCorrect = false" />
	<CheckButton @click="handleCheck">SPRAWDŹ</CheckButton>
</template>

<script lang="ts">
	import { NCard, NSpace } from 'naive-ui';
	import { defineComponent, ref } from 'vue';

	import CheckButton from '@/components/CheckButton.vue';
	import Video from '@/components/Video.vue';
	import SingleChoiceQuestion from '@/components/closedQuestion/SingleChoiceQuestion.vue';

	import { inspector as question } from '@rock/static/questions';
	import witnesses from '@rock/static/witnesses';

	import { useProgressStore } from '../../store/progress';

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
</style>