import { GetterTree } from "vuex";
import { Home } from "~/models";
import { IState } from ".";

export const getters: GetterTree<IState, IState> = {
  currentLang: (state: IState): string => {
    return state.language;
  },
};
