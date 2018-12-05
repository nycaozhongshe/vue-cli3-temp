<!-- CompanyProfile -->
<template>
  <div class="company-profile__warpper center-content">
    <div class="img__warpper">
      <div class="about">
        ABOUT
      </div>
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
  padding-left: 0.42rem;
  padding-bottom: 0.6rem;
  .img__warpper {
    width: 48%;
    padding-top: 0.88%;
    position: relative;
    .about {
      position: absolute;
      left: -1.75rem;
      top: 50%;
      margin-top: -0.42rem;
      width: 3.5rem;
      height: 0.85rem;
      background: $--color-primary;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      transform: rotate(270deg);
    }
    img {
      height: 100%;
    }
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
      transition: 0.4s all;
      &:hover {
        color: $--color-primary;
        transform: translateX(5px);
        border-color: #b4c3d6;
        background-color: #e6ebf1;
      }
      &:active {
        color: $--color-primary-light-9;
        background: $--color-primary;
      }
    }
  }
}

@media (max-width: 768px) {
  .company-profile__warpper {
    flex-flow: column;
    padding: 0;
    .img__warpper,
    .text__warpper {
      width: 100%;
      margin-left: 0;
    }
    .img__warpper {
      .about {
        display: none;
      }
    }
    .text__warpper {
      padding: 0.2rem;
    }
  }
}
</style>
