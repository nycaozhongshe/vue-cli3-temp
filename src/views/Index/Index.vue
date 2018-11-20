
<!-- Contacts -->
<template>
  <div class="full-calendar__wrpper">
    <Full-Calendar :events="fcEvents"
                   :config="config"
                   :color="color">
    </Full-Calendar>
    <!-- 新建编辑窗口 -->
    <el-dialog title="新建活动"
               :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="活动名称"
                      :label-width="formLabelWidth">
          <el-input v-model="form.name"
                    autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动区域"
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
                      :label-width="formLabelWidth">
          <el-date-picker v-model="form.date"
                          type="datetimerange"
                          align="right"
                          start-placeholder="开始日期"
                          end-placeholder="结束日期"
                          :default-time="['12:00:00', '12:00:00']">
          </el-date-picker>
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
  </div>
</template>

<script>
import { FullCalendar } from 'vue-full-calendar'
import 'fullcalendar/dist/locale/zh-cn'

import 'fullcalendar/dist/fullcalendar.css'

var demoEvents = [
  {
    title: 'Sunny Out of Office',
    start: '2018-10-25',
    end: '2018-11-11',
    color: '#409EFF'
  },
  {
    title: 'Sunny Out of Office',
    start: '2018-10-25',
    end: '2018-11-11',
    color: '#409EFF'
  },
  {
    title: 'Sunny Out of Office',
    start: '2018-10-25',
    end: '2018-11-11',
    color: '#409EFF'
  },
  {
    title: 'Sunny Out of Office',
    start: '2018-10-25',
    end: '2018-11-11',
    color: '#409EFF'
  }, {
    title: 'Sunny Out of Office',
    start: '2018-10-25',
    end: '2018-11-11',
    color: '#409EFF'
  }, {
    title: 'Sunny Out of Office',
    start: '2018-10-25',
    end: '2018-11-11',
    color: '#409EFF'
  }, {
    title: 'Sunny Out of Office',
    start: '2018-10-25',
    end: '2018-11-11',
    color: '#ccc'
  }
]
export default {
  name: 'Contacts',

  mixins: [],

  components: {
    FullCalendar
  },

  props: {},

  data () {
    let that = this
    return {
      dialogFormVisible: false,
      formLabelWidth: '120px',
      form: {},
      fcEvents: demoEvents,
      config: {
        locale: 'zh-cn',
        defaultView: 'month',
        header: {
          left: 'title', // 上一页、下一页、今天
          center: 'month,listMonth,myCustomButton,', // 居中：时间范围区间标题
          // agendaWeek,agendaDay,
          right: 'today,prev,next' // 右边：显示哪些视图
        },
        customButtons: { // 自定义header属性中按钮[customButtons与header并用]
          myCustomButton: {
            text: '新建',
            click: function () {
              that.dialogFormVisible = true
              console.log(that.color)
            }
          }
        },
        eventLimit: true,
        eventLimitText: '更多',
        weekNumbers: true,
        fixedWeekCount: true,
        color: '#409EFF', // an option!
        // textColor: 'black', // an option!
        // aspectRatio: 1,
        weekends: true,
        noEventsMessage: '没数据啊',
        drop (...args) {
          console.log(args)

          // handle drop logic in parent
        }
      }
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
<style lang='scss' >
.full-calendar__wrpper {
  .fc-toolbar.fc-header-toolbar {
    margin-bottom: 2em;
  }
  .fc-button {
    text-shadow: none;
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #c7c7c7;
    border-color: #c7c7c7;
    color: #606266;
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
    color: #ad111a;
    border-color: #e6b8ba;
    background-color: #f7e7e8;
  }

  .fc-button:active {
    color: #9c0f17;
    border-color: #9c0f17;
    outline: none;
  }

  .fc-button.fc-state-disabled,
  .fc-button.fc-state-disabled:hover,
  .fc-button.fc-state-disabled:focus {
    color: #c0c4cc;
    cursor: not-allowed;
    background-image: none;
    background-color: #fff;
    border-color: #ebeef5;
  }

  .fc-button.fc-state-disabled.fc-button--text {
    background-color: transparent;
  }

  .fc-myCustomButton-button {
    color: #fff;
    background-color: #ad111a;
    border-color: #ad111a;
  }

  .fc-myCustomButton-button:hover,
  .fc-myCustomButton-button:focus {
    background: #bd4148;
    border-color: #bd4148;
    color: #fff;
  }

  .fc-myCustomButton-button:active {
    background: #9c0f17;
    border-color: #9c0f17;
    color: #fff;
    outline: none;
  }

  .fc-myCustomButton-button.is-active {
    background: #9c0f17;
    border-color: #9c0f17;
    color: #fff;
  }
}
</style>
