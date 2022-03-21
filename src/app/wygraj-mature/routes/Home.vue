<template>
	<DevNav v-if="!IS_PRODUCTION" :routes="routes" />
	<Home
		gameName="Wygraj Maturę"
		:gameLogoSrc="require('@recap/assets/recapLogo.webp')"
		:gameLogoHorizontalSrc="require('@recap/assets/recapLogoHorizontal.webp')"
		knowMoreVideoId="pG1O9rnZ7n4"
		lightSectionColor="#ffe459"
		:isTextLightTheme="false"
	>
		<template #gameCreators>
			<p>Nauczyciele z VIII LO im. Marii Skłodowskiej-Curie w Katowicach</p>
		</template>
	</Home>
</template>

<script lang="ts">
import { routes } from '@recap/router';
import { defineComponent } from 'vue';

import Home from '@/components/Home.vue';
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
