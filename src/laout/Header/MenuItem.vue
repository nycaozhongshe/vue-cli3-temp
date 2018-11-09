<template>
  <component v-bind:is="currentItemComponent"
             :index="menu.path"
             :key="menu.path"
             v-if="!menu.hidden">
    <i :class="menu.icon"
       v-if="menu.icon && !hc">
    </i>
    <span v-if="!hc"
          slot="title">
      {{$t('router.'+menu.name)}}
    </span>
    <template slot="title"
              v-if="hc">
      <i :class="menu.icon"
         v-if="menu.icon">
      </i>
      <span slot="title">{{$t('router.'+menu.name)}}</span>
    </template>
    <!-- 这里用了递归生成菜单项 -->
    <menu-item v-for="child in menu.children"
               v-if="hc && child.path"
               :menu="child"
               :key="child.name">
    </menu-item>
  </component>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    menu: Object
  },
  data () {
    return {
      hc: false
    }
  },
  computed: {
    currentItemComponent: function () {
      return this.hasChildren() ? 'el-submenu' : 'el-menu-item'
    }
  },
  methods: {
    hasChildren () {
      this.hc = this.menu.hasChildren !== false && this.menu.children && this.menu.children.length > 0
      return this.hc
    }
  }
}
</script>
