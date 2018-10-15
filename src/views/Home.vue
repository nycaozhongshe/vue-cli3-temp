<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  metaInfo: {
    title: 'My Example App', // set a title
    meta: [
      {
        // set meta
        name: 'keyWords',
        content: 'My Example App'
      }
    ]
  }
}
</script>
