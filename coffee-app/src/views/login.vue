<template>
  <div>
    <v-nav @click="login">ログイン画面</v-nav>
    <!-- <button @click="logout">ログアウト</button> -->

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
