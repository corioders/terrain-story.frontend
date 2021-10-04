<template>
	<p>Haker</p>
	<Video url="https://www.youtube.com/embed/4-fOGS_QcZk" />
	<Input label="Przesunięcie" name="displacement" @submitInput="submit($event)" />
	<CipherHelper v-if="submittedDisplacement == 13" :displacement="submittedDisplacement" />
	<Input label="hasło" name="hackerPasswordInput" @submitInput="submit($event)" />
</template>

<script lang="ts">
	import { defineComponent, ref } from 'vue';

	import Input from '@/components/Input.vue';
	import Video from '@/components/Video.vue';
	import CipherHelper from '@/components/cipherHelper/CipherHelper.vue';

	export default defineComponent({
		name: 'Hacker',
		components: {
			CipherHelper,
			Input,
			Video,
		},
		setup() {
			let submittedDisplacement = ref(0);
			function submit(e: number): void {
				submittedDisplacement.value = e;
			}
			return { submit, submittedDisplacement };
		},
	});
</script>