import router from './index'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style

// 路由守卫-判断登陆状态
router.beforeEach(({ name }, from, next) => {
  NProgress.start() // start progress bar
  next()
})

router.afterEach(() => {
  // window.scrollTo(0, 0);
  NProgress.done() // finish progress bar
})
