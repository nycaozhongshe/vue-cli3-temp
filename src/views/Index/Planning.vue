<!-- Planning -->
<template>
  <div class="planning__warpper ">
    <div class="planning-item"
         v-for="(item,index) in planningList"
         :key="index">

      <div class="content__warpper">
        <div class="content">
          <div class="icon__warpper">
            <div class="icon-content">
              <Icon :icon-class="item.icon"
                    class-name="icon"></Icon>

            </div>
          </div>
          <div class="title">{{item.title}}</div>
          <div class="summary">{{item.summary}}</div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
import Icon from '@/components/Icon'
export default {
  name: 'Planning',

  mixins: [],

  components: {
    Icon
  },

  props: {},

  data () {
    return {

    }
  },
  computed: {
    planningList () {
      return this.$t('index.planning.list')
    }
  },

  watch: {},

  created () { },

  mounted () {

  },

  destroyed () { },

  methods: {}
}

</script>
<style lang='scss' scoped>
.planning__warpper {
  display: flex;
  margin-top: -0.02rem;

  width: 100%;
  .planning-item {
    // width: 30%;
    // width: calc(100% - 0.5rem);
    width: 100%;
    cursor: pointer;
    .content__warpper {
      width: 100%;
      padding-bottom: 86.57%;
      position: relative;
      .content {
        position: absolute;
        width: 100%;
        height: 79.2%;
        padding-top: 28%;
        bottom: 0;
        left: 0;
        background: #f8f7f7;
        text-align: center;
        padding-left: 0.36rem;
        padding-right: 0.36rem;
        .title {
          font-size: 0.24rem;
          margin-bottom: 0.2rem;
        }
      }
      .icon__warpper {
        position: absolute;
        top: -50%;
        left: 50%;
        transform: translate(-50%, 50%);
        width: 35.8%;
        padding-top: 35.8%; /* 1:1 aspect ratio */
        background: #fff;
        box-shadow: 0px 2px 8px 2px rgba(0, 0, 0, 0.15);
        .icon-content {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          .icon {
            font-size: 50px;
            color: $--color-primary;
          }
        }
      }
    }

    &:hover {
      .content__warpper {
        .content {
          background: $--color-primary;
          color: #fff;
        }
        .icon__warpper {
          background: $--color-primary;
          .icon-content .icon {
            color: #fff;
          }
        }
      }
    }
  }
  .planning-item + .planning-item {
    margin-left: 0.25rem;
  }
}
</style>
