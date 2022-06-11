<template>
  <div class="AuthUser">
		<img class="AuthUser_image" src="@/assets/image.svg" alt="">
		<div class="AuthUser_content">
			<headline :title="store.title" :subtitle="store.subtitle"/>
			<div class="AuthUser_list">
				<chip-radio
					v-for="(user, index) in store.users"
					:key="index"
					:label="user.name + ' ' + user.lastname"
					@UpdateChipRadioSelect="UpdateChipRadioSelect(index)"
					:select="user.select"
					:props="['noButtonIcon']"
					:index="index"
				/>
			</div>
			<button-nav-action v-show="showNavigation" label="Далее" :action="buttonNavAction"/>
		</div>
  </div>
</template>

<script>
// @ is an alias to /src
import Headline from '@/components/Headline.vue'
import ChipRadio from '@/components/ChipRadio.vue'
import ButtonNavAction from '@/components/ButtonNavAction.vue'

export default {
  name: 'AuthUser',
  components: {
    Headline, ChipRadio, ButtonNavAction
  },
	data : function() {
		return {
			showNavigation: false,
			transition: true,
			buttonNavAction: {
				type: 'route',
				route: '/report-create'
			},
			store: {
					title: 'Авторизация',
					subtitle: 'Выбирете из списка вашу фамилию и имя',
					users: [
						{
							name: 'Nikita',
							lastname: 'Nikitin',
							select: false
						},
						{
							name: 'Vlad',
							lastname: 'Vladow',
							select: false
						},
						{
							name: 'Vlad',
							lastname: 'Vladow',
							select: false
						},
						{
							name: 'Vlad',
							lastname: 'Vladow',
							select: false
						},
						{
							name: 'Vlad',
							lastname: 'Vladow',
							select: false
						}
					],
				}
		}
	},
	methods: {
		UpdateChipRadioSelect(index) {
			this.store.users.forEach(element => {
				element.select = false
			});
			this.showNavigation = true
			this.store.users[index].select = true
		}
	}
}
</script>

<style lang="scss">
		@keyframes AuthUser_image__move {
			0% {transform: translateY(-50%);}
			100% {transform: translateY(0);}
		}
		@keyframes AuthUser_content__move {
			0% {transform: translateY(+50%);}
			100% {transform: translateY(0);}
		}
	.AuthUser {
		&_image {
			width: 100%;
			transform: translateY(-50%);
			animation: AuthUser_image__move 0.25s forwards ease-out;
		}
		&_content {
			margin: 48px 24px 96px 24px;
			transform: translateY(+50%);
			animation: AuthUser_content__move 0.25s forwards ease-out;
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