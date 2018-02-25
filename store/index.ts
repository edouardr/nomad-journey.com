export const state = () => ({
  people: [],
});

export const mutations = {
  // tslint:disable-next-line:no-shadowed-variable
  setPeople(state: any, people) {
    state.people = people;
  },
};

export const actions = {
  async nuxtServerInit({ commit }, { app }) {
    const people = await app.$axios.$get(
      "./random-data.json",
    );
    commit("setPeople", people.slice(0, 10));
  },
};
