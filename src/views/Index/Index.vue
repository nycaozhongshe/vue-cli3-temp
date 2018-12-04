<!-- Index -->
<template>
  <div class="index__warpper">
    <div class="banner">
    </div>
    <div class="index-content">
      <!-- 新闻 -->
      <div class="center-content">
        <Title :title="$t('index.news')"></Title>
        <New></New>
      </div>
      <!-- 公司简介 -->
      <div class="company-profile__warpper">
        <Title :title="$t('index.companyProfile.title')"
               gary></Title>
        <Company-Profile></Company-Profile>
      </div>
      <!-- 未来规划 -->
      <div class="center-content">
        <Title :title="$t('index.planning.title')"></Title>
        <Planning></Planning>
      </div>

    </div>

  </div>
</template>

<script>
import Title from './Title'
import New from './New'
import CompanyProfile from './CompanyProfile'
import Planning from './Planning'
export default {
  name: 'Index',

  mixins: [],

  components: {
    CompanyProfile,
    Planning,
    Title,
    New
  },

  props: {},

  data () {
    return {
      input: '',
      imgUrl: '',
      bannerImg: this.$baseUrl + '__imgs/index/index-banner@2x.jpg'
    }
  },
  computed: {},

  watch: {},

  created () { },

  mounted () { },

  destroyed () { },

  methods: {
    submit () {
      this.$store
        .dispatch('getCompanyCour', { companyName: this.input }).then((res) => {
          console.log(res)
        })
    }
  }
}

</script>
<style lang='scss' scoped>
.banner {
  // '__imgs/index/index-banner@2x.jpg'
  background: no-repeat;
  background-image: url("../../../public/__imgs/index/index-banner@2x.jpg");
  background-position: 50% 50%;
  background-size: cover;
  width: 100%;
  height: 5.7rem;
}
.company-profile__warpper {
  background: #f8f7f7;
}
</style>
