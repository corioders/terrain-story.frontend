<template>
	<div class="alphabet">
		<p>
			<span v-for="(letter, i) in alphabet" :key="`${i}-letter-${letter}`" class="letter">{{ letter }}</span>
		</p>
		<p>
			<span v-for="(displacedLetter, i) in displacedAlphabet" :key="`${i}-displacedLetter-${displacedLetter}`" class="letter">
				{{ displacedLetter }}
			</span>
		</p>
	</div>
</template>

<script lang="ts">
	import { defineComponent, toRefs, watch } from 'vue';

	import { displaceAlphabet } from './displaceAlphabet';

	export default defineComponent({
		name: 'CipherHelper',
		props: {
			displacement: {
				type: Number,
				required: true,
			},
		},
		setup(props) {
			const { displacement } = toRefs(props);
			let { alphabet, displacedAlphabet } = toRefs(displaceAlphabet(displacement.value));

			function displace(): void {
				const { alphabet: a, displacedAlphabet: d } = displaceAlphabet(displacement.value);
				alphabet.value = a;
				displacedAlphabet.value = d;
			}

			watch(displacement, displace);
			return { alphabet, displacedAlphabet };
		},
	});
</script>
<style lang="scss" scoped>
	.alphabet {
		width: 100%;
		white-space: nowrap;
		overflow-y: auto;
		text-align: center;
		p {
			margin-left: 12px;
		}
		.letter {
			display: inline-block;
			width: 22px;
		}
	}
</style>
