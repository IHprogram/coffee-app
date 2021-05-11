<template>
  <div>
    <div class="container">
      <div class="row">
        <div
          class="table-responsive col-lg-offset-1 col-lg-10 col-md-offset-1 col-md-10 col-sm-10 col-xs-12">
          <h3 class="text-center mt-4">ショッピングカート</h3>
          <table class="table table-striped item-list-table mt-4">
            <tbody>
              <tr>
                <th>
                  <div class="text-center">
                    商品名
                  </div>
                </th>
                <th>
                  <div class="text-center">
                    価格(税込)
                  </div>
                </th>
                <th>
                  <div class="text-center">
                    ー
                  </div>
                </th>
              </tr>
              <tr v-for="(order,index) in orders" :key=order.id class="text-center">
             <td><router-link :to="{name: 'item_detail', params:{item_id: order.id}}">{{order.name}}</router-link></td>
                <td>{{order.price}}</td>
                <td><button @click="deleteOrder(index)">削除</button></td>
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
            <span id="total-price">ご注文金額合計：{{totalPrice}}円(税込)</span>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-offset-5 col-xs-3">
          <div class="form-group">
            <form action="order_confirm.html">
              <input class="form-control btn btn-warning btn-block mt-4"
                type="submit" value="注文に進む">
            </form>
            <p class="text-center mt-4"><router-link :to="{name: 'Home'}">トップページに戻る</router-link></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default{
  name:"Cart",
    data(){
    return{
      orders: this.$store.state.orders,
    };
 },
  methods:{
    deleteOrder(index){
      if(confirm("カートから削除しますか？"))
      this.orders.splice(index, 1)
    },
  },
  computed: {
    // totalPrice(){
    //   console.log(this.orders)
    //   console.log(this.orders.length)
    //   let total = 0
    //   for(let i = 0 ; i <= this.orders.length ; i++){
    //     total += this.orders[i].price;
    //   }
    //   return total;
    // }
    totalPrice(){
      const total = this.orders.reduce((a, b) => a + b.price, 0)
      return total;
    }
  }
};
</script>