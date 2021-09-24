<template>
	<div id="app">
		<p>game name</p>
		<Flex>
			<navigation />
			<img alt="Vue logo" class="logo" src="@/assets/vueLogo.svg" />
			<router-view />
			<h3>{{ getAuthor }}</h3>
			<button @click="onClick">AAAA</button>
		</Flex>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	import { useMainStore } from '@/store/main';

	import Flex from '@/layouts/Flex.vue';

	import Navigation from '@/components/Navigation.vue';

	export default defineComponent({
		components: {
			Flex,
			Navigation,
		},

		setup() {
			const { getAuthor } = useMainStore(null);

			const onClick = (): void => {
				console.log('aaa');
			};

			return { getAuthor, onClick };
		},
	});
</script>


<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');

	#app {
		font-family: 'Open Sans', sans-serif;
		font-weight: 400;
		text-align: center;
		color: $dark;
		img {
			width: 250px;
			animation: rotate 3s ease-in-out 250ms infinite;
		}
		@keyframes rotate {
			from {
				transform: rotateZ(0deg);
			}
			to {
				transform: rotateZ(360deg);
			}
		}
		@media (min-width: 1024px) {
			img {
				width: 350px;
			}
		}
		h3 {
			font-weight: 400;
			font-size: 16px;
		}
	}
</style>
