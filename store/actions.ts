import { ActionContext, ActionTree } from "vuex";
import { HomeService } from "~/api/home-service";
import { NavigationService } from "~/api/navigation-service";
import { Symbols } from "~/constants";
import { Home } from "~/models";
import { IState } from "./";

export const actions: ActionTree<IState, IState> = {
  async nuxtServerInit({ commit }: ActionContext<IState, IState>) {
    const homeService: HomeService = new HomeService();
    commit(Symbols.MUTATIONS.SET_HOME, await homeService.get());

    const navigationService: NavigationService = new NavigationService();
    const navResponse = await navigationService.getAll();
    commit(Symbols.MUTATIONS.SET_NAVIGATION, navResponse.items);
  },
};
