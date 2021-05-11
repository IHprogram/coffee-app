<template>
<div>
  <h1>Items</h1>
  <Search />
</div>
</template>


<script>
import Search from '@/components/Search.vue';


export default {
  name: 'Items',
  components: {
    // HelloWorld
    Search

  }
};
</script>