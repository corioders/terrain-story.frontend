<template>
	<section>
		<VFlex direction="row" gap="12px">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000">
				<path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
			</svg>
			<p>
				<slot>Jeżeli twoja przeglądarka jest w trybie prywatnym postęp nie zostanie zapisany!</slot>
			</p>
		</VFlex>
	</section>
</template>

<script lang="ts">
import { VFlex } from '@corioders/vueui';
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'IncognitoWarning',
	components: {
		VFlex,
	},
});
</script>
<style lang="scss" scoped>
@use '@scssGlobals/colors';

section {
	width: 95%;
	max-width: 900px;
	border-radius: 5px;
	background-color: colors.$warning;
	padding: 10px;

	p {
		margin: 0;
	}

	svg {
		height: 100%;
		min-width: 24px;
		max-height: 32px;
	}
}
</style>
