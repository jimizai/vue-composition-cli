import { Module } from "vuex";
import actions from "./actions";
import mutations from "./mutations";
export const state = {
  token: "",
  user: ""
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
} as Module<typeof state, any>;
