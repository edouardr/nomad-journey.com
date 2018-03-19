import { ActionContext, ActionTree, Commit, Dispatch } from "vuex";
import { Symbols } from "~/constants";
import { LandingPage } from "~/models";
import axios from "~/plugins/axios";
import { IState } from "./";

export const actions: ActionTree<IState, IState> = {
  async getLandingPage({ commit }: ActionContext<IState, IState>) {
    const response = await axios.get("/api/landing-page/en/home");
    commit(Symbols.MUTATIONS.SET_HOME, response.data);
  },
};
