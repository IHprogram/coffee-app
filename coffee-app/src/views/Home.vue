<template>
  <div>
    <Search></Search>
    <Items></Items>

  </div>
</template>

<script>
import Items from "../components/Items.vue"
import Search from '../components/Search.vue'
export default{
  components: {
    Items,
    Search
  }
}

</script>
