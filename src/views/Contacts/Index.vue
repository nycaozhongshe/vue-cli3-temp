<!-- Contacts -->
<template>
  <div class="contacts__warpper"
       @click="$router.push('/')">

    <!-- <progressive-img :src="$baseUrl+'__imgs/common/timg.jpeg'" /> -->

    <div class="people-list"
         @click.stop.prevent="false">
      <div class="people-item"
           v-for="(item,index) in modelList"
           @click="showVideo(item.path,item.type)"
           :key="index">

        <div class="item-content"
             :style="`background-image:url(/__imgs/contacts/${item.path}.png)`">
          <div class="info">
            <div class="title">{{item.name}}</div>
            <div class="sum">{{item.sum}}</div>
          </div>
        </div>

      </div>
    </div>
    <transition name="fade">

      <div class="dialog__warpper"
           v-if="centerDialogVisible"
           @click.stop.prevent="centerDialogVisible =false">
        <div class="close">x</div>

        <div class="video-player__warpper"
             @click.stop.prevent="false">

          <video-player class="video-player vjs-custom-skin"
                        ref="videoPlayer"
                        :playsinline="true"
                        :options="playerOptions">
          </video-player>

        </div>

      </div>
    </transition>

  </div>
</template>

<script>
let modelList = [

  {
    name: '姜  涛',
    sum: '电缆运检室电缆运检一班班长',
    path: '03_姜涛'
  },

  {
    name: '李  莉',
    sum: '电力调度控制中心方式计划室副主管',
    path: '05_李莉'
  },

  {
    name: '王延安',
    sum: '经济技术研究所规划评审主管',
    path: '15_王延安'
  },

  {
    name: '陈元柏',
    sum: '带电作业室配电带电作业班技术员',
    path: '19_陈远柏'
  },

  {
    name: '胡海舰',
    sum: '章丘区供电公司曹范供电所台区经理',
    path: '17_胡海舰'
  },

  {
    name: '李生林',
    sum: '营业及电费室反窃电班班长',
    path: '23_李生林'
  },

  {
    name: '高赵丽',
    sum: '变电检修室副主管',
    path: '25_高兆丽'
  },
  {
    name: '郭伟杰',
    sum: '历城区供电公司仲宫供电所所长',
    path: '12_郭伟杰',
    type: 'mpg'
  }
]
export default {
  name: 'Contacts',

  mixins: [],

  components: {},

  props: {},

  data () {
    return {
      modelList,
      centerDialogVisible: false,
      input: '',
      imgUrl: '',
      playerOptions: {
        height: '360',
        playbackRates: [0.7, 1.0, 1.5, 2.0], // 播放速度
        autoplay: true, // 如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [],
        poster: '', // 你的封面地址
        // width: document.documentElement.clientWidth,
        notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。

        volumeMenuButton: {
          inline: false, // 设置音量bar为竖直
          vertical: true// 设置音量bar为竖直
        },
        controlBar: {
          timeDivider: false,
          durationDisplay: true,
          remainingTimeDisplay: true,
          fullscreenToggle: true // 全屏按钮
        }
      }
    }
  },
  computed: {},

  watch: {},

  created () { },

  mounted () { },

  destroyed () { },

  methods: {
    showVideo (path, type = 'mp4') {
      this.centerDialogVisible = true
      this.playerOptions.sources = Object.assign([], [{
        // type: 'video/mp4',
        src: this.$baseUrl + `/__video/${path}.${type}`// url地址
      }])
    }

  }
}

</script>
<style lang='scss' >
.contacts__warpper {
  height: 100%;
  padding: 2.8%;
  width: 100%;
  height: 100%;
  background: url('/__imgs/contacts/background.png') no-repeat center;
  background-size: 100% 100%;

  .dialog__warpper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.45);
    padding: 4%;
    .close {
      position: absolute;
      right: 2%;
      top: 2%;
      font-size: 40px;
      color: #fff;
    }
    .video-player__warpper {
      height: 100%;
      width: 100%;
      .video-player {
        height: 100%;
        .video-js.vjs-fluid {
          height: 100% !important;
          padding: 0 !important;
        }
        .video-js .vjs-big-play-button {
          top: 50%;
          left: 50%;
          margin-left: -1.5em;
          margin-top: -1em;
          background-color: rgba(0, 0, 0, 0.45);
          font-size: 3.5em;
          height: 2em !important;
          line-height: 2em !important;
          margin-top: -1em !important;
        }
      }
    }
  }
  .people-list {
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    .people-item {
      padding: 1.5%;
      width: 25%;
      height: 50%;
      // border: 1px solid #eee;
      .item-content {
        position: relative;
        width: 100%;
        height: 100%;
        background: no-repeat center;
        background-size: 100% 100%;
        cursor: pointer;
        transition: all 0.5s;
        transform: scale(1);
        &:hover {
          transform: scale(1.1);
          box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.16);
        }
        .info {
          position: absolute;
          bottom: 0;
          left: 0;
          color: #fff;
          padding-left: 10%;
          padding-bottom: 6%;
          .title {
            font-size: 1rem;
            font-weight: normal;
            font-stretch: normal;
            line-height: 1;
            margin-bottom: 2px;
          }
          .sum {
            font-size: 0.63rem;
          }
        }
      }
    }
  }
}
</style>
