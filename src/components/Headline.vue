<template>
	<div class="headline">
		<h1 class="headline_title">{{ title }}</h1>
		<p v-show="subtitle" class="headline_subtitle">{{subtitle}}</p>
	</div>
</template>

<script>
export default {
  name: 'headline',
	props: ['title', 'subtitle']
}
</script>

<style lang="scss">
	.headline {
		display: flex;
		flex-direction: column;
		gap: 12px;
		&_title {
			font-weight: 400;
			margin: 0;
			font-size: 24px;
			color: var(--col-7);
		}
		&_subtitle {
			font-size: 16px;
			margin: 0;
			color: var(--col-6);
		}
	}
</style>