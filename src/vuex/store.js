import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    cars: [],
    wishList: []
  },
  mutations: {
    SET_CARS_TO_STATE: (state, cars) => {
      state.cars = cars;
    },
    SET_WISHLIST: (state, car) => {
      if (state.wishList.length) {
        let isCarExists = false;
        state.wishList.map(function(item) {
          if (item.id === car.id) {
            isCarExists = true;
            item.quantity++;
          }
        });
        if (!isCarExists) {
          state.wishList.push(car);
        }
      } else {
        state.wishList.push(car);
      }
    },
    REMOVE_FROM_WISHLIST: (state, i) => {
      state.wishList.splice(i, 1);
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
    },
    ADD_TO_WISHLIST({ commit }, car) {
      commit("SET_WISHLIST", car);
    },
    DELETE_FROM_WISHLIST({ commit }, i) {
      commit("REMOVE_FROM_WISHLIST", i);
    }
  },
  getters: {
    PRODUCTS(state) {
      return state.cars;
    },
    WISH_LIST(state) {
      return state.wishList;
    }
  }
});

export default store;
