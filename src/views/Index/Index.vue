<!-- Index -->
<template>
  <div class="index__warpper">
    <div class="banner">
    </div>
    <div class="index-content">

      <Title :title="$t('index.news')"></Title>
      <New></New>
      <!-- 公司简介 -->
      <Title :title="$t('index.companyProfile.title')"></Title>
      <Company-Profile></Company-Profile>
      <!-- 未来规划 -->
      <Title :title="$t('index.planning.title')"></Title>
      <Planning></Planning>
      <!-- 联系我们 -->

      <el-input v-model="input"
                placeholder="请输入内容">
      </el-input>
      <el-input v-model="input"
                placeholder="请输入内容">
      </el-input>
      <el-button type="primary">
        发送
      </el-button>
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
.index-content {
  max-width: 11rem;
  margin: 0 auto;
}
</style>
