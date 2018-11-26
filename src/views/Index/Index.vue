<!-- Index -->
<template>
  <div style="height:100%">
    <router-link to="/contacts">
      <!-- <progressive-background :src="$baseUrl+ '__imgs/index/index.jpg'"
                              aspect-ratio=".625" /> -->

      <div class="background-img"></div>
    </router-link>

  </div>
</template>

<script>
export default {
  name: 'Index',

  mixins: [],

  components: {},

  props: {},

  data () {
    return {

    }
  },
  computed: {},

  watch: {},

  created () { },

  mounted () { },

  destroyed () { },

  methods: {}
}

</script>
<style lang='scss' scoped>
a {
  display: block;
  height: 100%;
}
.background-img {
  width: 100%;
  height: 100%;
  background: url('/__imgs/index/index.jpg') no-repeat center;
  background-size: 100% 100%;
}
</style>
