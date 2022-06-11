<template>
	<div
		class="chipRadio"
		@click="emitActionSelect()"
		:class="{'chipRadio__active': select, 'chipRadio__light': getProps('light')}"
	>
		<div>
			<span
				class="chipRadio_icon material-icons"
				:class="{'chipRadio_icon__resize': getProps('icon24px')}"
				>{{selectIcon()}}</span>
			<span class="chipRadio_label">{{label}}</span>
		</div>
		<button
			class="chipRadio_button material-icons"
			v-show="!getProps('noButtonIcon')">
			info
		</button>
	</div>
</template>

<script>
export default {
  name: 'chipRadio',
	props: {
		label: {},
		select: {},
		props: {},
		icon: {
			default: null
		}
	},
	data: function () {
		return ({
			icons: [
				'radio_button_unchecked',
				'radio_button_checked'
			]
		})
	},
	methods: {
		getProps (prop) {
			return this.props.includes(prop)
		},
		emitActionSelect () {
			this.$emit('UpdateChipRadioSelect')
		},
		selectIcon () {
			if (this.icon) {
				return this.icon
			}
			return this.icons[+ this.select]
		}
	}
}
</script>

<style lang="scss">
	// Animation
	@keyframes chipRadio_active{
		0% {transform: scale(1);}
		50% {transform: scale(1.025);}
		100% {transform: scale(1);}
	}
	// Element styles
	.chipRadio {
		min-width: 186px;
		background: var(--col-5);
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 16px;
		width: 100%;
		border-radius: 12px;
		div {
			display: flex;
			align-items: center;
			gap: 12px;
			height: inherit;
		}
		&_label {
			margin: 4px 0 0 0;
		}
		&_icon {
			font-size: 16px;
			&__resize {
				font-size: 24px;
			}
		}
		&_button {
			border: none;
			background: none;
			font-size: 24px;
			color: var(--col-6);
		}
		// State
		&__light {
			background: white;
			.chip_button {
				color: var(--col-8);
			}
		}
		&__active {
			background: var(--col-3);
			color: white;
			animation: chipRadio_active 0.25s forwards ease-in-out;	
			font-weight: bold;
			.chipRadio_button {
				color: white;
			}
		}
	}
</style>