<template>
	<div class="formReport">
		<div class="formReport_type group">
			<h2 class="group_title">Вид работ</h2>
			<div class="group_list">
				<chip-radio
					v-for="(type, index) in store.radio.type"
					:key="index"
					:label="type.label"
					@UpdateChipRadioSelect="UpdateChipRadioSelect(index, 'type')"
					:select="type.select"
					:props="['light']"
					:index="index"
					icon="build"
				/>
			</div>
		</div>
		<div class="formReport_type group">
			<h2 class="group_title">Модель самоката</h2>
			<div class="group_list">
				<chip-radio
					v-for="(type, index) in store.radio.model"
					:key="index"
					:label="type.label"
					@UpdateChipRadioSelect="UpdateChipRadioSelect(index, 'model')"
					:select="type.select"
					:props="['light', 'icon24px']"
					:index="index"
					icon="two_wheeler"
				/>
			</div>
		</div>
		<div class="formReport_counter group">
			<h2 class="group_title">Количество</h2>
			<div class="group_counterInputs">
				<button
					class="group_button material-icons"
					@click="store.counter--">
					remove
				</button>
				<input v-model="store.counter" type="number" class="group_input">
				<button
					class="group_button material-icons"
					@click="store.counter++">
					add
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import ChipRadio from '@/components/ChipRadio.vue'

export default {
  name: 'formReport',
	components: {
		ChipRadio
	},
	data: function () {
		return ({
			store: {
				counter: 0,
				radio: {
					type : [
						{
							label: 'ТО',
							select: false
						},
						{
							label: 'Ремонт',
							select: false
						},
						{
							label: 'Сборка',
							select: false
						},
						{
							label: 'Разоборудование',
							select: false
						}
					],
					model: [
						{
							label: 'G 30',
							select: false
						},
						{
							label: 'MAX PLUS',
							select: false
						},
						{
							label: 'OKAI 200D',
							select: false
						},
						{
							label: 'OKAI 200B',
							select: false
						}
					]
				}
			}
		})
	},
	methods: {
		UpdateChipRadioSelect(index, group) {
			this.store.radio[group].forEach(element => {
				element.select = false
			});
			this.store.radio[group][index].select = true
		}
	},
}
</script>

<style lang="scss">
	// Animation
	@keyframes formReportCounterButton_active{
		0% {transform: scale(1);}
		50% {transform: scale(1.025);}
		100% {transform: scale(1);}
	}
	// Element styles
	.formReport {
		background: var(--col-4);
		padding: 16px 12px;
		border-radius: 12px;
		font-weight: bold;
		display: flex;
		flex-direction: column;
		gap: 12px;
		&_counter {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
		}
	}
	.group {
		&_title {
			font-weight: bold;
			font-size: 16px;
		}
		&_list {
			display: flex;
			flex-direction: column;
			gap: 12px;
		}
		&_button {
			border: none;
			border-radius: 8px;
			background: var(--col-1);
			color: white;
			font-size: 24px;
			font-weight: bold;
			min-width: 58px;
			min-height: 58px;
			&:active {
				animation: formReportCounterButton_active 0.25s forwards ease-in-out;	
			}
		}
		&_input {
			border: none;
			border-radius: 8px;
			max-width: 64px;
			text-align: center;
			font-weight: bold;
			&::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
      &[type=number] {
        -moz-appearance: textfield;
        /* Firefox */
      }
			&:focus {
				outline: none;
			}
		}
		&_counterInputs {
			display: flex;
			flex-direction: row;
			gap: 8px;
		}
	}
</style>