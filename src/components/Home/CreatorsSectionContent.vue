<template>
	<VFlex>
		<h5>
			<slot name="gameCreatorsText">Twórcy Gry</slot>
		</h5>
		<img v-if="isTextLightOnDarkBg" class="logo" src="@/assets/whiteLogo.webp" alt="Terrain Story" />
		<img v-else class="logo" src="@/assets/blackLogo.webp" alt="Terrain Story" />
		<slot name="gameCreators" />
	</VFlex>
</template>

<script lang="ts">
import { VFlex } from '@corioders/vueui';
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'ContactSectionContent',
	components: {
		VFlex,
	},
	props: {
		isTextLightOnDarkBg: {
			required: true,
			type: Boolean,
		},
	},
});
</script>
