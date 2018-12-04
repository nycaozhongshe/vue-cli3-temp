<!-- Index -->
<template>
  <div class="index__warpper">
    <!-- <img v-lazy="$baseUrl+'__imgs/common/timg.jpeg'"
         alt=""> -->

    <div class="search__warper">

      <el-cascader class="city"
                   v-model="selectedOptions"
                   placeholder="请选择省份或者城市"
                   :options="cityOptions"
                   :props="props"
                   filterable
                   change-on-select>
      </el-cascader>

      <el-input class="input"
                v-model.trim="input"
                placeholder="请输入内容"
                @keyup.enter.native="submit"
                clearable>
      </el-input>
      <el-button class="submit"
                 type="primary"
                 size="small"
                 @click="submit"
                 :disabled="loading">
        查询
      </el-button>
      <el-button size="small"
                 @click="clear">
        清空
      </el-button>
    </div>
    <div class="result__warpper">
      <template>
        <el-table :data="tableData"
                  border
                  stripe
                  style="width: 100%">
          <el-table-column type="index"
                           width="50">
          </el-table-column>
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
                           width="130">
            <template slot-scope="scope">
              <el-button @click="handleClickCourt(scope.row)"
                         type="text"
                         size="small">
                法院公告查询
              </el-button>
              <br>
              <el-button @click="handleClickAbnormal(scope.row)"
                         size="small"
                         type="text">
                异常信息查询
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
    </div>
  </div>
</template>

<script>
import cityOptions from '@/utils/city.js'
export default {
  name: 'Index',

  mixins: [],

  components: {},

  props: {},

  data () {
    return {
      input: '',
      cityOptions: cityOptions,
      selectedOptions: [],
      loading: false,
      props: {
        value: 'Code',
        label: 'City'
      },
      tableData: []
    }
  },
  computed: {},

  watch: {},

  created () { },

  mounted () { },

  destroyed () { },

  methods: {
    submit () {
      if (this.loading) return
      if (this.input) {
        this.loading = true

        let params = { keyword: this.input, pageIndex: 1, pageSize: 20 }
        // 添加省市编码
        if (this.selectedOptions.length === 1) {
          if (this.selectedOptions[0] !== 'CN') {
            params.ProvinceCode = this.selectedOptions[0]
          }
        } else if (this.selectedOptions.length === 2) {
          params.ProvinceCode = this.selectedOptions[0]
          params.cityCode = this.selectedOptions[1]
        }
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
    },

    clear () {
      this.input = ''
      this.selectedOptions = []
    }
  }
}

</script>
<style lang='scss' scoped>
.index__warpper {
  // padding: 20px;
  .search__warper {
    width: 100%;
    padding-left: 30%;
    display: flex;
    align-items: center;
    .city {
      margin-right: 10px;
    }
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
