import Vue from "vue";
import VueCompositionApi from "@vue/composition-api";
import router from "./router";
import App from "./App";
import { Button } from "ant-design-vue";
import "ant-design-vue/dist/antd.less";

Vue.config.productionTip = false;
Vue.use(VueCompositionApi);

Vue.use(Button);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
