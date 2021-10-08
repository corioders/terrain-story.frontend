<template>
	<p>Haker</p>
	<Video url="https://www.youtube.com/embed/4-fOGS_QcZk" />
	<Input label="Przesunięcie" name="displacement" @submitInput="submitDisplacement($event)" />
	<CipherHelper v-if="displacement == 13" :displacement="displacement" />
	<Input label="hasło" name="hackerPasswordInput" @submitInput="submitPass($event)" />
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
			let displacement = ref(0);
			function submitDisplacement(e: number): void {
				displacement.value = e;
			}
			let pass = ref('');
			function submitPass(e: string): void {
				pass.value = e;
				if (pass.value.toLowerCase() === 'camelot') console.log('ok');
			}
			return { submitDisplacement, displacement, submitPass, pass };
		},
	});
</script>