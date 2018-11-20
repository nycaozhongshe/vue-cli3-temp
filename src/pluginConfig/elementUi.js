
import {
  Button,
  Container,
  Main,
  Dialog,
  Form,
  FormItem,
  Loading,
  Message,
  DatePicker,
  Input,
  Select,
  Option,
  Card

  // Header,
  // Footer,
  // Menu,
  // Table,
  // TableColumn,
  // Submenu,
  // MenuItem,
  // Breadcrumb,
  // BreadcrumbItem,
  // Cascader
} from 'element-ui'
const components = [
  Form,
  FormItem,
  Button,
  Dialog,
  Container,
  DatePicker,
  Main,
  Input,
  Select,
  Option,
  Card
  // Header,
  // Footer
  // Table,
  // TableColumn,
  // Breadcrumb,
  // BreadcrumbItem,
  // Menu,
  // Submenu,
  // Cascader
  // MenuItem
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
