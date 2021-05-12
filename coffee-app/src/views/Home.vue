<template>
  <div class="home">
    <header>
      <button @click="login" v-if="!$store.state.login_user">ログイン</button>
      <div v-if="$store.state.login_user">
        <button @click="logout">ログアウト</button>
        <p>ログイン中のユーザー : {{ userName }}</p>
        <router-link :to="{name: 'OrderLog'}">
        <p>注文履歴</p>
        </router-link>
      </div>
        <router-link :to="{name:'Cart'}">カート</router-link>
        
    </header>
  <div>
    <Search></Search>
    <Items></Items>
    </div>
  </div>
</template>
      
<script>
import Items from "../components/Items.vue"
import Search from '../components/Search.vue'

import { mapActions } from "vuex"
import { mapGetters } from "vuex"

export default {
  name: 'Home',
  components: {
    Items,
    Search
  },
  methods: {
    ...mapActions(["login","logout"])
  },
  computed: {
    ...mapGetters(["userName"])
  }
}
</script>