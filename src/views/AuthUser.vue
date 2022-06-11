<template>
  <div class="AuthUser">
		<img class="AuthUser_image" src="@/assets/image.svg" alt="">
		<div class="AuthUser_content">
			<headline :title="store.title" :subtitle="store.subtitle"/>
			<div class="AuthUser_list">
				<chip-radio
					v-for="(user, index) in store.users"
					:key="index"
					:label="user.name + ' ' + user.lastname + ' ' +user.surname"
					@UpdateChipRadioSelect="UpdateChipRadioSelect(index)"
					:select="user.select"
					:props="['noButtonIcon']"
					:index="index"
				/>
			</div>
		</div>
		<div class="nav__fixedWrapper">
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
				route: '/create-report'
			},
			store: {
					title: 'Авторизация',
					subtitle: 'Выбирете из списка вашу фамилию и имя',
					users: [
						{
							"name": "Никита",
							"lastname": "Никитин",
							"surname": "Сергеевич",
							"select": false
						},
						{
							"name": "Умар",
							"lastname": "Белхароев",
							"surname": "Джамалейлович",
							"select": false
						},
						{
							"name": "Фирдавс",
							"lastname": "Юнусов",
							"surname": "Сафарбекович",
							"select": false
						},
						{
							"name": "Шодбахт",
							"lastname": "Юнусов",
							"surname": "Юнусов Шодбахт",
							"select": false
						},
						{
							"name": "Адам",
							"lastname": "Оздоев",
							"surname": "Амирханович",
							"select": false
						},
						{
							"name": "Мурад",
							"lastname": "Рамазанов",
							"surname": "Эдуардович",
							"select": false
						},
						{
							"name": "Дилшод",
							"lastname": "Негматов",
							"surname": "Негматович",
							"select": false
						},
						{
							"name": "Тимур",
							"lastname": "Балаев",
							"surname": "Беланович",
							"select": false
						},
						{
							"name": "Астемир",
							"lastname": "Бацежев",
							"surname": "Хасанбиевич",
							"select": false
						},
						{
							"name": "Ибрагим",
							"lastname": "Осканов",
							"surname": "Магомедович",
							"select": false
						},
						{
							"name": "Рафат",
							"lastname": "Абдуллин",
							"surname": "Мансурович",
							"select": false
						},
						{
							"name": "Руслан",
							"lastname": "Алыев",
							"surname": "Оглы",
							"select": false
						},
						{
							"name": "Давид",
							"lastname": "Давришов",
							"surname": "Отарович",
							"select": false
						},
						{
							"name": "Зураб",
							"lastname": "Давришов",
							"surname": "Важаевич",
							"select": false
						},
						{
							"name": "Бакыт",
							"lastname": "Ишембаев",
							"surname": "Максатовч",
							"select": false
						},
						{
							"name": "Мовсар",
							"lastname": "Осканов",
							"surname": "Магомед-Баширович",
							"select": false
						},
						{
							"name": "Алексей",
							"lastname": "Телегин",
							"surname": "Эдуардович",
							"select": false
						},
						{
							"name": "Тилек",
							"lastname": "Тобокелов",
							"surname": "Тобокелов Тилек",
							"select": false
						},
						{
							"name": "Илья",
							"lastname": "Табункин",
							"surname": "Сергеевич",
							"select": false
						},
						{
							"name": "Элеман",
							"lastname": "Тыныстанов",
							"surname": "Тыныстанов Элеман",
							"select": false
						},
						{
							"name": "Андрей",
							"lastname": "Чирков",
							"surname": "Николаевич",
							"select": false
						},
						{
							"name": "Равиль",
							"lastname": "Сабиров",
							"surname": "Рашидович",
							"select": false
						},
						{
							"name": "Дмитрий",
							"lastname": "Голдобин",
							"surname": "Юрьевич",
							"select": false
						},
						{
							"name": "Даниил",
							"lastname": "Кулешов",
							"surname": "Андреевич",
							"select": false
						},
						{
							"name": "Александр",
							"lastname": "Волков",
							"surname": "Олегович",
							"select": false
						},
						{
							"name": "Илья",
							"lastname": "Краморенко",
							"surname": "Григорьевич",
							"select": false
						},
						{
							"name": "Александр",
							"lastname": "Ганюков",
							"surname": "Сергеевич",
							"select": false
						},
						{
							"name": "Олег",
							"lastname": "Шатров",
							"surname": "Николаевич",
							"select": false
						},
						{
							"name": "Рустам",
							"lastname": "Вахаев",
							"surname": "Саламбекович",
							"select": false
						},
						{
							"name": "Ибрагим",
							"lastname": "Вахаев",
							"surname": "Саламбекович",
							"select": false
						},
						{
							"name": "Вадим",
							"lastname": "Косолапов",
							"surname": "Сергеевич",
							"select": false
						},
						{
							"name": "Александр",
							"lastname": "Тимохов",
							"surname": "Валерьевич",
							"select": false
						},
						{
							"name": "Курбан",
							"lastname": "Хайбулаев",
							"surname": "СагидАлиевич",
							"select": false
						},
						{
							"name": "Константин",
							"lastname": "Епифанцев",
							"surname": "Иванович",
							"select": false
						},
						{
							"name": "Кадыр",
							"lastname": "Джанбалаев",
							"surname": "Ферухович",
							"select": false
						},
						{
							"name": "Владимир",
							"lastname": "Агафонов",
							"surname": "Александрович",
							"select": false
						},
						{
							"name": "Артем",
							"lastname": "Кармилаев",
							"surname": "Сергеевич",
							"select": false
						},
						{
							"name": "Роман",
							"lastname": "Мосин",
							"surname": "Александрович",
							"select": false
						},
						{
							"name": "Олег",
							"lastname": "Сунцов",
							"surname": "Сергеевич",
							"select": false
						},
						{
							"name": "Абдурзак",
							"lastname": "Оруджев",
							"surname": "оглы",
							"select": false
						},
						{
							"name": "Александр",
							"lastname": "Гондусов",
							"surname": "Владимирович",
							"select": false
						},
						{
							"name": "Илья",
							"lastname": "Шатров",
							"surname": "Александрович",
							"select": false
						},
						{
							"name": "Александр",
							"lastname": "Постников",
							"surname": "Юрьевич",
							"select": false
						},
						{
							"name": "Лев",
							"lastname": "Черников",
							"surname": "Витальевич",
							"select": false
						},
						{
							"name": "Руслан",
							"lastname": "Буранов",
							"surname": "Аликович",
							"select": false
						},
						{
							"name": "Эмиль",
							"lastname": "Сабитов",
							"surname": "Жалильевич",
							"select": false
						},
						{
							"name": "Алексей",
							"lastname": "Юзвяк",
							"surname": "Юрьевич",
							"select": false
						},
						{
							"name": "Никита",
							"lastname": "Башкиров",
							"surname": "Владимирович",
							"select": false
						},
						{
							"name": "Тимур",
							"lastname": "Абдуллаев",
							"surname": "угли",
							"select": false
						},
						{
							"name": "Александр",
							"lastname": "Клестер",
							"surname": "Александрович",
							"select": false
						},
						{
							"name": "Роман",
							"lastname": "Филимонов",
							"surname": "Александрович",
							"select": false
						},
						{
							"name": "Владислав",
							"lastname": "Татаров",
							"surname": "Викторович",
							"select": false
						},
						{
							"name": "Александр",
							"lastname": "Артемов",
							"surname": "Анатольевич",
							"select": false
						},
						{
							"name": "Давид",
							"lastname": "Махов",
							"surname": "Низамиевич",
							"select": false
						},
						{
							"name": "Алексей",
							"lastname": "Борисов",
							"surname": "Андреевич",
							"select": false
						},
						{
							"name": "Николай",
							"lastname": "Даровских",
							"surname": "Юрьевич",
							"select": false
						}
					]
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
	.nav {
		&__fixedWrapper {
			background: white;
			width: 100vw;
			padding: 12px 24px;
			position: fixed;
			bottom: 0;
		}
	}
	
</style>