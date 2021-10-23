import Vue from 'vue';
import App from './App.vue';
import MainPage from "@/components/MainPage";
import WorkHistory from "@/components/WorkHistory";
import Blog from "@/components/Blog";

Vue.component('main-page', MainPage);
Vue.component('work-history', WorkHistory);
Vue.component('blog', Blog);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
