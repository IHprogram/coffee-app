<template>
  <div>
    <h2>商品詳細</h2>
    <img class="card-img-top" :src="item.imagePath" style="width: 200px; height: 200px;">
    <p>商品のID: {{item.id}}</p>
    <p>商品名: {{item.name}}</p>
    <p>説明: {{item.description}}</p>
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