<!-- Contacts -->
<template>
  <div>
    <Full-Calendar :events="fcEvents"
                   :config="config"
                   :color="color">
    </Full-Calendar>
  </div>
</template>

<script>
import { FullCalendar } from 'vue-full-calendar'
import 'fullcalendar/dist/locale/zh-cn'
var demoEvents = [
  {
    title: 'Sunny Out of Office',
    start: '2018-10-25',
    end: '2018-11-11',
    color: 'red'
  },
  {
    title: 'Sunny Out of Office',
    start: '2018-10-25',
    end: '2018-11-11',
    color: 'red'
  },
  {
    title: 'Sunny Out of Office',
    start: '2018-10-25',
    end: '2018-11-11',
    color: 'red'
  },
  {
    title: 'Sunny Out of Office',
    start: '2018-10-25',
    end: '2018-11-11',
    color: 'red'
  }, {
    title: 'Sunny Out of Office',
    start: '2018-10-25',
    end: '2018-11-11',
    color: 'red'
  }, {
    title: 'Sunny Out of Office',
    start: '2018-10-25',
    end: '2018-11-11',
    color: 'red'
  }, {
    title: 'Sunny Out of Office',
    start: '2018-10-25',
    end: '2018-11-11',
    color: 'red'
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
    return {
      fcEvents: demoEvents,
      config: {
        locale: 'zh-cn',
        defaultView: 'month',
        header: {
          left: 'prev,next today', // 上一页、下一页、今天
          center: 'title', // 居中：时间范围区间标题
          right: 'myCustomButton,month,agendaWeek,agendaDay,listMonth' // 右边：显示哪些视图
        },
        customButtons: { // 自定义header属性中按钮[customButtons与header并用]
          myCustomButton: {
            text: '新建',
            click: function () {
              alert('clicked the custom button!')
            }
          }
        },
        eventLimit: true,
        eventLimitText: '更多',
        weekNumbers: true,
        fixedWeekCount: true,
        // aspectRatio: 1,
        weekends: true,
        noEventsMessage: '没数据啊',
        drop (...args) {
          // handle drop logic in parent
        }
      },
      color: 'red'
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
@import '~fullcalendar/dist/fullcalendar.css';
</style>
