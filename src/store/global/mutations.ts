import * as actionTypes from "./constants";
import { state as defaultState } from "./index";
export default {
  [actionTypes.CHANGE_GLOBAL_TOKEN](state: typeof defaultState, val: string) {
    state.token = val;
  },
  [actionTypes.CHANGE_GLOBAL_USER](state: typeof defaultState, val: string) {
    state.user = val;
  }
};
