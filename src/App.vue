<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <v-checkbox >是否同意</v-checkbox>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import VCheckbox from "@/checkbox/checkbox.vue";

export default {
  name: 'App',
  components: {
    HelloWorld,
    VCheckbox
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
