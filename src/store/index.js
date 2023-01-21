import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    formData: {
      name: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
  },
  getters: {
    get_userInfo: (state) => state.formData,
  },
  mutations: {
    USER_NAME: (state, payload) => {
      const data = state.formData;
      data.name = payload.userName;
      data.email = payload.userEmail;
      data.password = payload.userPassword;
      data.repeatPassword = payload.userRepeatPassword;
    },
  },
  actions: {
    set_userInfo: ({ commit }, payload) => {
      commit("USER_NAME", payload);
    },
  },
  modules: {},
});
