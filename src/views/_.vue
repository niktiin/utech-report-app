<template>
  <div class="_">
    <div>
			<img src="@/assets/image.svg" alt="">
			<headline title="title" subtitle="subtitle"/>
		</div>
		<chip-radio label="Button Chip" class="chip__light"/>
		<chip-radio label="Button Chip " class="chip__active"/>
		<chip-radio label="Button Chip"/>
		<button-nav-action label="next" icon="add"/>
		<logotype />
		<form-report />
  </div>
</template>

<script>
// @ is an alias to /src
import Headline from '@/components/Headline.vue'
import ButtonNavAction from '@/components/ButtonNavAction.vue'
import Logotype from '@/components/Logotype.vue'
import FormReport from '@/components/FormReport.vue'
export default {
  name: 'page',
  components: {
    Headline, ButtonNavAction, Logotype, FormReport
  }
}
</script>
