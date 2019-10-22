<template>
  <div id="app">
    <div class="header"></div>
    <div class="content">
      <md-tabs>
        <md-tab id="tab-home" md-label="Home" md-icon="home">
          <FlightPage></FlightPage>
        </md-tab>
        <md-tab id="tab-pages" md-label="Pages" md-icon="pages">
          BBB
        </md-tab>
        <md-tab id="tab-posts" md-label="Posts" md-icon="android">
          AAA
        </md-tab>
        <md-tab id="tab-favorites" md-label="Favorites" md-icon="favorite">
          DDD
        </md-tab>
      </md-tabs>
      <!-- <router-view/> -->
    </div>
    <div class="footer"></div>
  </div>
</template>
<script>
import FlightPage from './views/FlightsPage';

export default {
  name: 'App',
  components: {
    FlightPage
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-flow: column
}
.footer, .header {
  height: 100px;
  background-color: aqua;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
