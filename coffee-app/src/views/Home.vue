<template>
  <div class="home">
    <header >
      <button class="text-align:right" @click="login">ログイン</button>
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

export default {
  name: 'Home',
  components: {
    Items,
    Search
  },
  methods: {
    ...mapActions(["login"]),
  },
}
</script>