<!-- Index-new -->
<template>
  <div class="index-new__warpper ">
    <div class="new-item"
         v-for="(item,index) in newsList "
         :key="index">
      <!-- 箭头 -->
      <div class="jiantou__warpper">
        <Icon icon-class="jiantou-shangxia"
              class-name="icon">
        </Icon>
      </div>
      <!-- 图片   -->
      <div class="new-img"
           v-lazy:background-image.container="$baseUrl+'__imgs/index/index-company@2x.jpg'">

      </div>
      <!-- 文字 -->
      <div class="text-content">

        <div class="mask">

          <div>
            <span>{{item.publish_time}}</span>
            <h4>{{item.title}}</h4>
            <div class="content">
              {{item.summary}}
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
import Icon from '@/components/Icon'

export default {
  name: 'Index-new',

  mixins: [],

  components: {
    Icon
  },

  props: {},

  data () {
    return {
      newsList: []
    }
  },
  computed: {},

  watch: {},

  created () {
    this.getNewsList()
  },

  mounted () { },

  destroyed () { },

  methods: {
    getNewsList () {
      this.$store
        .dispatch('getNewsList', { page: 0, pageSize: 3 }).then((res) => {
          console.log(res.data)
          this.newsList = res.data
        })
    }
  }
}

</script>
<style lang='scss' scoped>
.index-new__warpper {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  .new-item {
    cursor: pointer;
    position: relative;
    width: 33.33%;
    width: calc(100% / 3);
    display: flex;
    flex-flow: column;

    &:nth-child(2) {
      .text-content {
        order: -1;
      }
    }

    .jiantou__warpper {
      position: absolute;
      top: 50%;
      left: 50%;
      background: $--color-primary;
      transform: translate(-50%, -50%);
      z-index: 99;
      color: #fff;
      width: 0.34rem;
      height: 0.34rem;
      display: flex;
      justify-content: center;
      align-items: center;
      .icon {
        font-size: 0.18rem;
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
          &:hover {
            text-decoration: underline;
          }
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

@media (max-width: 768px) {
  .index-new__warpper {
    .new-item {
      min-width: 100%;
      &:nth-child(2) {
        .text-content {
          order: 1;
        }
      }
    }
  }
}
</style>
