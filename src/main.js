// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from './router'
import MintUI from 'mint-ui'
import babel from 'babel-polyfill'
import VueClipboard from 'vue-clipboard2'
import store from './store'
import 'mint-ui/lib/style.css'
import '@/common/css/app.scss'
import jquery from "jquery"

Vue.use(MintUI);
Vue.use(VueClipboard);
Vue.use(babel);

axios.defaults.withCredentials=true;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
