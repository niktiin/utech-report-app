<template>
  <div id="app">
		<!-- <nav>
			<router-link to="/preview">preview</router-link>
			<router-link to="/_">test</router-link>
			<router-link to="/auth">auth</router-link>
			<router-link to="/report-create">reportCreate</router-link>
			<router-link to="/schedule">schedule</router-link>
			<router-link to="/send">Send</router-link>
		</nav> -->
		<router-view class="view"/>
  </div>
</template>

<style lang="scss">
:root {
	--col-1: #6B54BF;
	--col-2: #7C67C9;
	--col-3: #9784D9;
	--col-4: #C1B3F2;
	--col-5: #D3D3D3;
	--col-6: #898989;
	--col-7: #272430;
	--col-8: #BCBCBC;
}
@font-face {
  font-family: "ibm_plex";
  src: url("/assets/IBMPlexSans-Regular.ttf");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "ibm_plex";
  src: url("/assets/IBMPlexSans-Medium.ttf");
  font-weight: bold;
  font-style: normal;
}
* {
	box-sizing: border-box;
}
#app {
  font-family: 'ibm_plex', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
// .view {
// 	width: 390px;
// 	height: 844px;
// 	overflow-y: scroll;
// }
</style>
