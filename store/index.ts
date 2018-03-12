import Vuex from "vuex";
import { HomeService } from "~/api/home-service";
import { Home, NavigationItem } from "~/models";
import { actions } from "./actions";
import { getters } from "./getters";
import { mutations } from "./mutations";

export interface IState {
  home: Home | undefined;
  language: string;
  navigation: NavigationItem[];
}

export const defaultLang = "en";

const createStore = () => {
  return new Vuex.Store<IState>({
    actions,
    getters,
    mutations,
    state: {
      home: undefined,
      language: defaultLang,
      navigation: [],
    },
  });
};

export default createStore;
