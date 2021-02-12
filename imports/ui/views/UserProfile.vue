<template>
  <div>
    <h2>Learn Meteor!</h2>
    <ul>
      <li>
        <form class="info-link-add">
          <input type="text" v-model="title" name="title" placeholder="Title" required>
          <input type="url" v-model="url" name="url" placeholder="Url" required>
          <input type="submit" name="submit" @click="submit($event)" value="Add new link">
        </form>
      </li>
      <li v-for="(link, index) in links" :key="index">
          <a :href="link.url" target="_blank">{{link.title}}</a>
            <button @click="deleteMe(link._id)" color="red">
                DELETE
            </button>
    </li>
    </ul>
  </div>
</template>

<script>
import Links from '../../api/collections/Links'

export default {
  data() {
    return {
      title: "",
      url: "",
    }
  },
  meteor: {
    $subscribe: {
      'links': [],
    },
    links () {
      return Links.find({})
    }
  },
  methods: {
    submit(event) {
      event.preventDefault()
      Meteor.call('createLink', this.title, this.url, (error) => {
        if (error) {
          alert(error.error)
        } else {
          this.title = ''
          this.url = ''
        }
      })
    },
    deleteMe(id){
        Meteor.call('removeLink', id, (error) => {
            if (error) {
                alert("Suppress error"+error.error)
            }
        })
    }
  },
}
</script>

<style scoped>
  ul {
    font-family: monospace;
  }
</style>
