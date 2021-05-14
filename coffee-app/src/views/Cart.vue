<template>
  <div>
    <div class="container">
      <div class="row">
        <div
          class="table-responsive col-lg-offset-1 col-lg-10 col-md-offset-1 col-md-10 col-sm-10 col-xs-12"
        >
          <h3 class="text-center mt-4">ショッピングカート</h3>
          <table class="table table-striped item-list-table mt-4">
            <tbody>
              <tr>
                <th>
                  <div class="text-center">商品名</div>
                </th>
                <th>
                  <div class="text-center">価格(税込)</div>
                </th>
                <th>
                  <div class="text-center">商品イメージ</div>
                </th>
                <th>
                  <div class="text-center">ー</div>
                </th>
              </tr>
              <tr
                v-for="(order, index) in orders"
                :key="index"
                class="text-center"
              >
                <td>
                  <router-link
                    :to="{
                      name: 'item_detail',
                      params: { item_id: order.id },
                    }"
                    >{{ order.name }}</router-link
                  >
                </td>
                <td>{{ order.price }}円</td>
                <td><img :src="order.imagePath" style="width: 100px; height: 100px;"></td>
                <td><button @click="deleteOrder(order)">削除</button></td>
              </tr>
              <tr v-if="orders.length === 0">
                <td class="text-center">カートに商品がありません</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-offset-2 col-xs-8">
          <div class="form-group text-center" v-if="orders.length != 0">
            <span id="total-price"
              >ご注文金額合計：{{ totalPrice }}円(税込)</span
            ><br />
            <span id="total-price">内消費税：{{ taxPrice }}円</span>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-offset-5 col-xs-3">
          <div class="form-group">
            <div
              class="form-group text-center"
              v-if="orders.length != 0"
              @click="LoginComfirm"
            >
              <router-link :to="{ name: 'OrderComfirm' }">
                <form action="order_confirm.html">
                  <input
                    class="form-control btn btn-warning btn-block mt-4"
                    type="submit"
                    value="注文に進む"
                  />
                </form>
              </router-link>
            </div>
            <p class="text-center mt-4">
              <router-link :to="{ name: 'Home' }"
                >トップページに戻る</router-link
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  name: "Cart",
  data() {
    return {};
  },
  methods: {
    deleteOrder(order) {
      if (confirm("カートから削除しますか？")) {
        if (this.$store.state.login_user != null) {
          console.log(order);
          let orderItem = this.$store.state.orders.find(
            (element) => element.itemId === order.id
          );
          console.log(orderItem);
          let orderItemId = orderItem.id;
          console.log(orderItemId)
          console.log(orderItemId);
          this.deleteItem({ orderItemId });
        } else {
          console.log("私です");
          this.logoutDeleteItem(order);
        }
      }
      console.log("deleteOrderです");
    },
    LoginComfirm() {
      if (!this.$store.getters.uid) {
        this.login();
      } else {
        console.log("ログイン済");
      }
    },
    ...mapGetters(["uid"]),
    ...mapActions(["login", "deleteItem", "logoutDeleteItem"]),
  },
  computed: {
    totalPrice() {
      const total = this.orders.reduce((a, b) => a + b.price, 0);
      return Math.round(total);
    },
    taxPrice() {
      const tax = this.totalPrice * 0.1;
      return Math.round(tax);
    },
    orders() {
      return this.$store.getters.order;
    },
  },
};
</script>