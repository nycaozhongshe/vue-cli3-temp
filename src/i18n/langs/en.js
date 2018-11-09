import enLocale from 'element-ui/lib/locale/lang/en'
import { getChunks } from '@/utils'
const enModel = require.context('./en', true, /\.js$/)
const enChunks = getChunks(enModel)

const en = Object.assign(enLocale, enChunks)

export default en
