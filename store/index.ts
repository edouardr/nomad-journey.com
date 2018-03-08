import Vuex from "vuex";
import { HomeService } from "~/api/home-service";
import { Home } from "~/models";
import { actions } from "./actions";
import { getters } from "./getters";
import { mutations } from "./mutations";

export interface IState {
  home: Home | undefined;
}

const createStore = () => {
  return new Vuex.Store<IState>({
    actions,
    getters,
    mutations,
    state: {
      home: undefined,
    },
  });
};

export default createStore;
