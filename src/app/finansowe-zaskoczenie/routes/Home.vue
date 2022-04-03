<template>
	<DevNav v-if="!IS_PRODUCTION" :routes="routes" />
	<Home
		gameName="Finansowe Zaskoczenie"
		:gameLogoSrc="require('@fin/assets/finLogo.webp')"
		:gameLogoHorizontalSrc="require('@fin/assets/finLogoHorizontal.webp')"
		darkSectionColor="#241C5A"
		:isTextLightOnDarkBg="true"
	>
	</Home>
</template>

<script lang="ts">
import { routes } from '@fin/router';
import { defineComponent } from 'vue';

import Home from '@/components/Home';
import DevNav from '@/components/devHelpers/DevNav.vue';

export default defineComponent({
	name: 'HomeWrapper',
	components: {
		DevNav,
		Home,
	},
	setup() {
		return { routes, IS_PRODUCTION: __IS_PRODUCTION__ };
	},
});
</script>
<style lang="scss">
body {
	margin: 0;
}
</style>
