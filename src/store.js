import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";

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
    addTask(state, payload) {
      state.tasks.push(payload);
    }
  },
  actions: {
    ADD_TASK(context, payload) {
      context.commit("addTask", payload);
    }
  },
  plugins: [vuexPersist.plugin]
});
