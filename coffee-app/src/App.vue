<template>
  <div id="app">
    <div>
        <button>ボタン</button>
    </div>
    <div id="nav">
    <router-view/>
    </div>
  </div>
</template>
<script>
//import firebase from 'firebase'
//import mapActions from 'vuex'

export default ({
  components: {
  },
  // created(){
  //   // firebase.auth().onAuthStateChenged(user => {
  //   //   if(user){
  //   //     this.setLoginUser(user)
  //   //   } else {
  //   //     this.deleteLoginUser()
  //   //   }
  //   })
 // },
  methods: {
    //...mapActions(['setLoginUser','logout','deleteLoginUser'])
  }
})
</script>