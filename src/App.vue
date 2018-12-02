<template>
  <div id="app">
    <el-container direction="vertical">
      <Header></Header>
      <el-main>
        <keep-alive v-if="isRouterAlive">
          <router-view />
        </keep-alive>
      </el-main>
      <Footer style="height:auto;"></Footer>
    </el-container>
  </div>
</template>

<script>
import Header from './laout/Header/Index.vue'
import Footer from './laout/Footer/Index'
export default {
  name: 'App',
  provide () { // 注册一个方法
    return {
      reload: this.reload
    }
  },

  components: {
    Header,
    Footer
  },
  data () {
    return {
      set: false,
      isRouterAlive: true
    }
  },

  created () { },

  mounted () { },

  methods: {
    reload () {
      this.isRouterAlive = false
      this.$nextTick(function () {
        this.isRouterAlive = true
      })
    }

  }
}
</script>

<style lang="scss">
// 注意这里没有使用@import
// 全局font-size: 20px;
// 变量$text-color、$theme-color
// 和button()的mixin是借助sass-resources-loader实现的
@media only screen and (min-width: 320px) {
  html {
    font-size: 62.5% !important;
  }
}
@media only screen and (min-width: 640px) {
  html {
    font-size: 125% !important;
  }
}
@media only screen and (min-width: 750px) {
  html {
    font-size: 150% !important;
  }
}
@media only screen and (min-width: 1242px) {
  html {
    font-size: 187.5% !important;
  }
}
</style>
