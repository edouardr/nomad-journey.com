import { MutationTree } from "vuex";
import { Symbols } from "~/constants";
import { LandingPage, NavigationItem } from "~/models";
import { IState } from "./";

export const mutations: MutationTree<IState> = {
  [Symbols.MUTATIONS.SET_HOME]: (state: IState, landingPage: LandingPage): void => {
    state.landingPage = landingPage;
  },
  [Symbols.MUTATIONS.SET_LANGUAGE]: (state: IState, language: string): void => {
    state.language = language;
  },
  [Symbols.MUTATIONS.SET_NAVIGATION]: (state: IState, navigation: NavigationItem[]): void => {
    state.navigation = navigation;
  },
};
