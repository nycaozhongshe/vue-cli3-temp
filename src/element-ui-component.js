
import {
  Button,
  Container,
  Header,
  Main,
  Footer,
  Input
} from 'element-ui'

const components = [
  Button,
  Container,
  Header,
  Main,
  Footer,
  Input
]

const install = function (Vue, opts = {}) {
  console.log(components)

  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default {
  install
}
