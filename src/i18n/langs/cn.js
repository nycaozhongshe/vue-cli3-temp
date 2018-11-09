import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import { getChunks } from '@/utils'
const cnModel = require.context('./cn', true, /\.js$/)
const cnChunks = getChunks(cnModel)

const cn = Object.assign(zhLocale, cnChunks)

export default cn
