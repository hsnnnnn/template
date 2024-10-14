<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  mounted() {
    created() {
  fetch('/api/users')
    .then(response => response.json())
    .then(data => {
      console.log(data); // Mock veriler dönecektir
    });
}
  }
}
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
