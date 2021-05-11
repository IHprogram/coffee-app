<template>
<div>
	<div class="row">
			<div
				class="col-lg-offset-3 col-lg-6 col-md-offset-2 col-md-8 col-sm-10 col-xs-12">
				<div class="panel panel-default">
					<div class="panel-body">
						<form method="post" action="#" class="form-horizontal">
							<div class="form-group">
								<div class="col-sm-9">
									<input type="text"  name="code" placeholder="商品名を入力してください" id="code"
										class="form-control input-sm"/>
										
								</div>
							</div>
							<div class="text-center">
								<button type="submit" value="検索" class="btn btn-primary" @click="search(keyword)">検索</button>
								<button type="reset" value="クリア" class="btn btn-default">クリア</button>
							</div>
						</form>
					</div>
				</div>
			</div>
			</div>

  <div v-for="item in items" :key="item.id">
		<div class="card-group">
		<div class="card">
			<img class="card-img-top" :src="item.imagePath" style="width: 200px; height: 200px;">
				<div class="card-body">
					<h5 class="card-title">{{ item.name }}</h5>
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