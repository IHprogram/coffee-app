<template>
  <div>
    <h3>ログイン画面</h3>
      <label for="email">メールアドレス：</label>
      <input id="email" type="text">
      <label for="password">パスワード：</label>
      <input type="password">
      <button @click= "login">ログイン</button>
  </div>
</template>

<script>
export default ({
  name: "Login",
  data(){
    return {
      email: '',
      password: ''
    };
  },
  methods:{
    login: function(){
      this.$router.push('')
    }
  }
})
</script>