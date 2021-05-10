<template>
  <div>
    <v-nav @click="login">ログイン画面</v-nav>
      <div>メールアドレス：<input type="text"></div>
      <div>パスワード：<input type="password"></div>
  </div>
</template>

<script>
import firebase from 'firebase'
import { mapActions } from 'vuex'

export default ({
  methods:{
    ...mapActions(["login"])
  },
})
</script>
