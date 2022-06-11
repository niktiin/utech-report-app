<template>
  <div class="scheduleUser">
		<img class="scheduleUser_image" src="@/assets/image.svg" alt="">
		<div class="scheduleUser_content">
			<headline class="scheduleUser_title" title="Выбирете дату отчета" subtitle=""/>
			<div class="scheduleUser_group">
				<p class="scheduleUser_subtitle">Выбирете дату отчета</p>
				<div class="scheduleUser_list">
					<chip-radio
						v-for="(chip, index) in store.radio.date"
						:key="index"
						:label="chip.label"
						@UpdateChipRadioSelect="UpdateChipRadioSelect(index, 'date')"
						:select="chip.select"
						icon="calendar_month"
						:props="['noIcon']"
						:index="index"
					/>
				</div>
			</div>
			<div class="scheduleUser_group">
				<p class="scheduleUser_subtitle">Выберите количество рабочих часов</p>
				<div class="scheduleUser_list">
					<chip-radio
						v-for="(chip, index) in store.radio.time"
						:key="index"
						:label="chip.label"
						@UpdateChipRadioSelect="UpdateChipRadioSelect(index, 'time')"
						:select="chip.select"
						icon="schedule"
						:props="['noIcon']"
						:index="index"
					/>
				</div>
			</div>
			<div class="scheduleUser_group">
				<p class="scheduleUser_subtitle">Выберите место работы</p>
				<div class="scheduleUser_list">
					<chip-radio
						v-for="(chip, index) in store.radio.place"
						:key="index"
						:label="chip.label"
						@UpdateChipRadioSelect="UpdateChipRadioSelect(index, 'place')"
						:select="chip.select"
						icon="pin_drop"
						:props="['noIcon']"
						:index="index"
					/>
				</div>
			</div>
			<button-nav-action v-show="showNavigation" icon="mail" label="Отправить" :action="ButtonNavAction"/>
		</div>
  </div>
</template>

<script>
// @ is an alias to /src
import Headline from '@/components/Headline.vue'
import ChipRadio from '@/components/ChipRadio.vue'
import ButtonNavAction from '@/components/ButtonNavAction.vue'

export default {
  name: 'scheduleUser',
  components: {
    Headline, ChipRadio, ButtonNavAction
  },
	data : function() {
		return {
			transition: true,
			ButtonNavAction: {
				type: 'route',
				route: '/send-report'
			},
			store: {
					radio: {
						date: [
							{
								label: "Сегодня",
								select: false
							},
							{
								label: "Выбрать другую дату",
								select: false
							}
						],
						time: [
							{
								label: "8 часов",
								select: false
							},
							{
								label: "12 часов",
								select: false
							}
						],
						place: [
							{
								label: "В полях",
								select: false
							},
							{
								label: "В сервисном центре",
								select: false
							}
						]
					}
				}
		}
	},
	computed: {
		showNavigation () {
			return true;
		}
	},
	methods: {
		UpdateChipRadioSelect(index, group) {
			this.store.radio[group].forEach(element => {
				element.select = false
			});
			this.store.radio[group][index].select = true
		}
	}
}
</script>

<style lang="scss">
		@keyframes scheduleUser_image__move {
			0% {transform: translateY(-50%);}
			100% {transform: translateY(0);}
		}
		@keyframes scheduleUser_content__move {
			0% {transform: translateY(+50%);}
			100% {transform: translateY(0);}
		}
	.scheduleUser {
		&_image {
			width: 100%;
			transform: translateY(-50%);
			animation: scheduleUser_image__move 0.25s forwards ease-out;
		}
		&_content {
			margin: 48px 24px 96px 24px;
			transform: translateY(+50%);
			animation: scheduleUser_content__move 0.25s forwards ease-out;
			display: flex;
			flex-direction: column;
			gap: 24px;
		}
		&_list {
			display: flex;
			flex-direction: column;
			gap: 12px;
			margin-top: 12px;
		}
		&_subtitle {
			font-size: 16px;
			margin: 0;
			color: var(--col-6);
		}
	}
	
</style>