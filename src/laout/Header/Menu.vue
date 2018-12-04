<template>
  <div class="menu__warpper">
    <div v-for="(item,index) in navLsit"
         :key="index"
         class="menu-item"
         :class="{active:$route.path===item.path}"
         @click="gotoPage(item.path)">
      {{ $t('router.'+item.name) }}
      <div class="float">
        测试
      </div>

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
      show: false
    }
  },
  computed: {
    navLsit () {
      return this.$router.options.routes
    }
  },
  methods: {
    hasChildren () {
      this.hc = this.menu.hasChildren !== false && this.menu.children && this.menu.children.length > 0
      return this.hc
    },
    gotoPage (path) {
      this.$router.push(path)
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
  .menu-item {
    padding: 1em 1em;
    cursor: pointer;
    position: relative;
    &:hover,
    &.active {
      border-bottom: 0.03rem solid $--color-primary;
      color: $--color-primary;
    }
    .float {
      display: none;
      position: absolute;
      left: 0;
      bottom: 0;
      background-color: #38f;
      color: #fff;
      transition: 1s;
      overflow: hidden;
      margin-left: 10px;
    }
    &:hover {
      .float {
        display: block;
      }
    }
  }
}
</style>
