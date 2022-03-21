<template>
	<DevNav v-if="!IS_PRODUCTION" :routes="routes" />
	<Home
		gameName="Pomóż Abelardowi"
		:gameLogoSrc="require('@help/assets/helpLogo.webp')"
		:gameLogoHorizontalSrc="require('@help/assets/helpLogoHorizontal.webp')"
		knowMoreVideoId="yLmjRKen2UE"
		lightSectionColor="#406258"
		:isTextLightTheme="true"
	>
		<template #gameCreators>
			<p>Psycholog Łucja Chwastek</p>
		</template>
	</Home>
</template>

<script lang="ts">
import { routes } from '@help/router';
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
