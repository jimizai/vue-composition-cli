import Vue from "vue";
import Vuex from "vuex";
import globalModule from "./global";
import createLogger from "vuex/dist/logger";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    global: globalModule
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
});
