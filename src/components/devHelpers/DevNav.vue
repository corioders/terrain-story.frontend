<template>
	<VCard style="width: 300px">
		<VFlex gap="12px">
			<DefaultButton v-for="(route, i) in routes" :key="`route${i}-${route.name}`" @click="$router.push(route.path)">{{ route.name }}</DefaultButton>
		</VFlex>
	</VCard>
</template>

<script lang="ts">
import { VCard, VFlex } from '@corioders/vueui';
import { defineComponent, PropType } from 'vue';
import { RouteRecordRaw } from 'vue-router';

import { DefaultButton } from '@/theme/Button';

export default defineComponent({
	name: 'DevNav',
	components: {
		VCard,
		VFlex,
		DefaultButton,
	},
	props: {
		routes: {
			type: Array as PropType<RouteRecordRaw[]>,
			required: true,
		},
	},
});
</script>
