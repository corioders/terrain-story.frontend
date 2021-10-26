<template>
	<div class="mapLink">
		<n-button size="large" type="primary" @click="$router.push(mapUrl)">Mapa</n-button>
	</div>
</template>

<script lang="ts">
	import { NButton } from 'naive-ui';
	import { defineComponent } from 'vue';

	export default defineComponent({
		name: 'MapLink',
		components: {
			NButton,
		},
		props: {
			mapUrl: {
				type: String,
				required: true,
			},
		},
	});
</script>

