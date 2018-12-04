<!-- Footer -->
<template>
  <el-footer class="footer">

    <!-- 联系我们 -->
    <div class="contacts center-content">
      <h4>{{$t('index.contacts')}}</h4>

      <div class="content">
        <el-input v-model="input"
                  :placeholder="$t('placeholder.email')">
        </el-input>
        <el-input v-model="input"
                  :placeholder="$t('placeholder.bbs')">
        </el-input>
        <el-button type="primary">
          发送
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
export default {
  name: 'Footer',

  mixins: [],

  components: {},

  props: {},

  data () {
    return {

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
    console.log(this.$router.options.routes)
  },

  destroyed () { },

  methods: {
    gotoPage (path) {
      this.$router.push(path)
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
</style>

<style lang="scss" scoped>
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
</style>
