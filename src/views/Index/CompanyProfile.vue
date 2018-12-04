<!-- CompanyProfile -->
<template>
  <div class="company-profile__warpper">
    <div class="img__warpper">
      <img :src="this.$baseUrl + '__imgs/index/index-company@2x.jpg'"
           alt="">
    </div>

    <div class="text__warpper">
      <div class="content__warpper">
        <div class="content">
          {{$t('index.companyProfile.content')}}
        </div>

        <div class="more">
          READ MORE
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'CompanyProfile',

  mixins: [],

  components: {},

  props: {},

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
.company-profile__warpper {
  display: flex;
  .img__warpper {
    width: 48%;
  }
  .text__warpper {
    margin-left: 2%;
    display: flex;
    align-items: center;
    width: 50%;
    .content {
      font-size: 0.18rem;
      text-indent: 2em;
      line-height: 0.32rem;
    }
    .more {
      cursor: pointer;
      display: inline-flex;
      padding: 0.14rem 0.22rem;
      font-size: 0.16rem;
      margin-top: 0.48rem;
      border: 1px solid $--color-primary;
      &:hover {
        color: $--color-primary;
      }
    }
  }
}
</style>
