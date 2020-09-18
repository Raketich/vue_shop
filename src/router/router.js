import Vue from "vue";
import Router from "vue-router";

import vsCatalog from "../components/vs-catalog";
import vsCart from "../components/vs-cart";

Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: "/",
      name: "catalog",
      component: vsCatalog
    },
    {
      path: "/cart",
      name: "wish_list",
      component: vsCart,
      props: true
    }
  ]
});

export default router;
