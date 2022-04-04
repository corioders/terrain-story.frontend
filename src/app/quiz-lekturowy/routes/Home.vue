<template>
	<DevNav v-if="!IS_PRODUCTION" :routes="routes" />
	<Home
		gameName="Quiz Lekturowy"
		:gameLogoSrc="require('@quiz/assets/quizLogo.webp')"
		:gameLogoHorizontalSrc="require('@quiz/assets/quizLogoHorizontal.webp')"
		knowMoreVideoId="pG1O9rnZ7n4"
		darkSectionColor="#ffe459"
		:isTextLightOnDarkBg="false"
	>
	</Home>
</template>

<script lang="ts">
import { routes } from '@quiz/router';
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
