import Vue from "vue";
import VueCompositionApi from "@vue/composition-api";
import router from "./router";
import App from "./App";
import store from "./store";
import { Button, Layout, Spin } from "ant-design-vue";
import { WrappedSetupPlugin } from "vue-rest-hooks";
import "ant-design-vue/dist/antd.less";

Vue.config.productionTip = false;
Vue.use(VueCompositionApi);
Vue.use(WrappedSetupPlugin);
Vue.use(Button);
Vue.use(Spin);
Vue.use(Layout);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
