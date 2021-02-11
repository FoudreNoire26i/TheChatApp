<template>
    <div>
      <h1>Welcome to TheChatApp!</h1>
      
      <router-link to="/">Home</router-link>
      <router-link to="/account">Account</router-link>
      <router-view></router-view>
  </div>
</template>

<script>

export default {
}
</script>

<style>
  body {
    font-family: sans-serif;
    padding: 10px;
  }
</style>
