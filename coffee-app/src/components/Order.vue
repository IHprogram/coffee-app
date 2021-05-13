<template>
  <div>
    <h3 class="text-center">注文画面</h3>
      <h4 class="text-center">お届け先情報</h4>
      <hr>
        <div v-if="errors.length">
          <b>各項目 入力は必須です</b>
          <ul>
            <li :v-for="error in errors">{{ error }}</li>
          </ul>
        </div>
        <div><label for="name">名前：
          <input type="text" name="name" id="name" v-model="name">{{error}}</label></div>
        <div><label for="mail">メールアドレス:
          <input type="email" name="email" id="email" v-model="email">{{error}}</label></div>
        <div><label for="postalcode">郵便番号:
          <input type="number" name="postalcode" id="postalcode" v-model="postalcode"></label></div>
        <div><label for="address">住所:
          <input type="text" name="address" id="address" v-model="address"></label></div>
        <div><label for="tel">電話番号:
          <input type="tel" name="tel" id="tel"></label></div>
        <div><label for="date">配達日時:
          <input type="datetime-local"></label></div>
        <p>支払い方法：
          <select name="payment" id="pay" v-model="pay" value="支払い方法">
            <option value="0:未入金" id="1">代金引換</option>
            <option value="1:入金済" id="2">クレジットカード決済</option>
          </select>
        </p>
        <input type="submit" @click="btnClick" class="btn btn-info" value="この内容で注文する">
  </div>
</template>

<script>
export default ({
 name: "Order",
 data(){
   return {
    errors:[],
    name: null,
    email:null,
    postalcode: null,
    address: null,
    tel: null,
    date: null,
    pay: null,
   }
 },
  methods: {
    btnClick() {
      this.errors = [];
      if(!this.name){
        console.log("変更です")
        this.errors.push("名前を変更してください");
        
        // this.Validation.name = '名前を入力してください'
        // console.log("エラーです")
      }
    }
  },
  // computed: {
  //   error() {
  //     if(!this.name){
        
        // this.errors("名前を入力してください");
        // return this.name ?  '' : "名前を入力してください"
        // return this.email
  //     }
  //   }
  // }
})
</script>