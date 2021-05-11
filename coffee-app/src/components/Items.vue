<template>
<div>
	<div class="item-content">
  <div v-for="item in items" :key="item.id">
		<div class="card-group">
		<div class="card text-center">
			<img class="card-img-top" :src="item.imagePath" style="width: 200px; height: 200px;">
				<div class="card-body">
					<h5 class="card-title">{{ item.name }}</h5>
					<h6 class="card-subtitle text-muted">{{ item.price }}円</h6>
					<p class="card-text">{{item.description}}</p>
					<button>購入</button>
				</div>
		</div>
		<!-- </div> -->
  </div>

	</div>

	</div>
</template>
<script>
export default{
	name: "Items",
	computed: {
		items(){
			return this.$store.state.items
		},
	},
}
</script>

<style>
/* .item-content {
	/* width: 30%; */
	/* display: flex; */
	/* flex-wrap: wrap; */
/* } */ 

</style>