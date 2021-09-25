<template>
	<SkipNav @click="skip()" />
</template>

<script lang="ts">
	import { defineComponent } from 'vue';
	import { useRouter } from 'vue-router';

	import SkipNav from '@/components/devHelpers/SkipNav.vue';

	import { useRockSkipNavStore } from '@rock/store/RockSkipNav';

	export default defineComponent({
		name: 'RockSkipNav',
		components: {
			SkipNav,
		},
		setup() {
			const RockSkipNavStore = useRockSkipNavStore();
			const router = useRouter();
			function skip(): void {
				RockSkipNavStore.active++;
				router.push(RockSkipNavStore.routes[RockSkipNavStore.active]);
			}
			return { skip };
		},
	});
</script>
<style lang="scss" scoped>
</style>
