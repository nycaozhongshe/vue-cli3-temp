<!-- Date -->
<template>
  <div>
    Date
    <br>
    <el-date-picker v-model.trim="value1"
                    type="date"
                    placeholder="选择日期">
    </el-date-picker>
  </div>
</template>

<script>
import { DatePicker } from 'element-ui'

export default {
  name: 'Date',

  mixins: [],

  components: {
    'el-date-picker': DatePicker
  },

  props: {},

  data () {
    return {
      input: '',
      value1: ''
    }
  },
  computed: {},

  watch: {},

  created () { },

  mounted () { },

  destroyed () { },

  methods: {}
}

</script>
<style lang='scss' scoped>
</style>
