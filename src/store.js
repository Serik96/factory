import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
const store = createStore({
  state() {
    return {
      favorites: [],
      searchText: "",
    };
  },
  mutations: {
    addToFavorites(state, photoData) {
      state.favorites.push(photoData);
    },
    removeFromFavorites(state, photoData) {
      const index = state.favorites.findIndex(
        (photo) => photo.id === photoData.id
      );
      if (index !== -1) {
        state.favorites.splice(index, 1);
      }
    },
    setSearchText(state, searchText) {
      state.searchText = searchText;
    },
    clearSearchText(state) {
      state.searchText = "";
    },
  },
  actions: {
    setSearchText({ commit }, searchText) {
      commit("setSearchText", searchText);
    },
    clearText({ commit }) {
      commit("clearSearchText");
    },
  },
  plugins: [
    createPersistedState({
      key: "my-vuex-store",
      paths: ["favorites"],
    }),
  ],
});

export default store;
