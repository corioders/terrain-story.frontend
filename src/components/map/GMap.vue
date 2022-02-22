<template>
	<iframe title="Mapa" :src="url" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'GMap',
	props: {
		url: {
			type: String,
			required: true,
		},
	},
});
</script>
<style lang="scss" scoped>
iframe {
	width: 100%;
	height: 70vh;
	max-width: 950px;
	max-height: 700px;
	margin: 0 12px;
}
</style>
