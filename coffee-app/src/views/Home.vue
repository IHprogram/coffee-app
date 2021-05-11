<template>
  <div class="home">
    <header >
      <button class="text-align:right" @click="login">ログイン</button>
    </header>
    <Items></Items>
    <Login />
  </div>
</template>

<script>
import Items from "../components/Items.vue"
import Login from "../components/Login.vue"

export default {
  name: 'Home',
  components: {
    Items,
    Login
  },
  methods: {
    ...mapActions("login")
  },
}

</script>
