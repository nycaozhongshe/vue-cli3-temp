<!--  -->
<template>
  <el-header>
    <div class="header-content">
      <div class="logo"></div>
      <el-menu :default-active="$route.path"
               class="header-nav"
               mode="horizontal"
               @select="handleSelect"
               router>
        <Menu-Item v-if="item.path"
                   v-for="item in navLsit"
                   :menu="item"
                   :key="item.name">
        </Menu-Item>
      </el-menu>

      <button @click="switchLanguage('en')">切换英语</button><br>
      <button @click="switchLanguage('cn')">切换汉语</button><br>
    </div>

  </el-header>
</template>

<script>
import MenuItem from './MenuItem'

export default {
  name: 'Header',
  data () {
    return {
    }
  },

  components: {
    MenuItem
  },

  computed: {
    navLsit () {
      return this.$router.options.routes
    }
  },

  mounted () {
  },

  methods: {
    handleSelect (key, keyPath) {
    },
    switchLanguage (language) {
      this.$i18n.locale = language
    }
  }
}

</script>
<style lang='scss' scoped>
.header-content {
  display: flex;
  .logo {
    width: 200px;
  }
  .header-nav {
    flex: 1;
  }
}
</style>
