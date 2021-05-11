<template>
<div>
	<div v-for="item in items" :key="item.id">
		<div class="card-group">
			<div class="card">
					<router-link :to="{name: 'item_detail', params:{item_id: item.id}}">
					<img class="card-img-top" :src="item.imagePath" style="width: 200px; height: 200px;">
					</router-link>

					<div class="card-body">
						<router-link :to="{name: 'item_detail', params:{item_id: item.id}}">
						<h5 class="card-title">{{ item.name }}</h5>
						</router-link>
						<h6 class="card-subtitle text-muted">{{ item.price }}円</h6>
						<p class="card-text">{{item.description}}</p>
						<button>購入</button>
					</div>
				</div>
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