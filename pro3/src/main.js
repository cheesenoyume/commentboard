import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import MainMsg from './components/MainMsg'
import AddMsg from './components/AddMsg'
import SingleMsg from './components/SingleMsg'
import axios from 'axios'

Vue.prototype.$ajax = axios;

Vue.config.productionTip = false

Vue.use(VueRouter)
const router = new VueRouter({
  routes:[{path:"/mainmsg",component:MainMsg},
    {path:"/addmsg",component:AddMsg},
    {path:"/singlemsg/:id",component:SingleMsg}], mode:"history"
})

Vue.filter("snippet",function(value){
  return value.slice(0,30)+"...";
})
new Vue({
  router,
  render: function (h) { return h(App) },
}).$mount('#app')
