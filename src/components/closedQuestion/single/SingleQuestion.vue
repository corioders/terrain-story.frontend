<template>
	<div class="container">
		<div v-for="i in optionsAmount" :key="`optionD${i}`">
			<input :id="`${name}Option${i}`" v-model="answer" :name="name" :value="i" type="radio" />
			<label :for="`${name}Option${i}`"><slot :name="`option${i}`"></slot></label>
		</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent, ref, watch } from 'vue';

	export default defineComponent({
		name: 'SingleQuestion',
		props: {
			name: {
				type: String,
				required: true,
			},
			optionsAmount: {
				type: Number,
				required: true,
			},
		},
		emits: ['answer'],
		setup(props, { emit }) {
			const answer = ref(0);
			watch(answer, () => {
				emit('answer', answer.value);
			});
			return { answer };
		},
	});
</script>
<style lang="scss" scoped>
	.container {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
</style>
