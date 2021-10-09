<template>
	<p>Skarbek</p>
	<Video url="https://www.youtube.com/embed/4-fOGS_QcZk" />
	<div v-for="(question, i) in questions" :key="`treasurerQuestion${i}`" class="question">
		<p>{{ question.question }}</p>
		<SingleQuestion :options="question.options" :name="`mystery${i}`" @answer="log($event, `mystery${i}`)" />
	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	import Video from '@/components/Video.vue';
	import SingleQuestion from '@/components/closedQuestion/SingleQuestion.vue';

	export default defineComponent({
		name: 'Treasurer',
		components: {
			Video,
			SingleQuestion,
		},
		setup() {
			const questions = [
				{
					question: 'Gdzie czwartek jest przed środą?',
					options: ['w słowniku', 'w życiu', 'w tygodniu', 'w kalendarzu'],
				},
				{
					question: 'Parys rozdzielił po trzy jabłka dla każdej z Bogiń a mimo to jedno jabłko zostało w koszyku. Jak to możliwe?',
					options: ['jednej dał jabłko z koszykiem', 'jedno jabłko było zepsute i zostało w koszyku', 'jedna z bogiń nie przyjęła podarunku', 'koszyk zawierał 10 jabłek'],
				},
				{
					question: 'Kości tego świata sięgają objęć nieba, skąpane w bieli niczym Panna Młoda witająca swojego wybrańca',
					options: ['góry', 'wieże', 'wieżowce', 'drapacze chmur'],
				},
			];
			function log(e: string, question: string): void {
				console.log(`${question} - ${e}`);
			}
			return { questions, log };
		},
	});
</script>