<template>
	<div class="logotype">
		<span class="logotype_icon">U</span>
		<span class="logotype_label">Техник</span>
	</div>
</template>

<script>
export default {
  name: 'logotype',
}
</script>
<style lang="scss">
	.logotype {
		background: var(--col-2);
		color: white;
		font-weight: 700;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-items: center;
		&_icon {
			font-size: 96px;
		}
		&_label {
			font-size: 24px;
		}
	}
</style>