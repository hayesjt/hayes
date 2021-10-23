import Vue from 'vue';
import VueRouter from "vue-router";
import App from './App.vue';
import MainPage from "@/components/MainPage";
import WorkHistory from "@/components/WorkHistory";
import Blog from "@/components/Blog";
import NavBar from "@/components/NavBar";
import { BootstrapVue, NavbarPlugin, NavPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(NavPlugin)
Vue.use(NavbarPlugin)
Vue.use(VueRouter);

const routes = [
  { path: '/blog', component: Blog },
  { path: '/workhistory', component: WorkHistory },
  { path: '/', component: MainPage }
];

const router = new VueRouter({
  routes: routes
});

Vue.component('main-page', MainPage);
Vue.component('workhistory', WorkHistory);
Vue.component('blog', Blog);
Vue.component('navbar', NavBar);

Vue.config.productionTip = false

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
