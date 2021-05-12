<template>
<div>
  <div class="col-sm-9">
    <input type="text" name="code" id="code"
      class="form-control input-sm" v-model="keyword" />
  </div>
  <div class="text-center">
    <button type="submit" value="検索" class="btn btn-primary" @click="search">検索</button>
    <button type="reset" value="クリア" class="btn btn-default">クリア</button>
  </div>
  <div class="row">
    <div class="table-responsive col-lg-offset-1 col-lg-10 col-md-offset-1 col-md-10 col-sm-10 col-xs-12">
      <h3 class="text-center">検索結果</h3>
      <table class="table table-striped item-list-table">
        <tbody>
          <tr v-if="searchitems.length===0">
            <th>
                <td>該当する商品がありません</td>
            </th>
          </tr>
          <tr v-else-if="searchitems.length>0">
            <th v-for="searchitem in searchitems" :key=searchitem.id>
               <router-link :to="{name: 'item_detail', params:{item_id: searchitem.id}}">
                <td>{{searchitem.name}}</td> 
                <!-- <td>{{searchitem.description}}</td> -->
                <td>{{searchitem.price}}円</td>
                <td><img :src="searchitem.imagePath"></td>
               </router-link>
            </th>
          </tr>
          <tr v-else>
            <h1>error</h1>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
</template>
        

<script>
export default{
data(){
  return{
    searchitems:[],
    keyword:""
  };
},
methods:{
  search(){
    this.searchitems=[];
    if(this.keyword===""){
    return //処理が終了
    }
    for(let i=0;i<this.$store.state.items.length;i++){
    let string=this.$store.state.items[i].name
    let substring=this.keyword

    if(string.indexOf(substring)>-1){
    this.searchitems.push(this.$store.state.items[i]);
    console.log(this.searchitems)
    }}
  }
}
}
</script>