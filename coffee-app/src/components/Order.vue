<template>
  <div>
    <h3 class="text-center">注文画面</h3>
      <h4 class="text-center">お届け先情報</h4>
      <hr>
        <!-- <div v-if="errors.length">
          <b>各項目 入力は必須です</b>
          <ul>
            <li :v-for="error in errors">{{ error }}</li>
          </ul>
        </div> -->
        <div><label for="name">名前：
          <input type="text" name="name" id="name" v-model="loginForm.name">{{errorFind.nameError}}</label></div>
        <div><label for="mail">メールアドレス:
          <input type="email" name="email" id="email" v-model="loginForm.email">{{errorFind.emailError}}</label></div>
        <div><label for="postalcode">郵便番号:
          <input type="text" name="postalcode" id="postalcode" v-model="loginForm.postalcode">{{errorFind.postalcodeError}}</label></div>
        <div><label for="address">住所:
          <input type="text" name="address" id="address" v-model="loginForm.address">{{errorFind.addressError}}</label></div>
        <div><label for="tel">電話番号:
          <input type="tel" name="tel" id="tel" v-model="loginForm.tel">{{errorFind.telError}}</label></div>
        <div><label for="date">配達日時:
          <input type="datetime-local" name="date" id="date" v-model="loginForm.date">{{errorFind.dateError}}</label></div>
        <p>支払い方法：
          <select name="payment" id="pay" value="支払い方法">
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
    // errors:[],
    // messages:'',
    loginForm: {
      name: "",
      email:"",
      postalcode: "",
      address: "",
      tel: "",
      date: "",
      // pay: "",
    },
    errorFind: {
      nameError: "",
      emailError:"",
      postalcodeError:"",
      addressError:"",
      telError:"",
      dateError:"",
    }
   }
 },
  methods: {
    btnClick() {
      if(!this.loginForm.name){
        this.errorFind.nameError = "名前を変更してください"
      } else if (this.loginForm.name){
        this.errorFind.nameError = ""
      }

      if(!this.loginForm.email){
        this.errorFind.emailError = "メールアドレスを入力して下さい"
        // console.log("メール変更")
      } else if (this.loginForm.email.indexOf('@') == -1){
        this.errorFind.emailError = "メールアドレスの形式が不正です"
      } else {
        this.errorFind.emailError = ""
      }

      if(!this.loginForm.postalcode) {
        this.errorFind.postalcodeError = "郵便番号を入力して下さい"
      } else if (this.loginForm.postalcode.match(/^[0-9]{3}-[0-9]{4}$/)){
        this.errorFind.postalcodeError = ""
      } else {
        this.errorFind.postalcodeError = "郵便番号はXXX-XXXXの形式で入力してください"
      }

       if(!this.loginForm.address){
        this.errorFind.addressError = "住所を変更してください"
      } else if (this.loginForm.address){
        this.errorFind.addressError = ""
      }

      if(!this.loginForm.tel) {
        this.errorFind.telError = "電話番号を入力して下さい"
      } else if (this.loginForm.tel.match(/^[0-9]{4}-[0-9]{4}-[0-9]{4}$/)){
        this.errorFind.telError = ""
      } else {
        this.errorFind.telError = "電話番号はXXXX-XXXX-XXXXの形式で入力してください"
      }

      //配達日時の指定

        const today = new Date();
        const year = today.getFullYear()
        const month = "0" + (1 + today.getMonth())
        const day = today.getDate()
        const hour = today.getHours()
        const minutes = today.getMinutes()

          let orderDay = 'YYYY-MM-DD'+'T'+'hh:mm'        //現在日時
          orderDay = orderDay.replace(/YYYY/g, year);
          orderDay = orderDay.replace(/MM/g, month);
          orderDay = orderDay.replace(/DD/g, day);
          orderDay = orderDay.replace(/hh/g, hour);
          orderDay = orderDay.replace(/mm/g, minutes);

        console.log(this.loginForm.date)
        console.log(orderDay);

        const loginFormDate = this.loginForm.date;
        console.log("配達日全部"+loginFormDate)

       const loginformyear = loginFormDate.slice(0,4)
       console.log("今年は"+year);//2021
        console.log("配達年は"+loginformyear);//2021

        const loginformmonth = loginFormDate.slice(5,7)
        console.log("今月は"+month);//05
        console.log("配達月は"+loginformmonth);//05

        const loginformday = loginFormDate.slice(8,10)
        console.log("今年は"+day);//13
        console.log("配達日は"+loginformday);//13

        const loginformhour = loginFormDate.slice(11,13)
        console.log("現在時間は"+hour);
        console.log("配達時間は"+loginformhour);

        const numloginformhour=Number(loginformhour);//文字列から数値に変換
        console.log(numloginformhour)
        const numhour = Number(hour);//文字列から数値に変換
        console.log(numloginformhour-numhour)

        if(day==loginformday){
          console.log("同じ日です");//条件1「今日と配達日の日付が同じ」
          if((numloginformhour-numhour<=3)||(numloginformhour-numhour==0)){
            this.errorFind.dateError="今から3時間後の日時をご入力ください"
            console.log("3時間以内です")//条件2「値が3未満」
          }
        }else{
          this.errorFind.dateError=""
        }


        //条件
        // ①配達日時と今日の日にちが一致しているか
        // ②①が一致していた場合、希望時間ーその注文している時の時間（現在時間）＝３未満だったらエラー発動

    // if(this.loginForm.date === orderDay){
    //   console.log("一致している")
      // if(!this.loginForm.date) {
      //    this.loginForm.dateError = "配達日時を入力して下さい"
      // } else if((this.loginForm.date - orderDay) < 3){
      //   this.loginForm.dateError = "今から3時間後の日時をご入力ください"
      // // } else if(!this.loginForm.date) {
      // //    this.loginForm.dateError = "配達日時を入力して下さい"
      // } else {
      //   this.loginForm.dateError = ""
      // }
    }
  },
})
</script>