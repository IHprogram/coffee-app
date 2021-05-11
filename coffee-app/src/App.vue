<template>
  <div id="app">
    <div id="nav">
      <header>

      </header>
    </div>
    <router-view/>
  </div>
</template>

<script>
// import firebase from 'firebase'
// import mapActions from 'vuex'

export default ({
  components: {
  },
  // created(){
  //   firebase.auth().onAuthStateChenged(user => {
  //     if(user){
  //       this.setLoginUser(user)
  //     } else {
  //       this.deleteLoginUser()
  //     }
  //   })
  // },
  methods: {
    // ...mapActions(['setLoginUser','logout','deleteLoginUser'])
  }
})
</script>

