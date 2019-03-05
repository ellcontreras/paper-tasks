import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";

import { ADD_TASK, DELETE_TASK } from "./mutation-types";

Vue.use(Vuex);

const vuexPersist = new VuexPersist({
  key: "paper-tasks",
  storage: localStorage
});

export default new Vuex.Store({
  state: {
    tasks: []
  },
  mutations: {
    [ADD_TASK](state, payload) {
      state.tasks.push(payload);
    },
    [DELETE_TASK](state, payload) {
      state.tasks = state.tasks.filter((value, index, arr) => {
        return value.title !== payload.title;
      });
    }
  },
  actions: {
    [ADD_TASK](context, payload) {
      context.commit(ADD_TASK, payload);
    }
  },
  plugins: [vuexPersist.plugin]
});
