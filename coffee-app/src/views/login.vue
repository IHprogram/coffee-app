<template>
  <button @click="login">ログイン</button>
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
