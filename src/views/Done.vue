<template>
	<VFlex justify="center" gap="12px" style="height: 60vh">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
			<path d="M0 0h24v24H0z" fill="none" />
			<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
		</svg>
		<slot name="progress">
			<h2>Brawo, udało Ci się rozwiązać tę zagadkę</h2>
		</slot>
		<slot>
			<h3>Znajdź i zeskanuj następny kod</h3>
		</slot>
		<PrimaryButton @click="$router.replace(replacePath)">
			<slot name="action">Przenieś do mapy</slot>
		</PrimaryButton>
	</VFlex>
</template>

<script lang="ts">
import { VFlex } from '@corioders/vueui';
import { defineComponent, PropType } from 'vue';

import { PrimaryButton } from '@/theme/Button';

export default defineComponent({
	name: 'Done',
	components: {
		VFlex,
		PrimaryButton,
	},
	props: {
		replacePath: {
			type: String as PropType<string>,
			default: '/mapa',
		},
	},
});
</script>
<style lang="scss" scoped>
@use '@scssGlobals/colors';

:deep(h2),
:deep(h3),
:deep(h4) {
	font-weight: 500;
	text-align: center;
	max-width: 90%;
}

:deep(h2) {
	font-size: 1.5rem;
}

svg {
	fill: colors.$primary;
	width: 80%;
	max-width: 200px;
}
</style>
