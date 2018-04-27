import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/* 测试数据 */
const date = 'Mon Oct 17 2016 00:00:00 GMT+0800 (中国标准时间)'
const ruleForm = {
}
const state = {
    ruleForm: ruleForm
}

const mutations = {
    setRuleForm(state, payload) {
    }
}

export default  new Vuex.Store({
    state,
    mutations
})
