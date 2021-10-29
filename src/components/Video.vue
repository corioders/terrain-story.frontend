<template>
	<div class="container">
		<div class="inner">
			<iframe
				:src="url"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			></iframe>
		</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	export default defineComponent({
		name: 'Video',
		props: {
			url: {
				type: String,
				required: true,
			},
		},
	});
</script>
<style lang="scss" scoped>
	.container {
		margin-top: 12px;
		width: 95%;
		max-width: 950px;
		.inner {
			width: 100%;
			position: relative;
			padding-bottom: 56.25%;
			iframe {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
