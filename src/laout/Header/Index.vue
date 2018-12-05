<!--  -->
<template>
  <el-header style="height:auto">
    <div class="header-content">

      <div class="logo">
        <div class="moblie-menu"
             v-if="moblie"
             @click="showMenu">
          <Icon :icon-class="menuVisible?'guanbi':'caidan'"
                class-name="icon">
          </Icon>

        </div>
        <div class="img__wrpper">
          <router-link to="/">
            <img :src="$baseUrl+'__imgs/common/logo.jpg'"
                 alt="logo">
          </router-link>
        </div>

      </div>
      <div class="header-right">
        <div class="function">
          <div class="links">
            <div class="wanda"
                 @mouseenter="handleMouseenter()"
                 @mouseleave="handleMouseleave()"
                 @click="handleMouseenter()">
              <span>
                {{$t('header.wanda.label')}}
              </span>

              <el-collapse-transition>
                <div class="float"
                     v-show="wanDashow">
                  <div class="second-subnav">
                    <h4>
                      <a target="_blank"
                         @click.stop="handleMouseleave()"
                         :href="$t('header.wanda.title.href')">
                        {{$t('header.wanda.title.label')}}
                      </a>
                    </h4>
                    <ul class="content">
                      <li v-for="(item,index) in $t('header.wanda.links')"
                          :key="index">
                        <a target="_blank"
                           @click.stop="handleMouseleave()"
                           :href="item.href
                           ">{{item.label}}</a>
                      </li>

                    </ul>

                  </div>

                </div>

              </el-collapse-transition>
            </div>

            <span class="link">
              {{$t('header.join')}}
            </span>

            <div class="lang__warpper">
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

          </div>

          <el-input v-if="!moblie"
                    :placeholder="$t('placeholder.input')"
                    class="search"
                    v-model="input">
            <i slot="suffix"
               class="el-input__icon el-icon-search"></i>
          </el-input>

        </div>

        <!-- <el-menu :default-active="$route.path"
                 class="header-nav"
                 mode="horizontal"
                 @select="handleSelect"
                 router>
          <Menu-Item v-if="item.path"
                     v-for="item in navLsit"
                     :menu="item"
                     :key="item.name">
          </Menu-Item>
        </el-menu> -->

        <Custom-Menu v-if="!moblie"></Custom-Menu>

      </div>

      <el-collapse-transition>

        <Moblie-Menu v-show="menuVisible"
                     :visible.sync="menuVisible">

        </Moblie-Menu>
      </el-collapse-transition>

    </div>

  </el-header>
</template>

<script>
import { saveLang, getLang } from '@/utils'
import Icon from '@/components/Icon'
import MoblieMenu from './MoblieMenu'
export default {
  name: 'Header',
  inject: ['reload'],
  data () {
    return {
      input: '',
      lang: null,
      wanDashow: false,
      icon: 'caidan',
      menuVisible: false
    }
  },

  components: {
    CustomMenu: () => import('./Menu'),
    // MoblieMenu: () => import('./MoblieMenu.vue'),
    MoblieMenu,

    Icon
  },

  computed: {
    navLsit () {
      return this.$router.options.routes
    },
    moblie () {
      return this.$store.getters.moblie
    }
  },
  created () {
    this.savelang()
  },
  mounted () {
    console.log(this.moblie)
  },

  methods: {
    handleMouseenter () {
      this.wanDashow = true
    },
    showMenu () {
      this.menuVisible = !this.menuVisible
    },
    handleMouseleave () {
      this.wanDashow = false
    },
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
    .img__wrpper {
      height: 100%;
    }
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
      font-size: 14px;
      color: $--color-text-regular;
      display: flex;
      width: 3rem;
      .lang__warpper,
      .wanda,
      .link {
        text-align: center;
        width: 33%;
      }
      .lang__warpper,
      .link {
        border-left: 1px solid;
      }
      .wanda {
        display: inline-flex;
        position: relative;
        justify-content: center;
        .float {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          margin-top: 0.2rem;
          // transform: translateX(-50%);
          width: 2.36rem;
          padding: 0.1rem 0.28rem;
          background: #fff;
          box-shadow: $--box-shadow-base;
          // border: 1px solid red;
          z-index: 9999;
          .second-subnav {
            h4 {
              font-size: 0.18rem;
            }
            .content {
              display: flex;
              flex-wrap: wrap;
              justify-content: space-between;
              list-style: none;
              margin: 0;
              padding: 0;
              li {
                width: 50%;
                text-align: left;
                line-height: 0.5rem;
                // line-height: 2em;
              }
            }
          }
        }
      }

      span:hover {
        cursor: pointer;
        color: $--color-text-primary;
        &.link {
          text-decoration: underline;
        }
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

@media (max-width: 1110px) {
  .header-content {
    .logo {
      max-width: 34%;
    }
  }
}
@media (max-width: 850px) {
  .header-content {
    .logo {
      max-width: 30%;
    }
  }
}

@media (max-width: 768px) {
  .header-content {
    align-items: stretch;
    flex-flow: column;
    height: auto;
    .moblie-menu {
      width: 10%;
      margin-right: 0.1rem;
      position: relative;
      .icon {
        font-size: 0.3rem;
        color: $--color-primary;
      }
    }
    .logo {
      min-width: 100%;
      display: flex;
      align-items: center;
      padding-bottom: 0.1rem;
      .img__wrpper {
        flex: 1;
      }
    }
    .header-right {
      order: -1;
      min-width: 100%;
      height: auto;
      .function {
        padding: 0;
        .links {
          width: 100%;
          padding: 0;
          text-align: center;
          .wanda .float {
            left: 0;
            transform: none;
            top: 0;
          }
        }
      }
    }
  }
}
</style>
