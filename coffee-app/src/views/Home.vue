<template>
  <div class="home">
    <!-- <ul>
      <li v-for="item in $store.state.items" :key="item.id">
        <router-link :to="{name: 'item_detail', params:{item_id: item.id}}">
          <p>{{item.name}}</p>
        </router-link>
        <p>{{item.price}}</p>
      </li>
    </ul> -->
  <div>
    <Items></Items>
  </div>
</template>

<script>
import Items from "../components/Items.vue"
export default{
  components: {
    Items
  }
}

</script>
