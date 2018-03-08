import { ActionContext, ActionTree } from "vuex";
import { HomeService } from "~/api/home-service";
import { Symbols } from "~/constants";
import { Home } from "~/models";
import { IState } from "./";

export const actions: ActionTree<IState, IState> = {
  async nuxtServerInit({ commit }: ActionContext<IState, IState>) {
    const homeService: HomeService = new HomeService();
    const home = await homeService.get();
    commit(Symbols.MUTATIONS.SET_HONE, home);
  },
};
