<!-- Home -->
<template>
  <div>
    <button @click="today">今天</button>
    <full-calendar :events="fcEvents"
                   lang="zh"
                   ref="fullCalendar"
                   @changeMonth="changeMonth"
                   @eventClick="eventClick"
                   @dayClick="dayClick"
                   @moreClick="moreClick">
    </full-calendar>
  </div>

</template>

<script>

const demoEvents = [
  {
    title: 'Sunny Out of Office',
    start: '2018-11-25',
    end: '2018-11-30',
    cssClass: 'family',
    YOUR_DATA: {
      data: 11,
      data2: 2
    }
  },
  {
    title: 'Sunny Out of Office',
    start: '2018-11-25',
    end: '2018-11-30',
    cssClass: 'family',
    YOUR_DATA: {
      data: 11,
      data2: 2
    }
  },
  {
    title: 'Sunny Out of Office',
    start: '2018-11-25',
    end: '2018-11-30',
    cssClass: 'family',
    YOUR_DATA: {
      data: 11,
      data2: 2
    }
  },
  {
    title: 'Sunny Out of Office',
    start: '2018-11-25',
    end: '2018-11-30',
    cssClass: 'family',
    YOUR_DATA: {
      data: 11,
      data2: 2
    }
  },
  {
    title: 'Sunny Out of Office',
    start: '2018-11-25',
    end: '2018-11-30',
    cssClass: 'family',
    YOUR_DATA: {
      data: 11,
      data2: 2
    }
  },
  {
    title: 'Sunny Out of Office',
    start: '2018-11-25',
    end: '2018-11-30',
    cssClass: 'family',
    YOUR_DATA: {
      data: 11,
      data2: 2
    }
  }

]
export default {
  name: 'Home',

  mixins: [],

  components: {
    'full-calendar': require('vue-fullcalendar')
  },

  props: {},

  data () {
    return {
      fcEvents: demoEvents
    }
  },
  computed: {},

  watch: {},

  created () { },

  mounted () {
    console.log()
  },

  destroyed () { },

  methods: {
    today () {
      this.$refs.fullCalendar.currentDate = new Date()
      this.$refs.fullCalendar.$forceUpdate()
    },
    moreClick (date, events, jsEvent) {
      console.log('moreClick', date, events, jsEvent)
    },

    dayClick (date, jsEvent) {
      console.log('dayClick', date, jsEvent)
    },

    eventClick (date, jsEvent) {
      console.log('eventClick', date, jsEvent)
    },

    changeMonth (start, end, current) {
      console.log('changeMonth', start, end, current)
    }
  }
}

</script>
<style lang='scss' scoped>
</style>
