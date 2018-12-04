<!--  -->
<template>
  <el-header style="height:110px">
    <div class="header-content">
      <div class="logo">
        <router-link to="/">
          <img :src="$baseUrl+'__imgs/common/logo.jpg'"
               alt="logo">
        </router-link>
      </div>
      <div class="header-right">
        <div class="function">
          <div class="links">
            <span>
              中国万达
            </span>
            |
            <span>
              加入我们
            </span>
            |
            <span class="lang"
                  :class="{actvie:lang==='cn'}"
                  @click="switchLanguage('cn')">
              中文
            </span>
            /
            <span class="lang"
                  :class="{actvie:lang==='en'}"
                  @click="switchLanguage('en')">
              EN
            </span>
          </div>

          <el-input placeholder="请输入内容"
                    class="search"
                    v-model="input">
            <i slot="suffix"
               class="el-input__icon el-icon-search"></i>
          </el-input>

        </div>

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

      </div>
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
      input: '',
      lang: null
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
  created () {
    this.savelang()
  },
  mounted () {

  },

  methods: {
    handleSelect (key, keyPath) {
    },
    savelang (lang) {
      this.lang = lang || getLang()
      console.log(this.lang)
    },
    switchLanguage (language) {
      let lang = getLang()
      if (lang === language) return
      this.$i18n.locale = language // 切换
      saveLang(language) // 保存本地持久化
      this.savelang(language) //

      this.reload()
    }

  }
}

</script>
<style lang='scss' scoped>
.header-content {
  // border: 1px solid red;
  max-width: 11rem;
  margin: 0 auto;
  height: 1.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    width: 5.3rem;
    height: 0.5rem;
    img {
      height: 100%;
    }
  }
  .header-right {
    height: 100%;
  }
  .function {
    padding-top: 0.15rem;
    height: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .links {
      font-size: 0.14rem;
      color: $--color-text-regular;
      span {
        margin-right: 0.1rem;
        margin-left: 0.1rem;
        &:last-child {
          margin-left: 0rem;
        }
        &:nth-child(3) {
          margin-right: 0;
        }
      }

      span:hover {
        cursor: pointer;
        color: $--color-text-primary;
      }
      .lang.actvie {
        color: $--color-primary;
      }
    }
    .search {
      width: 1.58rem;
    }
  }
}
</style>
