<template>
    <div>
      <h1>Welcome to TheChatApp!</h1>
      
      <router-link to="/">Home</router-link>
      <router-link to="/account">Account</router-link>
      <router-view></router-view>
  </div>
</template>

<script>
import Hello from './components/Hello.vue'
import Info from './components/Info.vue'

export default {
  components: {
    Hello,
    Info,
  },
}
</script>

<style>
  body {
    font-family: sans-serif;
    padding: 10px;
  }
</style>
