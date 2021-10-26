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
	<SingleChoiceQuestion :options="question.options" :answer="question.answer" disableMixing name="causer" />
</template>

<script lang="ts">
	import { NCard, NSpace } from 'naive-ui';
	import { defineComponent } from 'vue';

	import Video from '@/components/Video.vue';
	import SingleChoiceQuestion from '@/components/closedQuestion/SingleChoiceQuestion.vue';

	import { inspector as question } from '@rock/static/questions';
	import witnesses from '@rock/static/witnesses';

	export default defineComponent({
		name: 'Inspector',
		components: {
			NCard,
			NSpace,
			Video,
			SingleChoiceQuestion,
		},
		setup() {
			return { question, witnesses };
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