import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import "./registerServiceWorker";

import "papercss/dist/paper.min.css";
import "toastr/build/toastr.min.css";

import VeeValidate from "vee-validate";
import toastr from "toastr";

Vue.use(VeeValidate);

Vue.config.productionTip = false;

toastr.options = {
  positionClass: "toast-top-right"
};

Vue.prototype.$toastr = toastr;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
