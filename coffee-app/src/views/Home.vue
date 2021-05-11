<template>
  <div class="home">

    <header>
      <button @click="login">ログイン</button>
    </header>
    <Login />

    <div>
      <Search></Search>
      <Items></Items>
    </div>
  </div>
</template>

<script>
import Items from "../components/Items.vue"
import Search from '../components/Search.vue'

export default {
  name: 'Home',
  methods: {
  },
  components: {
    Items,
    Search
  }
}

</script>
