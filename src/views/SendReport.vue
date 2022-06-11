<template>
  <div class="sendReport">
		<img class="sendReport_image" src="@/assets/image.svg" alt="">
		<div class="sendReport_content">
			<headline :title="store.title" :subtitle="store.subtitle"/>
		</div>
  </div>
</template>

<script>
import Headline from '@/components/Headline.vue'

export default {
  name: 'sendReport',
	components: {
    Headline
  },
	data : function() {
		return {
			transition: true,
			store: {
					title: 'Отчет отправлен!',
					subtitle: 'Никита, отчет за 03.06.2022 отправлен',
				}
		}
	}
}
</script>

<style lang="scss">
		@keyframes sendReport_image__move {
			0% {transform: translateY(-50%);}
			100% {transform: translateY(0);}
		}
		@keyframes sendReport_content__move {
			0% {transform: translateY(+50%);}
			100% {transform: translateY(0);}
		}
	.sendReport {
		&_image {
			width: 100%;
			transform: translateY(-50%);
			animation: sendReport_image__move 0.25s forwards ease-out;
		}
		&_content {
			margin: 48px 24px 96px 24px;
			transform: translateY(+50%);
			animation: sendReport_content__move 0.25s forwards ease-out;
			display: flex;
			flex-direction: column;
			gap: 24px;
		}
		&_list {
			display: flex;
			flex-direction: column;
			gap: 12px;
		}
	}
	
</style>