// Vue Imports
import Vue from 'vue';
import VueRouter from "vue-router";

// Component Imports
import App from './App.vue';
import MainPage from "@/components/MainPage";
import NewDevPortal from "@/components/NewDevPortal";
import VirtualResume from "@/components/VirtualResume";
import TechVideoGallery from "@/components/TechVideoGallery";
import Volunteer from "@/components/Volunteer";

// Bootstrap Imports
import NavBar from "@/components/NavBar";
import { BootstrapVue, NavbarPlugin, NavPlugin, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//Global Style Import
import "./assets/styles/global-styles.css";

Vue.use(BootstrapVue);
Vue.use(NavPlugin);
Vue.use(NavbarPlugin);
Vue.use(BootstrapVueIcons);
Vue.use(VueRouter);

const routes = [
    { path: '/', component: MainPage },
    { path: '/newdevportal', component: NewDevPortal },
    { path: '/virtualresume', component: VirtualResume },
    { path: '/techvideogallery', component: TechVideoGallery },
    { path: '/volunteerwork', component: Volunteer }
];

const router = new VueRouter({
    routes: routes
});

Vue.component('main-page', MainPage);
Vue.component('navbar', NavBar);

Vue.config.productionTip = false

new Vue({
    router: router,
    render: h => h(App),
}).$mount('#app')