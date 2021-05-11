<template>
  <div class="home">

    <header>
      <button @click="login">ログイン</button>
    </header>
    <div>
    <Login />
      <Search></Search>
      <Items></Items>
    </div>
  </div>
</template>

<script>
import Items from "../components/Items.vue"
import Login from "../components/Login.vue"
import Search from '../components/Search.vue'

export default {
  name: 'Home',
  components: {
    Items,
    Login
  },
  methods: {
    ...mapActions("login")
  },
  components: {
    Items,
    Search
  }
}

</script>
