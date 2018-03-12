import { ActionContext, ActionTree, Commit } from "vuex";
import { HomeService } from "~/api/home-service";
import { NavigationService } from "~/api/navigation-service";
import { Symbols } from "~/constants";
import { Home } from "~/models";
import { IState } from "./";

const loadNav = async (commit: Commit, language: string): Promise<void> => {
};

export const actions: ActionTree<IState, IState> = {
};
