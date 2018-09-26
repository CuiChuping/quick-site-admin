<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  name: 'App',
  components: { Header }
}
</script>

<style>
#app {
  margin: 0;
  padding: 0;
  color: #324057;
}
</style>
