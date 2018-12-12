
<!-- Contacts -->
<template>
  <div class="full-calendar__wrpper">

    <Full-Calendar :events="fcEvents"
                   :config="config"
                   :color="color"
                   ref="calendar">
    </Full-Calendar>
    <!-- 新建编辑窗口 -->
    <el-dialog :title="editTitle"
               :visible.sync="dialogFormVisible"
               @close="beforeClose">
      <el-form :model="form"
               ref="form">
        <el-form-item label="活动名称"
                      :label-width="formLabelWidth"
                      prop='name'>
          <el-input v-model="form.name"
                    autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动区域"
                      prop='region'
                      :label-width="formLabelWidth">
          <el-select v-model="form.region"
                     placeholder="请选择活动区域">
            <el-option label="区域一"
                       value="shanghai"></el-option>
            <el-option label="区域二"
                       value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="活动时间"
                      prop='date'
                      :label-width="formLabelWidth">
          <el-date-picker v-model="form.date"
                          type="daterange"
                          align="right"
                          start-placeholder="开始日期"
                          end-placeholder="结束日期"
                          :default-time="['12:00:00', '12:00:00']">
          </el-date-picker>
        </el-form-item>

        <el-form-item label="选择人员"
                      prop='people'
                      :label-width="formLabelWidth">
          <div class="people-list"
               @click="dialogTreeVisible =true">

            <el-tag v-for="tag in tags"
                    :key="tag.name"
                    style="margin-left:10px;"
                    closable
                    @click.native.stop.prevent="handleClickTag"
                    :type="tag.type">
              {{tag.name}}
            </el-tag>
          </div>
        </el-form-item>
      </el-form>
      <div slot="footer"
           class="dialog-footer">
        <el-button @click="dialogFormVisible = false">
          取 消
        </el-button>
        <el-button type="primary"
                   @click="dialogFormVisible = false">
          确 定
        </el-button>
      </div>
    </el-dialog>

    <div class="box-card"
         :style="hoverDialogStyle"
         v-show="hoverDialogVisible">

      <!-- @mouseover="hoverDialogVisible=true"
         @mouseout="hoverDialogVisible=false" -->

      <el-card>
        <div slot="header"
             class="clearfix">
          <span>卡片名称</span>
          <el-button style="float: right; padding: 3px 0"
                     type="text">操作按钮</el-button>
        </div>
        <div v-for="o in 4"
             :key="o"
             class="text item">
          {{'列表内容 ' + o }}
        </div>
      </el-card>
    </div>

    <el-dialog title="选择人员"
               :visible.sync="dialogTreeVisible"
               @close="closeTree"
               append-to-body>
      <Tree-Trans></Tree-Trans>
    </el-dialog>
  </div>
</template>

<script>
import { FullCalendar } from 'vue-full-calendar'
import 'fullcalendar/dist/locale/zh-cn'

import 'fullcalendar/dist/fullcalendar.css'

import TreeTrans from './TreeTrans'
// color eventColor 作用一样，设置事件的背景色和边框。
// backgroundColor  eventBackgroundColor 作用一样，设置事件的背景色。
// borderColor eventBorderColor 作用一样，设置事件的边框。
// textColor eventTextColor 作用一样，设置事件的文字颜色
// className  string 或者 Array 类型，
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
export default {
  name: 'Contacts',

  mixins: [],

  components: {
    FullCalendar,
    TreeTrans
  },

  props: {},

  data () {
    let that = this
    let height = () => window.innerHeight - 80
    return {
      tags: [
        { name: '标签一', type: '' },
        { name: '标签二', type: 'success' },
        { name: '标签三', type: 'info' },
        { name: '标签四', type: 'warning' },
        { name: '标签五', type: 'danger' }
      ],
      hoverDialogVisible: false,
      dialogTreeVisible: false,
      hoverDialogStyleTop: {
        // top: 0,
        // left: 0
      },

      dialogFormVisible: false,
      formLabelWidth: '120px',
      form: {},
      editTitle: '新建活动',
      fcEvents: demoEvents,
      config: {
        locale: 'zh-cn',
        defaultView: 'month', // 默认视图
        contentHeight: 'auto', // 设置高度
        height: height,
        // windowResize: function (...arg) {
        //   // $('#calendar').fullCalendar('option', 'height', window.innerHeight - 20)

        //   that.$refs.calendar.fireMethod('next')
        //   console.log(arg[0])
        // },
        // theme: true,

        // allDayDefault: false,
        // allDaySlot: true,
        // allDayText: '全天',
        // timeFormat: 'HH:mm', // 设置的是添加的具体的日程上显示的时间
        header: {
          left: 'title', // 上一页、下一页、今天
          center: 'month,listMonth,myCustomButton', // 居中：时间范围区间标题
          // agendaWeek,agendaDay,
          right: 'today,prev,next' // 右边：显示哪些视图
        },
        customButtons: { // 自定义header属性中按钮[customButtons与header并用]
          myCustomButton: {
            text: '新建',
            click: function () {
              that.dialogFormVisible = true
              that.editTitle = '新建活动'
            }
          }
        },
        // 点击事件触发
        eventClick: function (event) {
          that.dialogFormVisible = true
          that.editTitle = '编辑活动'
        },
        // 鼠标划过的事件
        eventMouseover: function (event, jsEvent, view) {
          // console.log(jsEvent)
          // that.hoverDialogVisible = true

          // let style = {
          //   top: jsEvent.clientY + 'px',
          //   left: jsEvent.clientX + 'px'
          // }
          // that.hoverDialogStyle = Object.assign({}, style)
          // console.log(that.hoverStyle.top)

          // console.log(event)
        },
        // 鼠标离开的事件
        eventMouseout: function (event, jsEvent, view) {
          // that.hoverDialogVisible = false
          // console.log(event)
        },
        // 点击天触发的回调
        dayClick: function (date, jsEvent, view) {
          that.dialogFormVisible = true
          that.editTitle = '新建活动'
          // alert('Clicked on: ' + date.format())
          // alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY)
          // alert('Current view: ' + view.name)
          // change the day's background color just for fun
          // $(this).css('background-color', 'red')
        },
        eventLimit: true, // 限制
        // eventLimitClick: 'listMonth', // 默认跳转
        eventLimitText: '更多', // 隐藏文字
        weekNumbers: true,
        fixedWeekCount: true,
        // aspectRatio: 1,
        editable: false, // 可以拖动
        weekends: true,
        noEventsMessage: '没数据啊'
        // 强调时间
        // businessHours: {
        //   dow: [1, 2, 3, 4, 5], // 周一 - 周四

        //   start: '10:00', // 上午10点开始
        //   end: '18:00' // 下午18点结束
        // }

      }
    }
  },
  computed: {
    hoverStyle () {
      return this.hoverDialogStyle
    }
  },

  watch: {},

  created () { },

  mounted () {
    this.config.height = 200
    // this.$refs.calendar.fireMethod('next')

    // console.log(this.config)
  },

  destroyed () { },

  methods: {
    handleClickTag () {

    },
    closeTree () {
      console.log('clear')
    },

    beforeClose () {
      this.$refs.form.resetFields()
    }
  }
}

