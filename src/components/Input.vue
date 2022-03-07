<template>
	<VFlex align="flex-start">
		<VInput :id="name" v-model="answer" :name="text" :class="className" @input="$emit('answer', answer)" />
	</VFlex>
</template>

<script lang="ts">
import { VFlex, VInput } from '@corioders/vueui';
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'Input',
	components: {
		VFlex,
		VInput,
	},
	props: {
		name: {
			type: String,
			required: true,
		},
		label: {
			type: String,
			required: true,
		},
		isCorrect: {
			type: Boolean,
			required: true,
		},
		correctAnswerText: {
			type: String,
			default: 'Dobra odpowiedź',
		},
		incorrectAnswerText: {
			type: String,
			default: 'Zła odpowiedź',
		},
	},
	emits: ['answer'],
	data() {
		return {
			answer: '',
		};
	},
	computed: {
		text() {
			return this.answer === '' ? this.label : this.isCorrect ? this.correctAnswerText : this.incorrectAnswerText;
		},
		className() {
			return this.answer === '' ? 'default' : this.isCorrect ? 'correct' : 'incorrect';
		},
	},
});
</script>
<style lang="scss" scoped>
@use '@scssGlobals/colors';

.default {
	--accent-color: #{colors.$secondary};
}

.correct {
	--accent-color: #{colors.$primary};
}

.incorrect {
	--accent-color: #{colors.$errorDarker};
}
</style>
