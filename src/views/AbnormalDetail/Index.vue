<!-- AbnormalDetail -->

<script>
import CourtDetail from '@/views/CourtDetail/Index'

let col = [
  {
    prop: 'AddReason',
    label: '列入经营异常名录原因'
  },
  {
    prop: 'AddDate',
    label: '列入日期'
  },
  {
    prop: 'RomoveReason',
    label: '移出经营异常名录原因'
  },
  {
    prop: 'RemoveDate',
    label: '移出日期'
  },
  {
    prop: 'DecisionOffice',
    label: '作出决定机关'
  },
  {
    prop: 'RemoveDecisionOffice',
    label: '移除决定机关'
  }
]
export default {
  name: 'AbnormalDetail',

  mixins: [CourtDetail],

  components: {},

  props: {},

  data () {
    return {
      getMethods: 'getCompanyExcept',
      col
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
