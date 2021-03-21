<template>
  <div id="app">
    <HelloWorld msg="Init aplication test"/>
    <CardsComponent />
  </div>
</template>

<script>
import CardsComponent from './components/CardsComponent.vue'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    CardsComponent
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
