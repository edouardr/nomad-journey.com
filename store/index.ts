export const state = () => ({
  items: [],
});

export const mutations = {
  // tslint:disable-next-line:no-shadowed-variable
  setMenuItems(state: any, menuItems: any[]) {
    state.items = menuItems;
  },
};

export const actions = {
  async nuxtServerInit({ commit }, { app }) {
    commit("setMenuItems", [{
      title: "Home",
      url: "/",
    },
    {
      title: "Itinerary",
      url: "/itinerary",
    },
    {
      title: "Destinations",
      url: "/destinations",
    },
    {
      title: "Portraits",
      url: "/portraits",
    },
    {
      title: "About Us",
      url: "/about",
    }]);
  },
};
