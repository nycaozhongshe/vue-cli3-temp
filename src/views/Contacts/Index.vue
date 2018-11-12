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
    color: 'red',
    editable: true
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
        // aspectRatio: 1,
        weekends: true,
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
