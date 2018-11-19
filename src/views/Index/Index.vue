<!-- Index -->
<template>
  <div class="index__warpper">
    <!-- <img v-lazy="$baseUrl+'__imgs/common/timg.jpeg'"
         alt=""> -->

    <div class="search__warper">
      <el-input class="input"
                v-model.trim="input"
                placeholder="请输入内容"
                clearable>
      </el-input>
      <el-button class="submit"
                 type="primary"
                 @click="submit">
        查询
      </el-button>
    </div>
    <div class="result__warpper">
      <template>
        <el-table :data="tableData"
                  border
                  stripe
                  style="width: 100%">
          <el-table-column prop="Name"
                           label="公司名">
          </el-table-column>

          <el-table-column prop="OperName"
                           label="法人">
          </el-table-column>
          <el-table-column prop="Status"
                           label="运营状态">
          </el-table-column>
          <el-table-column prop="StartDate"
                           label="注册时间">
          </el-table-column>
          <el-table-column prop="KeyNo"
                           label="编号">
          </el-table-column>
          <el-table-column prop="CreditCode"
                           label="统一社会信用代码">
          </el-table-column>
          <el-table-column fixed="right"
                           label="查询操作"
                           width="120">
            <template slot-scope="scope">
              <el-button @click="handleClickCourt(scope.row)"
                         type="text"
                         size="small">法院公告</el-button>
              <br>
              <el-button @click="handleClickAbnormal(scope.row)"
                         size="small"
                         type="text">经营异常</el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
    </div>
  </div>
</template>

<script>

let list = [
  {
    'KeyNo': '83e331b1c33c6aa80df5c196d1cffd35',
    'Name': '新之航传媒集团有限公司',
    'OperName': '鞠航',
    'StartDate': '2001-03-23 00:00:00',
    'Status': '在营（开业）企业',
    'No': '370000228010004',
    'CreditCode': '91370102727559681P'
  }, {
    'KeyNo': 'fe34b66b75f63bccbaaab790db4a2e49',
    'Name': '山东新之航软件科技有限公司',
    'OperName': '鞠帆',
    'StartDate': '2016-01-14 00:00:00',
    'Status': '在营（开业）企业',
    'No': '370100400010809',
    'CreditCode': '91370100MA3C5JA57T'
  }, {
    'KeyNo': 'c420d5b08f3d90b0ba409a47a42e3522',
    'Name': '山东尊享新之航旅行社有限公司',
    'OperName': '于涛',
    'StartDate': '2016-02-06 00:00:00',
    'Status': '在营（开业）企业',
    'No': '370102200257115',
    'CreditCode': '91370102MA3C6EDP1K'
  }, {
    'KeyNo': 'fde19f25448d8c7ec3d7ba9df9e4f5f7',
    'Name': '山东新之航空间设计有限公司',
    'OperName': '丰霞',
    'StartDate': '2018-02-05 00:00:00',
    'Status': '在营（开业）企业',
    'No': '370102200441339',
    'CreditCode': '91370102MA3MNPJY5P'
  }, {
    'KeyNo': '51baee97c0c2552182888a7243f05a4b',
    'Name': '山东航空新之航传媒有限公司',
    'OperName': '王武平',
    'StartDate': '2015-06-30 00:00:00',
    'Status': '在营（开业）企业',
    'No': '370100000053256',
    'CreditCode': '91370112307238988X'
  }, {
    'KeyNo': '9225d23ceb7136f52ab9070f10d48c9c',
    'Name': '洛阳新之航商贸有限公司',
    'OperName': '张海欠',
    'StartDate': '2013-12-12 00:00:00',
    'Status': '存续（在营、开业、在册）',
    'No': '410305010041749',
    'CreditCode': '9141030508689661XJ'
  }, {
    'KeyNo': '43e0e8e52b059302b10e372ea8cece98',
    'Name': '河南新之航文化传播有限公司',
    'OperName': '张桂海',
    'StartDate': '2014-09-04 00:00:00',
    'Status': '存续（在营、开业、在册）',
    'No': '410105000523513',
    'CreditCode': '91410105395966861B'
  }, {
    'KeyNo': '3489582c1e21c0f254254ae8a1dd8349',
    'Name': '河南新之航信息技术有限公司',
    'OperName': '胡明芳',
    'StartDate': '2014-08-06 00:00:00',
    'Status': '存续（在营、开业、在册）',
    'No': '410105000507677',
    'CreditCode': '91410105395405466H'
  }, {
    'KeyNo': 'sb52b03723d5f67fb14eece2426edc33',
    'Name': '临邑新之航技能培训学校',
    'OperName': '杨艺峰',
    'StartDate': '2013-03-10 00:00:00',
    'Status': '正常',
    'No': '',
    'CreditCode': '52371424MJE9329538'
  }, {
    'KeyNo': '3136d3680ab11fd7306a5475d245a193',
    'Name': '新疆新之航文化传媒有限公司',
    'OperName': '吕兵',
    'StartDate': '2018-03-07 00:00:00',
    'Status': '开业',
    'No': '650203050012823',
    'CreditCode': '91650203MA77UUH69D'
  }]
export default {
  name: 'Index',

  mixins: [],

  components: {},

  props: {},

  data () {
    return {
      input: '',
      loading: false,
      tableData: list || []
    }
  },
  computed: {},

  watch: {},

  created () { },

  mounted () { },

  destroyed () { },

  methods: {
    submit () {
      if (this.input) {
        this.loading = true

        let params = { keyword: this.input, pageIndex: 1, pageSize: 10 }

        this.$store
          .dispatch('getCompany', params).then((res) => {
            this.loading = false

            let { Status, Result } = res

            if (Status === '200') {
              this.tableData = Result
            } else if (Status === '201') {
              this.tableData = []
              this.$message('暂无公司信息')
            }
          }).catch((error) => {
            console.log(error.Message)
          })
      } else {
        this.loading = false
        this.$message.warning('内容不能为空')
      }
    },

    handleClickAbnormal (row) {
      console.log(row)
      this.gotoPage('/AbnormalDetail', row.KeyNo, row.Name)
    },

    handleClickCourt (row) {
      this.gotoPage('/CourtDetail', row.KeyNo, row.Name)
    },

    gotoPage (path, KeyNo, Name) {
      this.$router.push({
        path,
        query: {
          // KeyNo: 'ac66f9d18c12d884e23b7c83bbad1c6b', // 测试功能
          KeyNo,
          // Name: '北京京东世纪贸易有限公司'// 测试功能
          Name
        }
      })
    }
  }
}

</script>
<style lang='scss' scoped>
.index__warpper {
  // padding: 20px;
  .search__warper {
    width: 100%;
    padding-left: 40%;
    display: flex;
    align-items: center;
    .input {
      flex: 1;
    }
    .submit {
      margin-left: 30px;
    }
  }
  .result__warpper {
    margin-top: 20px;
  }
}
</style>
