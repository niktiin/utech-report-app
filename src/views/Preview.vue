<template>
  <div class="Preview">
    <logotype/>
  </div>
</template>

<script>
import Logotype from '@/components/Logotype.vue'
export default {
  name: 'Preview',
  components: {
    Logotype
  },
	mounted () {
		setTimeout(() => {
			this.$router.push('/auth-user')
		}, 1000);
	}
}
</script>

<style lang="scss">
	.Preview {
		display: flex;
		align-items: center;
		justify-content: center;
		background: var(--col-2);
		height: 100vh;
	}
</style>
