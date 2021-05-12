import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ItemDetail from "../views/ItemDetail.vue";
import Cart from "../views/Cart.vue"
import Order from "../views/Order.vue";

Vue.use(VueRouter);

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/:item_id?/item_detail",
    name: "item_detail",
    component: ItemDetail,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/order",
    name: "Order",
    component: Order
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
