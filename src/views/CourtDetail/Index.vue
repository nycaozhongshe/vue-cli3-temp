<!-- CourtDetail -->
<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>法院公告</el-breadcrumb-item>
      <el-breadcrumb-item>{{companyName}}</el-breadcrumb-item>
    </el-breadcrumb>

    <div class="result__warpper">
      <template>
        <el-table :data="tableData"
                  v-loading="loading"
                  border
                  stripe
                  style="width: 100%">
          <el-table-column v-for="(item,index) in col"
                           :key="index"
                           :prop="item.prop"
                           :label="item.label">
          </el-table-column>

        </el-table>
      </template>
    </div>
  </div>
</template>

<script>

let col = [
  {
    prop: 'Party',
    label: '公司名、当事人'
  },
  {
    prop: 'UploadDate',
    label: '下载时间'
  },
  {
    prop: 'Court',
    label: '执行法院'
  },
  {
    prop: 'Content',
    label: '内容'
  },
  {
    prop: 'Category',
    label: '分类'
  },
  {
    prop: 'PublishedDate',
    label: '发布时间'
  },
  {
    prop: 'PublishedPage',
    label: '公布、页'
  }
]
export default {
  name: 'CourtDetail',

  mixins: [],

  components: {},

  props: {},

  data () {
    return {
      getMethods: 'getCompanyCour',
      col,
      loading: false,
      lastKeyNo: '',
      lastCompany: ''
    }
  },
  computed: {
    KeyNo () {
      return this.$route.query.KeyNo
    },
    companyName () {
      return this.$route.query.Name
    }
  },
  activated () {
    if (this.getMethods === 'getCompanyCour') {
      if (this.lastCompany !== this.companyName) {
        this.getData()
      }
    } else {
      if (this.lastKeyNo !== this.KeyNo) {
        this.getData()
      }
    }
  },
  // deactivated () {
  // },
  watch: {

  },

  created () {
    // this.getData()
  },

  mounted () { },

  destroyed () { },

  methods: {

    getData () {
      if (!this.KeyNo) return
      this.loading = true
      //
      let params
      if (this.getMethods === 'getCompanyCour') {
        params = { companyName: this.companyName }
      } else {
        params = { keyNo: this.KeyNo }
      }
      //
      this.$store
        .dispatch(this.getMethods, params).then((res) => {
          //
          this.loading = false
          // 记录最后一次保存公司
          this.lastKeyNo = this.KeyNo
          this.lastCompany = this.companyName
          //
          let { Status, Result, Message } = res
          if (Status === '200') {
            this.tableData = Result
          } else {
            this.tableData = []
            this.$message({
              message: Message,
              type: 'warning',
              duration: 1.5
            })
          }

          //
        }).catch((error) => {
          this.loading = false
          console.log(error.Message)
        })
    }
  }
}

</script>
<style lang='scss' scoped>
.result__warpper {
  margin-top: 30px;
}
</style>
