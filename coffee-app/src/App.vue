<template>
  <div id="app">
    <div id="nav">
    <router-view/>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import { mapActions } from 'vuex'

export default ({
  components: {
  },
  beforeCreate(){
  firebase.auth().onAuthStateChanged(user => {
      if(user){
        this.setLoginUser(user)
        this.fetchOrders();
      } else {
        this.deleteLoginUser()
        this.$store.state.orders=[]
      }
    })
  },
  created(){
    // firebase.auth().onAuthStateChanged(user => {
    //   if(user){
    //     this.setLoginUser(user)
    //     this.fetchOrders();
    //   } else {
    //     this.deleteLoginUser()
    //     this.$store.state.orders=[]
    //   }
    // })
 },
  methods: {
    ...mapActions(['setLoginUser','deleteLoginUser','fetchOrders'])
  }
})
</script>