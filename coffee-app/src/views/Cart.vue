<template>
   <div>
       <div class="container">
		<!-- table -->
		<div class="row">
			<div
				class="table-responsive col-lg-offset-1 col-lg-10 col-md-offset-1 col-md-10 col-sm-10 col-xs-12">
				<h3 class="text-center">ショッピングカート</h3>
				<table class="table table-striped item-list-table">
					<tbody>
						<tr>
							<th>
								<div class="text-center">
									商品名
								</div>
							</th>
							<th>
								<div class="text-center">
									価格(税抜)
								</div>
							</th>
						</tr>
						<tr v-for="(order,index) in orders" :key=index>
							<td>{{order.name}}</td>
							<td>{{order.price}}</td>
							<td></td>
							<td><button>削除</button></td>
						</tr>
						<tr v-if="orders.length===0">
							<td>カートに商品がありません</td>
						</tr>
					
					</tbody>
				</table>
			</div>
		</div>

		<div class="row">
			<div class="col-xs-offset-2 col-xs-8" v-if="orders.length!=0">
				<div class="form-group text-center">
					<span id="total-price" >消費税：{{taxOnlyPrice}}円</span><br>
					<span id="total-price">ご注文金額合計：{{taxInclutedPrice}}円 (税込)</span>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-xs-offset-5 col-xs-3">
				<div class="form-group">
					<form action="order_confirm.html">
						<input class="form-control btn btn-warning btn-block"
							type="submit" value="注文に進む">
					</form>
				</div>
			</div>
		</div>
	</div>
   </div>
</template>



<script>
export default{
	name:"Cart",
    data(){
    return{
        items:[],
orders:[
      {
        id:10,
        name: 'バニラ クリーム フラペチーノ',
        description: 'ミルクとバニラシロップを氷とブレンドし、ホイップクリームをトッピングした、クリーミーな味わいのフローズン ビバレッジ。真っ白な見た目も爽やかです。ミルクとバニラシロップというシンプルな組み合わせはいろいろなカスタマイズとも好相性。',
        price: 490,
        imagePath: '../assets/img/10.jpg'
      },
      {
        id:10,
        name: 'バニラ クリーム フラペチーノ',
        description: 'ミルクとバニラシロップを氷とブレンドし、ホイップクリームをトッピングした、クリーミーな味わいのフローズン ビバレッジ。真っ白な見た目も爽やかです。ミルクとバニラシロップというシンプルな組み合わせはいろいろなカスタマイズとも好相性。',
        price: 490,
        imagePath: '../assets/img/10.jpg'
      },
        {
        id:10,
        name: 'バニラ クリーム フラペチーノ',
        description: 'ミルクとバニラシロップを氷とブレンドし、ホイップクリームをトッピングした、クリーミーな味わいのフローズン ビバレッジ。真っ白な見た目も爽やかです。ミルクとバニラシロップというシンプルな組み合わせはいろいろなカスタマイズとも好相性。',
        price: 490,
        imagePath: '../assets/img/10.jpg'
      },
],
totalPrice: 0,
taxInclutedPrice: 0,
taxOnlyPrice: 0
    };
 },
 mounted(){
for(let i = 0; i<this.orders.length;i++){
this.totalPrice += this.orders[i].price
}
this.taxOnlyPrice = Math.round(this.totalPrice*0.1)
this.taxInclutedPrice=Math.round(this.totalPrice*1.1)
 },
computed:{
    order(){
		return this.$store.state.orders
	}
	}
    
};
</script>
