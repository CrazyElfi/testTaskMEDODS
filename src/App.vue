<template>
  <div id="app">
    <createClient />
  </div>
</template>

<script>
import createClient from './components/CreateClient.vue'

export default {
  name: 'App',
  components: {
    createClient
  }
}
</script>

<style lang="sass">
#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50
  margin-top: 60px

#app img
  width: 50px

</style>
