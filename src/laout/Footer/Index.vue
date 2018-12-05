<!-- Footer -->
<template>
  <el-footer class="footer">

    <!-- 联系我们 -->
    <div class="contacts center-content">
      <h4>{{$t('index.contacts')}}</h4>

      <div class="content">
        <el-input v-model="params.email"
                  :placeholder="$t('placeholder.email')">
        </el-input>
        <el-input v-model="params.message"
                  :placeholder="$t('placeholder.bbs')">
        </el-input>
        <el-button type="primary"
                   @click="contact">
          {{ $t('placeholder.submit')}}
        </el-button>

      </div>

    </div>
    <div class="top-footer">
      <div class="links">
        <div v-for="(item,index) in navLsit"
             :key="index"
             v-if="!item.footerHidden">
          <!-- 标题 -->
          <h5 @click="gotoPage(item.path)">
            {{$t('router.'+item.name)}}
          </h5>
          <!-- 内容 -->
          <span v-for="(i,j) in item.children"
                :key="j"
                @click="gotoPage(i.path)">
            {{$t('router.'+i.name)}}<br>
          </span>
        </div>
      </div>
      <div class="qr__warpper">
        <div class="qr">
          <img :src="$baseUrl+'__imgs/index/foot_code.jpg'"
               alt="">
        </div>
        <h5> {{$t('footer.company')}}</h5>
      </div>

    </div>
    <div class="bottom-footer">
      <p>{{$t('footer.address')}}</p>
      <p>{{$t('footer.copyright')}}</p>
    </div>
  </el-footer>
</template>

<script>
import { validateEmail } from '@/utils/validate.js'
export default {
  name: 'Footer',

  mixins: [],

  components: {},

  props: {},

  data () {
    return {
      params: {
        email: '',
        message: ''
      }
    }
  },
  computed: {
    navLsit () {
      return this.$router.options.routes
    }
  },

  watch: {

  },

  created () { },

  mounted () {
  },

  destroyed () { },

  methods: {
    gotoPage (path) {
      this.$router.push(path)
    },
    contact () {
      //
      if (!this.params.email || !this.params.message) {
        this.$message.warning('内容不能为空')
        return
      }
      if (!validateEmail(this.params.email)) {
        this.$message.warning('输入正确邮箱')
        return
      }
      this.$store
        .dispatch('contact', this.params).then((res) => {
          console.log(res)
        })
    }
  }
}

</script>
<style lang='scss' scoped>
.top-footer {
  max-width: 11rem;
  width: 100%;
  margin: 0 auto;
  padding-top: 0.58rem;
  padding-bottom: 0.38rem;
  display: flex;
  justify-content: space-between;
  .links {
    display: flex;
    div + div {
      margin-left: 0.5rem;
    }
    div {
      h5,
      span {
        cursor: pointer;
        &:hover {
          color: $--color-primary;
          text-decoration: underline;
        }
      }
      h5 {
        font-size: 0.18rem;
      }
      span {
        font-size: 0.14rem;
        line-height: 0.25rem;
        color: $--color-text-secondary;
      }
    }
  }
  .qr__warpper {
    text-align: center;
    color: $--color-primary;
    .qr {
      display: inline-flex;
      width: 1.36rem;
      height: 1.27rem;
    }
  }
}
.bottom-footer {
  text-align: center;
  background: $--color-primary;
  color: #fff;
  font-size: 0.14rem;
  padding-top: 0.27rem;
  padding-bottom: 0.27rem;
}
.footer .contacts {
  padding-bottom: 0.58rem;
  border-bottom: 1px solid $--border-color-base;
  h4 {
    margin: 0.36rem 0 0.4rem;
  }
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .el-input {
      width: 34%;
    }
    .el-button {
      padding: 0.12rem 0.78rem;
    }
  }
}

@media (max-width: 768px) {
  .footer {
    .contacts {
      padding: 0 0.2rem 0.4rem;
      .content {
        flex-wrap: wrap;
        flex-flow: column;
        .el-input {
          min-width: 100%;
          display: block;
          margin-bottom: 0.24rem;
        }
        .el-button {
          min-width: 100%;
          // align-self: flex-end;
        }
      }
    }
    .top-footer {
      flex-wrap: wrap;
      .links {
        width: 100%;
        padding: 0 0.2rem;
        justify-content: space-between;

        div + div {
          margin-left: 0;
        }
      }

      .qr__warpper {
        margin-top: 0.2rem;
        min-width: 100%;
      }
    }
    .bottom-footer {
      width: 100%;
    }
  }
}
</style>
