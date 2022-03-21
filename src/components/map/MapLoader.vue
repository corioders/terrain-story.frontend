<template>
	<VFlex class="VFlex" justify="center">
		<slot>
			<h2>Trwa ładowanie mapy</h2>
		</slot>
		<VSpinner />
	</VFlex>
</template>

<script lang="ts">
import { VFlex, VSpinner } from '@corioders/vueui';
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'IndoorMapLoader',
	components: {
		VFlex,
		VSpinner,
	},
});
</script>
<style lang="scss" scoped>
:deep(h2) {
	font-weight: 500;
	text-align: center;
	max-width: 90%;
	font-size: 1.5rem;
}

.VFlex {
	min-height: 60vh;
	width: 100%;
	max-width: 950px;
}
</style>
