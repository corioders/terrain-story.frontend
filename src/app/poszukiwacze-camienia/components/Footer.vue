<template>
	<CFooter>
		<template #informations>
			<p>Projekt dofinansowany ze środków Unii Europejskiej</p>
		</template>
		<template #menu>
			<TinyLink @click="$router.push('/')">Poszukiwacze Camienia</TinyLink>
			<TinyLink @click="$router.push('/regulamin')">Regulamin</TinyLink>
			<TinyLink @click="$router.push('/polityka-prywatnosci')">Polityka Prywatności</TinyLink>
			<TinyLink @click="$router.push('/finansowanie')">Finansowanie</TinyLink>
		</template>
	</CFooter>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	import CFooter from '@/components/Footer.vue';

	import { TinyLink } from '@/theme/Link';

	export default defineComponent({
		name: 'Footer',
		components: {
			CFooter,
			TinyLink,
		},
	});
</script>
<style lang="scss" scoped>
	p {
		font-size: 0.8rem;
	}
</style>