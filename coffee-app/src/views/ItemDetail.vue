<template>
  <div>
    <h2>商品詳細</h2>
    <p>商品のID: {{item.id}}</p>
    <p>商品名: {{item.name}}</p>
    <p>説明: {{item.explain}}</p>
    <p>価格: {{item.price}}</p>
  </div>
</template>

<script>
export default{
  data(){
    return {
      item: {}
    }
  },
  created() {
    const item = this.$store.getters.getItemById(this.$route.params.item_id);

    if(item){
      this.item = item;
    }
  },
}
</script>