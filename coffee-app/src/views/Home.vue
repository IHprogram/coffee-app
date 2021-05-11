<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <ul>
      <li v-for="item in $store.state.items" :key="item.id">
        <router-link :to="{name: 'item_detail', params:{item_id: item.id}}">
          <p>{{item.name}}</p>
        </router-link>
        <p>{{item.price}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
}
</script>
