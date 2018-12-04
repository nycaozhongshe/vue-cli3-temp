<!-- Title -->
<template>
  <div class="title__warpper">
    <h4 class="title">
      {{title}}
    </h4>
  </div>
</template>

<script>
export default {
  name: 'Title',

  mixins: [],

  components: {},

  props: {
    title: {
      type: String,
      required: true
    }
  },

  data () {
    return {

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
.title__warpper {
  margin-top: 0.6rem;
  margin-bottom: 0.34rem;
  width: 100%;
  text-align: center;
  .title {
    display: inline-flex;
    position: relative;
    padding-bottom: 0.16rem;
    border-bottom: 2px solid #d7d7d7;
    font-size: 0.36rem;
    &::before {
      content: "";
      background: #fff;
      width: 30px;
      height: 20px;
      position: absolute;
      bottom: -10px;
      left: 50%;
      margin-left: -15px;
    }
    &::after {
      content: "";
      background: #199cdc;
      width: 10px;
      height: 6px;
      position: absolute;
      bottom: -4px;
      left: 50%;
      margin-left: -5px;
    }
  }
}
</style>
