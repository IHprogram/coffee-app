<template>
  <div>
    <div class="row">
      <div class="table-responsive col-lg-offset-1 col-lg-10 col-md-offset-1 col-md-10 col-sm-10 col-xs-12">
        <h3 class="text-center">注文内容確認</h3>
          </div>
            <!-- ここに注文内容を表示する -->
             <table class="table table-striped item-list-table mt-4">
            <tbody>
              <tr>
                <th>
                  <div class="text-center">商品名</div>
                </th>
                <th>
                  <div class="text-center">価格(税込)</div>
                </th>
              </tr>
              <tr
                v-for="order in orders"
                :key="order.id"
                class="text-center"
              >
                <td>
                  <router-link
                    :to="{
                      name: 'item_detail',
                      params: { item_id: order.itemId },
                    }"
                    >{{ order.name }}</router-link
                  >
                </td>
                <td>{{ order.price }}円</td>
              </tr>
              <tr v-if="orders.length === 0">
                <td class="text-center">カートに商品がありません</td>
              </tr>
            </tbody>
          </table>
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
<div>
  <!-- <router-link :to="{name:'Home'}"> -->
    <div class="row">
        <div class="col-xs-offset-5 col-xs-2">
            <div class="form-group">
                <button @click="LoginComfirm">お届け先情報と商品詳細を入力する</button>
               <!-- <form>
                    <input class="form-control btn btn-warning btn-block" type="submit" value="お届け先情報と支払方法を入力する">
                </form> -->
            </div>
        </div>
    </div>
<!-- </router-link> -->
</div>
</div>




</template>



<script>
import {mapActions} from "vuex"
import {mapGetters} from "vuex"

export default{
    name:"OrderComfirm",
    data(){
        return{
   orders: this.$store.state.orders,
    }
},
methods:{
    LoginComfirm(){
        if(!this.$store.getters.uid){
            this.login()
        }else{
            console.log("ログイン済");
        }
    },
...mapGetters(["uid"]),
...mapActions(["login"]),
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
  }
}
</script>