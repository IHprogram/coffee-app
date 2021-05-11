<template>
  <div class="home">
    <button @click="login">ログイン</button>
    <Login />
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions } from 'vuex'

export default {
  name: 'Home',
  methods: {
    ...mapActions(["login"])
  }
}
</script>