</script>
<style lang='scss' >
.full-calendar__wrpper {
  color: $--color-text-regular;

  /* Event 参数 className 的值 */
  .done:before {
    content: "【 已完成 】";
    background-color: yellow;
    color: green;
    text-align: center;
    font-weight: bold;
    width: 100%;
  }
  /* Event 参数 className 的值 */
  .doing:before {
    content: "【 未完成 】";
    background-color: yellow;
    color: red;
    text-align: center;
    font-weight: bold;
  }

  .people-list {
    min-height: 40px;
    line-height: 40px;
    border: 1px solid $--border-color-base;
    transition: $--border-transition-base;
    border-radius: $--border-radius-base;
  }
  .fc-toolbar .fc-left h2 {
    min-width: 7em;
  }
  .box-card {
    position: fixed;
    z-index: 3000;
    width: 300px;
  }
  .fc-unthemed th {
    padding-top: 1em;
    padding-bottom: 1em;
  }
  .fc-unthemed td.fc-today,
  .fc-unthemed .fc-divider,
  .fc-unthemed .fc-popover .fc-header,
  .fc-unthemed .fc-list-heading td {
    background: $--color-primary-light-9;
  }
  .fc-toolbar.fc-header-toolbar {
    margin-bottom: 2em;
  }
  .fc-button {
    text-shadow: none;
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: $--color-white;
    border: 1px solid $--border-color-base;
    color: $--color-text-regular;
    -webkit-appearance: none;
    text-align: center;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    -webkit-transition: 0.1s;
    transition: 0.1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
    height: auto;
  }

  .fc-button + .fc-button {
    margin-left: 10px;
  }

  .fc-button.is-round {
    padding: 12px 20px;
  }

  .fc-button:hover,
  .fc-button:focus {
    color: $--color-primary;
    border-color: $--color-primary-light-7;
    background-color: $--color-primary-light-9;
  }

  .fc-button:active {
    color: $--actvie-color;
    border-color: $--actvie-color;
    outline: none;
  }

  .fc-button.fc-state-disabled,
  .fc-button.fc-state-disabled:hover,
  .fc-button.fc-state-disabled:focus {
    color: $--color-text-placeholder;
    cursor: not-allowed;
    background-image: none;
    background-color: $--color-white;
    border-color: $--border-color-lighter;
  }

  .fc-button.fc-state-disabled.fc-button--text {
    background-color: transparent;
  }
  .fc-button.fc-state-active {
    color: $--actvie-color;
    border-color: $--actvie-color;
  }

  .fc-myCustomButton-button {
    color: $--color-white;
    background-color: $--color-primary;
    border-color: $--color-primary;
    // background: rgba($--color-text-secondary, 0.12);
  }

  .fc-myCustomButton-button:hover,
  .fc-myCustomButton-button:focus {
    background: $--color-primary-light-2;
    border-color: $--color-primary-light-2;
    color: $--color-white;
  }

  .fc-myCustomButton-button:active {
    background: $--actvie-color;
    border-color: $--actvie-color;
    color: $--color-white;
    outline: none;
  }

  .fc-myCustomButton-button.is-active {
    background: $--actvie-color;
    border-color: $--actvie-color;
    color: $--color-white;
  }
}
</style>
