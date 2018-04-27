// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'babel-polyfill'
import App from './App'
import router from './routes/index'
import store from './store.js'
import VueI18n from 'vue-i18n'
import langdata from "./assets/data/langdata"
Vue.use(VueI18n)
var messages = langdata;
var i18n = new VueI18n({
  locale: 'zh',
  messages:messages
})

new Vue({
	i18n,
	router,
	store,
	el: "#app",
	render: h => h(App)
})
