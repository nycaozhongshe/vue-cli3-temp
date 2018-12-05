<!-- MoblieMenu -->
<template>
  <div class="moblie-menu__warpper"
       @click.stop="handleClick">
    <el-input placeholder="请输入内容"
              v-model="input23"
              size="mini">
      <i slot="suffix"
         class="el-input__icon el-icon-search">
      </i>
    </el-input>
    <span v-for="(item,index) in navLsit"
          :key="index"
          @click="gotoPage(item.path)">
      {{$t('router.'+item.name)}} <br>
    </span>
  </div>
</template>

<script>
export default {
  name: 'MoblieMenu',

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

  watch: {},

  created () { },

  mounted () { },

  destroyed () { },

  methods: {
    handleClick () {
    },
    close () {
      this.$emit('update:visible', false)
    },
    gotoPage (path) {
      this.$router.push(path)
      this.$emit('update:visible', false)
    }

  }
}

</script>
<style lang='scss' scoped>
.moblie-menu__warpper {
  text-align: center;
  color: #fff;
  line-height: 0.36rem;
  position: absolute;
  top: 90px;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 99999;
  padding: 0.3rem;
}
</style>

<style lang='scss' >
.moblie-menu__warpper {
  .el-input {
    margin-bottom: 0.1rem;
    .el-input__inner {
      background: transparent;
      width: 100%;
      border: none;
      border: 1px solid #fff;
      height: 25px;
      line-height: 25px;
      border-radius: 25px;
      padding-left: 8px;
      color: #fff;
    }
  }
}
</style>
