<template>
    <div>
      <h1>Welcome to TheChatApp!</h1>
      
      <router-link to="/">Home</router-link>
      <router-link to="/account">Account</router-link>
      <router-link v-if="roleAssignment.length>0" to="/admin">Admin Page</router-link>
      <router-view></router-view>
  </div>
</template>

<script>

export default {
    meteor: {
        $subscribe: {
            'roleAssignment' : []
        },
        roleAssignment () {
            return Meteor.roleAssignment.find({'role._id':'admin'})
        }
    },
}
</script>

<style>
  body {
    font-family: sans-serif;
    padding: 10px;
  }
</style>
  