import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ItemDetail from "../views/ItemDetail.vue";
import Cart from "../views/Cart.vue"
import OrderFinished from "../views/OrderFinished.vue"
import OrderComfirm from "../views/OrderComfirm.vue"
import OrderLog from "../views/OrderLog.vue"


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
    path: "/OrderFinished",
    name: "OrderFinished",
    component: OrderFinished,
  },
  {
    path: "/OrderComfirm",
    name: "OrderComfirm",
    component: OrderComfirm,
  },
  {
    path: "orderlog",
    name: "OrderLog",
    component: OrderLog,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
