import Vuex from "vuex";
import { LandingPage, NavigationItem } from "~/models";
import { actions } from "./actions";
import { getters } from "./getters";
import { mutations } from "./mutations";

export interface IState {
  landingPage: LandingPage | undefined;
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
      landingPage: undefined,
      language: defaultLang,
      navigation: [],
    },
  });
};

export default createStore;
