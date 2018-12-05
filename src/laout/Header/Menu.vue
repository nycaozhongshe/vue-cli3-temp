<template>
  <div class="menu__warpper">
    <div v-for="(item,index) in navLsit"
         :key="index"
         class="menu-list"
         @mouseenter="handleMouseenter(index)"
         @mouseleave="handleMouseleave(index)">
      <div class="menu-item"
           :class="{active:$route.path===item.path}"
           @click="gotoPage(item.path)">
        <span> {{ $t('router.'+item.name) }}</span>
      </div>
      <el-collapse-transition>
        <div class="float"
             v-show="item.show">
          <span v-for="(i,j) in item.children"
                :key="j"
                @click="gotoPage(i.path)">
            {{$t('router.'+i.name)}}<br>
          </span>
        </div>
      </el-collapse-transition>
    </div>

  </div>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    menu: Object
  },
  data () {
    return {
      hc: false,
      show: false,
      navLsit: []
    }
  },
  computed: {
    // navLsit () {
    //   console.log('navLsit')
    //   return this.$router.options.routes
    // }
  },
  mounted () {
    this.navLsit = this.$router.options.routes
  },
  methods: {
    hasChildren () {
      this.hc = this.menu.hasChildren !== false && this.menu.children && this.menu.children.length > 0
      return this.hc
    },
    gotoPage (path) {
      this.$router.push(path)
    },
    handleMouseenter (index) {
      this.navLsit[index].show = true
    },
    handleMouseleave (index) {
      this.navLsit[index].show = false
    }
  }
}
</script>

<style lang="scss" scoped>
.menu__warpper {
  display: flex;
  flex-direction: row;
  font-size: 0.18rem;
  position: relative;
  .menu-list {
    position: relative;
    // padding: 0 0.1rem;
    padding: 0 1.2em;
    .float {
      position: absolute;
      z-index: 9999;
      top: 100%;
      left: 0;
      width: 100%;
      padding-left: 0.2rem;
      padding-right: 0.2rem;
      text-align: center;
      line-height: 0.5rem;
      font-size: 0.14rem;
      // margin-top: 0.02rem;
      background: rgba(0, 0, 0, 0.53);
      filter: progid:DXImageTransform.Microsoft.gradient(startcolorstr=#7F000000,endcolorstr=#7F000000);
      color: #fff;
      span {
        cursor: pointer;
        &:hover {
          // color: $--color-primary-light-8;
          text-decoration: underline;
        }
      }
    }
    .menu-item {
      cursor: pointer;
      position: relative;
      padding: 1em 0;
      &:hover,
      &.active {
        border-bottom: 0.03rem solid $--color-primary;
        color: $--color-primary;
      }
    }
  }
}
@media (max-width: 768px) {
  .menu__warpper {
    display: none;
  }
}
</style>
