import { Home } from "models";
import { MutationTree } from "vuex";
import { Symbols } from "~/constants";
import { IState } from "./";

export const mutations: MutationTree<IState> = {
  [Symbols.MUTATIONS.SET_HONE]: (state: IState, home: Home): void => {
    state.home = home;
  },
};
