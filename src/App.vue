<template>
  <div id="app">
    <el-container direction="vertical">
      <!-- <Header></Header> -->
      <el-main>
        <keep-alive v-if="isRouterAlive">
          <router-view />
        </keep-alive>
      </el-main>
      <!-- <Footer style="height:auto;"></Footer> -->
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

<style lang="scss" >
#app {
  width: 100%;
  height: 100%;
  .el-container {
    height: 100%;
  }
  .el-main {
    padding: 0;
    height: 100%;
  }
}
</style>
