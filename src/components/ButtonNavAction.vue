<template>
	<button class="buttonNavAction" @click="setAction()">
		<span class="buttonNavAction_icon material-icons">{{icon}}</span>
		<span v-show="label" class="buttonNavAction_label">{{label}}</span>
	</button>
</template>

<script>
export default {
  name: 'buttonNavAction',
	props: ['label', 'icon', 'action'],
	methods: {
		setAction () {
			switch (this.action.type) {
				case 'route':
					this.$router.push(this.action.route)
					break;
				case 'action':
					this.$emit(this.action.action)
					break;
				default:
					break;
			}
		}
	}
}
</script>
<style lang="scss">
	// Animation
	@keyframes buttonNavAction_active{
		0% {transform: scale(1);}
		50% {transform: scale(1.025);}
		100% {transform: scale(1);}
	}
	// Element styles
	.buttonNavAction {
		bottom: 0;
		border: none;
		min-width: 60px;
		background: var(--col-2);
		color: white;
		font-weight: bold;
		text-transform: uppercase;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		padding: 16px;
		width: 100%;
		border-radius: 12px;
		&_label {
			margin: 2px 0 0 0;
			font-size: 20px;
		}
		&_icon {
			font-size: 36px;
		}
		// State
		&:active {
			animation: chipRadio_active 0.25s forwards ease-in-out;
		}
	}
</style>