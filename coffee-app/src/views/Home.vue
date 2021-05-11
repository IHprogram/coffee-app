<template>
  <div class="home">
    <header>
      <button @click="login">ログイン</button>
    </header>
    <Login />

  <div>
    <Items></Items>
  </div>
</template>

<script>
import Items from "../components/Items.vue"

export default {
  name: 'Home',
  methods: {

  },
  components: {
    Items
  }
}

</script>
