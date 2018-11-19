import Vue from 'vue'

import VueI18n from 'vue-i18n'

import locale from 'element-ui/lib/locale' // 兼容element

import messages from './langs'

import { getLang } from '@/utils'

const lang = getLang()

Vue.use(VueI18n)
// 从localStorage中拿到用户的语言选择，如果没有，那默认中文。
const i18n = new VueI18n({
  locale: lang,
  messages
})

locale.i18n((key, value) => i18n.t(key, value)) // 兼容element
export default i18n
