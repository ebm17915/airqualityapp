<template>
  <div id="app">
    
    <Airquality/>
  </div>
</template>

<script>
import Airquality from './components/Airquality.vue'

export default {
  name: 'app',
  components: {
    Airquality
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
