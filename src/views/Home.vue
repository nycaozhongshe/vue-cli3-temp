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

export default {
  data () {
    return {
      sdsdsad: false
    }
  },
  name: 'home',
  mounted () {
    setTimeout(() => {
      console.log(1111)

      this.sdsdsad = true
    }, 4000)
  },
  components: {
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
