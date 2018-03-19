import { GetterTree } from "vuex";
import { IState } from ".";

export const getters: GetterTree<IState, IState> = {
  currentLang: (state: IState): string => {
    return state.language;
  },
};
