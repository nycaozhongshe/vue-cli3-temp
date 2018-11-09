<!--  -->
<template>
  <el-header>
    <el-menu :default-active="$route.path"
             class="el-menu-demo"
             mode="horizontal"
             @select="handleSelect"
             router>
      <Menu-Item v-if="item.path"
                 v-for="item in navLsit"
                 :menu="item"
                 :key="item.name">
      </Menu-Item>
    </el-menu>
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
    }
  }
}

</script>
<style lang='scss' scoped>
</style>
