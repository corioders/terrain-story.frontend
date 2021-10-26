<template>
	<p>Turysta</p>
	<Video url="https://www.youtube.com/embed/HcVCHKHy-Xw" />
	<SingleChoiceQuestions :questions="questions" name="place">
		<template #0>
			<img src="@rock/assets/places/0.jpg" alt="Miejsce 1" />
		</template>
		<template #1>
			<img src="@rock/assets/places/1.jpg" alt="Miejsce 2" />
		</template>
		<template #2>
			<img src="@rock/assets/places/2.jpg" alt="Miejsce 3" />
		</template>
		<template #3>
			<img src="@rock/assets/places/3.jpg" alt="Miejsce 4" />
		</template>
	</SingleChoiceQuestions>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	import Video from '@/components/Video.vue';
	import SingleChoiceQuestions from '@/components/closedQuestion/SingleChoiceQuestions.vue';

	import { tourist as questions } from '@/app/poszukiwacze-camienia/assets/questions';

	export default defineComponent({
		name: 'Tourist',
		components: {
			Video,
			SingleChoiceQuestions,
		},
		setup() {
			return { questions };
		},
	});
</script>