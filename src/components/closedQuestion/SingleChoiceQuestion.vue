<template>
	<div class="container">
		<div v-for="(option, i) in options" :key="`option${i}`">
			<input :id="`${name}Option${i}`" :name="name" :value="i" type="radio" @click="$emit('answer', $event.target.value)" />
			<label :for="`${name}Option${i}`">
				<img v-if="arePhotos" :src="option" />
				<span v-else>{{ option }}</span>
			</label>
		</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent, PropType } from 'vue';

	import { arePhotos } from './arePhotos';
	import { hideInput } from './hideInput';
	import Question from './question';

	export default defineComponent({
		name: 'SingleChoiceQuestion',
		props: {
			name: {
				type: String,
				required: true,
			},
			options: {
				type: Array as PropType<Question['options']>,
				required: true,
			},
		},
		emits: ['answer'],
		setup(props) {
			return { arePhotos: arePhotos(props.options), hideInput };
		},
	});
</script>
<style lang="scss" scoped >
	.container {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		input {
			visibility: v-bind('hideInput(arePhotos)');
		}
		img {
			width: 150px;
		}
	}
</style>