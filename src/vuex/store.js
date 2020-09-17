import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    cars: []
  },
  mutations: {
    SET_CARS_TO_STATE: (state, cars) => {
      state.cars = cars;
    }
  },
  actions: {
    GET_CARS_FROM_API({ commit }) {
      return axios("http://localhost:3000/cars", {
        method: "GET"
      })
        .then((cars) => {
          commit("SET_CARS_TO_STATE", cars.data);
          return cars;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    }
  },
  getters: {
    PRODUCTS(state) {
      return state.cars;
    }
  }
});

export default store;
