
import {
  Button,
  Container,
  Header,
  Main,
  Footer,
  Input,
  Loading,
  Message,
  // DatePicker,
  Menu,
  Submenu,
  MenuItem
} from 'element-ui'

const components = [
  Button,
  Container,
  Header,
  Main,
  Footer,
  Input,
  // DatePicker,
  Menu,
  Submenu,
  MenuItem
]

const install = function (Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
  Vue.use(Loading.directive)
  Vue.prototype.$loading = Loading.service
  Vue.prototype.$message = Message
}

export default {
  install
}
