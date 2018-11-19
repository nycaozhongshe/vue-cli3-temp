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

      <el-button @click="switchLanguage('en')">切换英语</el-button>
      <el-button @click="switchLanguage('cn')">切换汉语</el-button>

    </div>

  </el-header>
</template>

<script>
import MenuItem from './MenuItem'
import { saveLang, getLang } from '@/utils'

export default {
  name: 'Header',
  inject: ['reload'],
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
      let lang = getLang()

      if (lang === language) return

      this.$i18n.locale = language // 切换

      saveLang(language) // 保存本地持久化

      this.reload()
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
