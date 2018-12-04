<!-- Index-new -->
<template>
  <div class="index-new__warpper">
    <div class="new-item"
         v-for="(item,index) in 3 "
         :key="index">
      <div class="new-img"
           v-lazy:background-image.container="$baseUrl+'__imgs/index/index-company@2x.jpg'">

      </div>
      <div class="text-content">

        <div class="mask">

          <div>
            <span>January 12, 2018</span>
            <h4>新闻标题新闻标题新闻标题新闻标题新闻
              标题新闻标题</h4>
            <div class="content">
              新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情新...
            </div>
            <div class="more">
              Read more
            </div>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index-new',

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
.index-new__warpper {
  width: 100%;
  display: flex;
  .new-item {
    cursor: pointer;
    width: 33.33%;
    width: calc(100% / 3);
    display: flex;
    flex-flow: column;
    &:nth-child(2) {
      .text-content {
        order: -1;
      }
    }
    .text-content {
      // padding-bottom: 66.66%;

      padding-bottom: 73%;

      position: relative;
      .mask {
        position: absolute;
        display: flex;
        align-items: center;
        height: 100%;
        width: 100%;
        padding: 0 0.2rem;
        background: #fff;
        span {
          font-size: 0.14rem;
        }
        h4 {
          font-size: 0.18rem;
          font-weight: 500;
          height: 0.5rem;
          line-height: 1.44;
          @include multiline-ellipsis(2);
        }
        .content {
          font-size: 0.14rem;
          height: 0.63rem;
          line-height: 1.57;
          @include multiline-ellipsis(3);
        }
        .more {
          margin-top: 0.3rem;
          font-size: 0.16rem;
          color: $--color-primary;
          text-align: right;
        }
      }
    }
    .new-img {
      width: 100%;
      height: 0;
      padding-bottom: 73%;
      // padding-bottom: 66.66%;
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }
  }
}
@media (max-width: 960px) {
  .index-new__warpper {
    background: #000;
    .new-item {
      .text-content {
        .mask {
          .more {
            margin-top: 0.1rem;
          }
        }
      }
    }
  }
}
</style>
