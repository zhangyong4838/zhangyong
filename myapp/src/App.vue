<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <!--组件通信 -->
    <communication></communication>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import communication from './components/communication'

export default {
  name: 'app',
  props :{
    msg:String
  },
  components: {
    HelloWorld,
    communication
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
