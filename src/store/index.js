import Vue from 'vue'
import Vuex from 'vuex'
import { registerModules } from '@/utils'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import createPersistedState from 'vuex-persistedstate' // vuex数据持久化插件

Vue.use(Vuex)

const modules = require.context('./modules', true, /\.js$/)

const store = new Vuex.Store(
  {
    state,
    mutations,
    actions,
    getters,
    strict: process.env.NODE_ENV === 'development',
    plugins: [createPersistedState()]
  }
)

registerModules(modules, store)

export default store
