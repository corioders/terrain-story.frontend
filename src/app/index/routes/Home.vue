<template>
	<n-space vertical align="center">
		<h1>Terrain Story</h1>
		<h2>Strona w budowie</h2>
		<div class="container">
			<n-carousel show-arrow autoplay>
				<img src="@index/assets/0.jpg" />
				<img src="@index/assets/1.jpg" />
				<img src="@index/assets/2.jpg" />
				<img src="@index/assets/3.jpg" />
				<img src="@index/assets/4.jpg" />
			</n-carousel>
		</div>
	</n-space>
</template>

<script lang="ts">
	import { NCarousel, NSpace } from 'naive-ui';
	import { defineComponent } from 'vue';

	export default defineComponent({
		name: 'Home',
		components: {
			NCarousel,
			NSpace,
		},
	});
</script>
<style lang="scss">
	.container {
		img {
			width: 100%;
			object-fit: cover;
		}
		width: 80%;
		max-width: 800px;
		margin: 0 auto;
	}
</style>