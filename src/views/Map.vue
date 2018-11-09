<!--  -->
<template>
  <div class="map-content">
    <BaiduMap :style="{width:'100%',height:'100px'}"></BaiduMap>
  </div>
</template>

<script>
import BaiduMap from '@/components/BaiduMap.vue'
export default {
  data () {
    return {
    }
  },

  components: {
    BaiduMap
  },

  computed: {},

  mounted () {
  },

  methods: {}
}

</script>
<style lang='scss' scoped>
.map-content {
  width: 400px;
  height: 500px;
}
</style>
