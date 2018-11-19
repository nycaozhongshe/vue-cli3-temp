
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
  Table,
  TableColumn,
  Submenu,
  MenuItem,
  Breadcrumb,
  BreadcrumbItem
} from 'element-ui'
const components = [
  Button,
  Container,
  Header,
  Main,
  Footer,
  Table,
  TableColumn,
  Input,
  Breadcrumb,
  BreadcrumbItem,
  // DatePicker,
  Menu,
  Submenu,
  MenuItem
]

const install = function (Vue, opts = {}) {
  // Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 }

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
