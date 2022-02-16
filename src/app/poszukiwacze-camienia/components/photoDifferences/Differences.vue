<template>
	<Difference v-for="(descriptor, i) in descriptors" :key="`difference${name}${i}`" :differenceDescriptor="descriptor" @correct="isCorrect[i] = true" />
</template>


<script lang="ts">
	import { defineComponent, PropType, ref, watch } from 'vue';

	import Difference from './Difference.vue';
	import { DifferenceDescriptor } from './difference';

	export default defineComponent({
		components: { Difference },
		props: {
			name: {
				type: String,
				required: true,
			},
			descriptors: {
				type: Array as PropType<Array<DifferenceDescriptor>>,
				required: true,
			},
		},
		emits: ['correct'],
		setup(props, { emit }) {
			const isCorrect = ref<Array<boolean>>([]);

			// Initalize to incorrect.
			for (let i = 0; i < props.descriptors.length; i++) {
				isCorrect.value[i] = false;
			}

			watch(
				isCorrect,
				() => {
					if (!isCorrect.value.includes(false)) emit('correct');
				},
				{ deep: true },
			);

			return { isCorrect };
		},
	});
</script>


