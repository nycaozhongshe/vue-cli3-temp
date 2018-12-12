<!-- Index -->
<template>
  <div class="index__warpper">

    <div class="search__warpper"
         :class="{'small-screen':smallScree}">

      <div class="title">
        项目管理
      </div>
      <el-input placeholder="请输入内容"
                v-model="input"
                clearable
                @keyup.enter.native="searchItem">
        <i slot="prefix"
           class="el-input__icon el-icon-search"
           @click="searchItem"></i>
      </el-input>

      <div class="tabs">
        <div class="tab"
             v-for="(item,index) in tabsLsit"
             :key="index"
             :class="{'is-active' :index===activeIndex}"
             @click="switchTab(index)">
          {{item.label}}
        </div>

      </div>
      <div class="content">

        <div class="item"
             v-for="(item,index) in itemLsit"
             :key="index"
             :class="{'is-active' :index===activeItem}"
             @click="switchItem(index)">
          {{item.label}}
        </div>
      </div>
    </div>
    <div class="calendar__warpper">
      <Calendar :fc-events="demoEvents"></Calendar>
    </div>
  </div>
</template>

<script>
import Calendar from './Calendar'

const tabsLsit = [
  { label: '本月', value: '' },
  { label: '三月内', value: '' },
  { label: '今年内', value: '' },
  { label: '全部', value: '' }
]

const itemLsit = [
  { label: '山东文旅集团网站升级', value: '' },
  { label: '济南地矿集团网站项目', value: '' },
  { label: '富力悦心网站项目', value: '' }
]

var demoEvents = [
  {
    title: '<span>Sunny Out of Office</span>',
    start: '2018-10-25 15:29:00',
    end: '2018-11-11 15:29:00',
    color: '#ad111a'
    // className: 'done'
  },
  {
    title: 'Sunny Out of Office',
    start: '2018-10-25',
    end: '2018-11-11',
    color: '#ad111a'
  },
  {
    title: 'Sunny Out of Office',
    start: '2018-10-25',
    end: '2018-11-11',
    color: '#ad111a'
  },
  {
    title: 'Sunny Out of Office',
    start: '2018-10-25',
    end: '2018-11-11',
    color: '#ad111a'
  }, {
    title: 'Sunny Out of Office',
    start: '2018-10-25',
    end: '2018-11-11',
    color: '#ad111a'
  }, {
    title: 'Sunny Out of Office',
    start: '2018-10-25',
    end: '2018-11-11',
    color: '#ad111a',
    data: {

    }
  }, {
    title: 'Sunny Out of Office',
    start: '2018-10-25',
    end: '2018-11-11',
    color: '#ad111a'
  }
]

var demoEvents1 = [
  {
    title: '<span>Sunny Out of Office</span>',
    start: '2018-10-25 15:29:00',
    end: '2018-11-11 15:29:00',
    color: 'bule'
    // className: 'done'
  },
  {
    title: 'Sunny Out of Office',
    start: '2018-10-25',
    end: '2018-11-11',
    color: 'bule'
  },
  {
    title: 'Sunny Out of Office',
    start: '2018-10-25',
    end: '2018-11-11',
    color: 'bule'
  },
  {
    title: 'Sunny Out of Office',
    start: '2018-10-25',
    end: '2018-11-11',
    color: 'bule'
  }, {
    title: 'Sunny Out of Office',
    start: '2018-10-25',
    end: '2018-11-11',
    color: 'bule'
  }, {
    title: 'Sunny Out of Office',
    start: '2018-10-25',
    end: '2018-11-11',
    color: 'bule',
    data: {

    }
  }, {
    title: 'Sunny Out of Office',
    start: '2018-10-25',
    end: '2018-11-11',
    color: 'bule'
  }
]
export default {
  name: 'Index',

  mixins: [],

  components: {
    Calendar
  },

  props: {},

  data () {
    return {
      demoEvents,
      input: '',
      tabsLsit,
      activeIndex: 0,
      activeItem: 0,
      itemLsit
    }
  },
  computed: {
    smallScree () {
      return this.$store.getters.smallScree
    }
  },

  watch: {},

  created () { },

  mounted () {
    setTimeout(() => {
      this.demoEvents = demoEvents1
    }, 5000)
  },

  destroyed () { },

  methods: {
    switchTab (index) {
      this.activeIndex = index
    },
    switchItem (index) {
      this.activeItem = index
    },
    searchItem () {
      console.log(this.smallScree)
    }
  }
}

</script>
<style lang='scss' scoped>
.index__warpper {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  .search__warpper {
    border: 1px solid $--border-color-base;
    color: #606266;
    height: 100%;
    width: 300px;
    padding-right: 15px;
    padding-left: 15px;
    // padding-top: 25px;
    margin-right: -1px;
    border-radius: 4px 4px 0 4px;

    .title {
      // background: #f5f7fa;
      background: $--color-primary-light-9;
      color: #333;
      height: 40px;
      margin-left: -15px;
      margin-right: -15px;
      padding-right: 15px;
      padding-left: 15px;
      line-height: 40px;
      margin-bottom: 20px;
    }
    .tabs {
      margin-top: 20px;
      display: flex;
      font-size: 14px;
      padding-left: 2px;
      padding-right: 2px;
      .tab + .tab {
        border-left: 1px solid #fff;
      }
      .tab {
        cursor: pointer;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 25%;
        height: 40px;
        border: 1px solid $--border-color-base;
        &:first-child {
          border-radius: 4px 0 0 4px;
        }
        &:last-child {
          border-radius: 0 4px 4px 0;
        }

        &:hover,
        &:focus {
          border-left: 1px solid;
          color: #ad111a;
          border-color: #e6b8ba;
          background-color: #f7e7e8;
          // border-radius: 4px;
        }

        &:active {
          color: #9c0f17;
          border-color: #9c0f17;
          outline: none;
        }

        &.is-active {
          color: #9c0f17;
          border-color: #9c0f17;
        }

        &::-moz-focus-inner {
          border: 0;
        }
      }
    }
    .content {
      padding-top: 20px;
      padding-bottom: 20px;
      overflow: auto;
      .item {
        cursor: pointer;
        height: 40px;
        line-height: 40px;
        padding-left: 20px;
        &:hover,
        &:focus {
          color: #ad111a;
          // border-color: #e6b8ba;
          // background-color: #f7e7e8;
          // border-radius: 4px;
        }

        &:active {
          color: #9c0f17;
          border-color: #9c0f17;
          outline: none;
        }

        &.is-active {
          color: #9c0f17;
          // border-color: #9c0f17;
        }

        &::-moz-focus-inner {
          border: 0;
        }
      }
    }
  }

  .calendar__warpper {
    height: 100%;
    flex: 1;
    position: relative;
  }
}
</style>
