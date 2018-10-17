<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />

    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <div>asd</div>
    <count-to class="card-panel-num"
              :startVal="0"
              :endVal="9280"
              v-if="sdsdsad"
              :duration="3200">
    </count-to>

  </div>
</template>

<script>
// @ is an alias to /src
import CountTo from 'vue-count-to'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  data () {
    return {
      sdsdsad: false
    }
  },
  name: 'home',
  mounted () {
    setTimeout(() => {
      this.sdsdsad = true
    }, 4000)
  },
  components: {
    HelloWorld,
    CountTo
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
