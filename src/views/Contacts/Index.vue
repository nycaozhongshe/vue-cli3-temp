<!-- Contacts -->
<template>
  <div>
    Contacts
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
export default {
  name: 'Contacts',

  mixins: [],

  components: {},

  props: {},

  data () {
    return {
      input: ''
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
