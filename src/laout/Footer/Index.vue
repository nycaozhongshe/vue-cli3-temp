<!-- Footer -->
<template>
  <el-footer class="footer">
    <div>
      footer
      <span v-for="(item,index) in navLsit"
            :key="index"
            v-if="!item.footerHidden">
        {{$t('router.'+item.name)}}
      </span> <br>
    </div>
  </el-footer>
</template>

<script>
export default {
  name: 'Footer',

  mixins: [],

  components: {},

  props: {},

  data () {
    return {

    }
  },
  computed: {
    navLsit () {
      return this.$router.options.routes
    }
  },

  watch: {

  },

  created () { },

  mounted () {
    console.log(this.$router.options.routes)
  },

  destroyed () { },

  methods: {}
}

</script>
<style lang='scss' scoped>
.footer {
  max-width: 11rem;
  margin: 0 auto;
}
</style>
