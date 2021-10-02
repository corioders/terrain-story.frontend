<template>
	<p>Haker</p>
	<Video url="https://www.youtube.com/embed/4-fOGS_QcZk" />
	<Input label="hasło" name="hackerPasswordInput" @submitInput="submit($event)" />
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	import Input from '@/components/Input.vue';
	import Video from '@/components/Video.vue';

	export default defineComponent({
		name: 'Hacker',
		components: {
			Input,
			Video,
		},
		setup() {
			function submit(e: string): void {
				console.log(e);
			}
			return { submit };
		},
	});
</script>