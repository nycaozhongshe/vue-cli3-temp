/**
 * Created by nytoamto on 18/7/27.
 */
// "yy-MM-dd hh:ms:ss"
export function dateFtt (fmt, date) {
  // author: meizz
  var o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + '').substr(4 - RegExp.$1.length)
    )
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
      )
    }
  }
  return fmt
}

export const getChunks = modulesContext => {
  const chunks = modulesContext.keys().reduce((modules, key) => {
    modules[key.replace(/(^\.\/)|(\.js$)/g, '')] = modulesContext(key).default
    return modules
  }, {})
  return chunks
}

export function registerModules (modules, store) {
  const modulesChunks = getChunks(modules)
  for (let key in modulesChunks) {
    store.registerModule(key, modulesChunks[key])
  }
}

export function MP (ak) {
  return new Promise(function (resolve, reject) {
    // eslint-disable-next-line
    window.initMap = () => {
      resolve(window.BMap)
      console.log('init map')
    }

    if (!window.BMap) {
      var script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = 'http://api.map.baidu.com/api?v=2.0&ak=' + ak + '&callback=initMap'
      script.onerror = reject
      document.head.appendChild(script)
    } else {
      resolve(window.BMap)
    }
  })
}

const langKey = '@@Slang'

export function saveLang (lang) {
  localStorage.setItem(langKey, lang)
}

export function getLang () {
  let lang = localStorage.getItem(langKey)
  if (lang === 'cn' || lang === 'en') {
    return lang
  } else {
    return 'cn'
  }
}
