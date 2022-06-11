<template>
  <div class="CreateReport">
		<div class="CreateReport_imageWrapper">
			<img
				class="CreateReport_image"
				src="@/assets/image.svg"
				alt="">
		</div>
		<div class="CreateReport_content">
			<headline
				class="CreateReport_headline"
				:title="store.title"
				:subtitle="store.subtitle"/>
			<div class="CreateReport_list">
				<form-report
					v-for="(formReport, index) in store.formReports"
					:key="index"/>
			</div>
			<div class="CreateReport_nav nav">
				<button-nav-action
					v-if="store.formReports.length < 1"
					class="nav_add"
					label="Добавить"
					icon="add"
					:action="buttonNavAction.action"
					@formReportActionAdd="formReportActionAdd()"/>
				<div class="nav_group" v-else>
					<button-nav-action 
						class="nav_send"
						label="Далее"
						icon=""
						:action="buttonNavAction.route" />
					<button-nav-action
						class="nav_add"
						label=""
						icon="add"
						:action="buttonNavAction.action"
						@formReportActionAdd="formReportActionAdd()"/>
				</div>
			</div>
		</div>
  </div>
</template>

<script>
// @ is an alias to /src
import Headline from '@/components/Headline.vue'
import FormReport from '@/components/FormReport.vue'
import ButtonNavAction from '@/components/ButtonNavAction.vue'

export default {
  name: 'CreateReport',
  components: {
    Headline, FormReport, ButtonNavAction
  },
	data : function() {
		return {
			showNavigation: false,
			transition: true,
			buttonNavAction: {
				action: {
					type: 'action',
					action: 'formReportActionAdd'
				},
				route: {
					type: 'route',
					route: '/schedule'
				}
			},
			store: {
					title: 'Обслуживание самокатов',
					subtitle: 'Составте отчет о проделанной сегодня работе',
					formReports: []
				}
		}
	},
	methods: {
		formReportActionAdd() {
			this.store.formReports.push('')
		}
	},
}
</script>

<style lang="scss">
		@keyframes CreateReport_image__move {
			0% {height: 296px;}
			100% {height: 96px;}
		}
	.CreateReport {
		&_imageWrapper {
			width: 100%;
			height: 296px;
			overflow: hidden;
			position: relative;
			animation: CreateReport_image__move 0.25s forwards ease-out;
		}
		&_image {
			position: absolute;
			bottom: 0;
			width: 100%;
			// transform: translateY(-50%);
			// animation: CreateReport_image__move 0.25s forwards ease-in-out;
		}
		&_headline {
			margin: 0 12px;
		}
		&_content {
			margin: 48px 12px 96px 12px;
			// transform: translateY(+50%);
			// animation: CreateReport_content__move 0.25s forwards ease-in-out;
			display: flex;
			flex-direction: column;
			gap: 24px;
		}
		&_list {
			display: flex;
			flex-direction: column;
			gap: 12px;
		}
		.nav {
			&_group {
				display: flex;
				flex-direction: row;
				gap: 12px;
			}
			&_add {
				flex-shrink: 3;
			}
		}
	}
	
</style>