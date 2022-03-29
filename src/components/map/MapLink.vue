<template>
	<DefaultButton @click="$router.push(mapUrl)">
		<slot> Mapa </slot>
	</DefaultButton>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { DefaultButton } from '@/theme/Button';

export default defineComponent({
	name: 'MapLink',
	components: {
		DefaultButton,
	},
	props: {
		mapUrl: {
			type: String,
			required: true,
		},
	},
});
</script>
