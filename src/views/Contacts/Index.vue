<!-- Contacts -->
<template>
  <div>
    Contacts22222222
    <el-input placeholder="Please input"
              v-model="input">
    </el-input>

    <span class='hidden-xl-only'>
      111
    </span>
    <br>
    <el-date-picker v-model="value1"
                    type="date"
                    placeholder="选择日期">
    </el-date-picker>
  </div>
</template>

<script>
import { DatePicker } from 'element-ui'

export default {
  name: 'Contacts',

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
