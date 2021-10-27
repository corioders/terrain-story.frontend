<template>
	<CFooter>
		<template #informations>
			<p>Projekt dofinansowany ze środków Unii Europejskiej</p>
		</template>
		<template #menu>
			<n-button size="tiny" text @click="$router.push('/')">Poszukiwacze Camienia</n-button>
			<n-button size="tiny" text @click="$router.push('/regulamin')">Regulamin</n-button>
			<n-button size="tiny" text @click="$router.push('/polityka-prywatnosci')">Polityka Prywatności</n-button>
			<n-button size="tiny" text @click="$router.push('/finansowanie')">Finansowanie</n-button>
		</template>
	</CFooter>
</template>

<script lang="ts">
	import { NButton } from 'naive-ui';
	import { defineComponent } from 'vue';

	import CFooter from '@/components/Footer.vue';

	export default defineComponent({
		name: 'Footer',
		components: {
			CFooter,
			NButton,
		},
	});
</script>