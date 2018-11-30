<!-- Index -->
<template>
  <div>
    <img v-lazy="{src:$baseUrl+'__imgs/common/timg.png',loading:$baseUrl+'__imgs/common/timg.png'}"
         alt="">

    <el-input placeholder="请输入内容"
              v-model="input"
              clearable>
    </el-input>
    <el-button type="primary"
               @click="submit">submit</el-button>
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
      input: '',
      imgUrl: ''
    }
  },
  computed: {},

  watch: {},

  created () { },

  mounted () { },

  destroyed () { },

  methods: {
    submit () {
      this.$store
        .dispatch('getCompanyCour', { companyName: this.input }).then((res) => {
          console.log(res)
        })
    }
  }
}

</script>
<style lang='scss' scoped>
</style>
