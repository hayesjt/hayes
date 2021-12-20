// Vue Imports
import Vue from 'vue';
import VueRouter from "vue-router";

// Component Imports
import App from './App.vue';
import MainPage from "@/components/MainPage";
import WorkHistory from "@/components/WorkHistory";
import Blog from "@/components/Blog";
import NewDevPortal from "@/components/NewDevPortal";
import VirtualResume from "@/components/workhistory-components/VirtualResume";
import TechVideoGallery from "@/components/workhistory-components/TechVideoGallery";
import ArchGallery from "@/components/workhistory-components/ArchGallery";
import Volunteer from "@/components/Volunteer";

// Bootstrap Imports
import NavBar from "@/components/NavBar";
import { BootstrapVue, NavbarPlugin, NavPlugin, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.use(NavPlugin);
Vue.use(NavbarPlugin);
Vue.use(BootstrapVueIcons);
Vue.use(VueRouter);

const routes = [
  { path: '/', component: MainPage },
  { path: '/blog', component: Blog },
  { path: '/workhistory', component: WorkHistory },
  { path: '/newdevportal', component: NewDevPortal },
  { path: '/virtualresume', component: VirtualResume },
  { path: '/techvideogallery', component: TechVideoGallery },
  { path: '/archgallery', component: ArchGallery },
  { path: '/volunteerwork', component: Volunteer }
];

const router = new VueRouter({
  routes: routes
});

Vue.component('main-page', MainPage);
Vue.component('navbar', NavBar);
Vue.component('workhistory', WorkHistory);
Vue.component('blog', Blog);

Vue.config.productionTip = false

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
