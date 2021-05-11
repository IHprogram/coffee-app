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
					
					</tbody>
				</table>
			</div>
		</div>

		<div class="row">
			<div class="col-xs-offset-2 col-xs-8">
				<div class="form-group text-center">
					<span id="total-price" >消費税：円</span><br>
					<span id="total-price">ご注文金額合計：円 (税込)</span>
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
        items:[
            {
        id:1,
        name: "Gorgeous4サンド",
        description: "人気の定番具材「ハム」と「チキン」をセットにした食べごたえ抜群のサンドイッチです。",
        price: 480,
        imagePath: "../assets/img/1.jpg"
      },
      {
        id:2,
        name: "エスプレッソフラペチーノ",
        description: "ひと口目に感じるエスプレッソは「リストレット」という方法で抽出した力強い香りと優しい苦味を、ふた口目は全体を混ぜて、こだわりのクリームから来るアフォガートのような味わいをお楽しみください。リフレッシュしたい時や、ほっとひと息つきたい時にも、何度でも飲みたくなるフラペチーノ®です.",
        price: 530,
        imagePath: "../assets/img/2.jpg"
      },
      {
        id:3,
        name: "Specialキャラメルドーナッツ",
        description: "ドーナツ生地の中に、なめらかで風味豊かなキャラメルフィリングを入れ、仕上げにキャラメルのビター感と香ばしさが楽しめるキャラメルコーティングをかけました。",
        price: 250,
        imagePath: "../assets/img/3.jpg"
      },
      {
        id:4,
        name: 'チョコクッキー',
        description: 'ソフトな食感のクッキー生地には、小麦の香ばしさが感じられるよう全粒粉を入れ、砂糖の一部にはブラウンシュガーを使い、コクのある甘さをプラスしています。風味豊かなスターバックスオリジナルのチョコレートチャンクがごろごろ入っていて、どこを食べてもチョコレートの味わいを存分に楽しめます。ショートサイズのマグカップの上に乗せられるくらいのサイズは、コーヒーと一緒に楽しむのにもぴったりです。',
        price: 190,
        imagePath: '../assets/img/4.jpg'
      },
      {
        id:5,
        name: 'カフェモカ',
        description: 'エスプレッソにほろ苦いチョコレートシロップとミルクを加え、ホットビバレッジにはホイップクリームをトッピング。ちょっとした贅沢を楽しみたい方におすすめです。',
        price: 400,
        imagePath: '../assets/img/5.jpg'
      },
      {
        id:6,
        name: 'カフェラテ',
        description: '最も人気のあるエスプレッソ ビバレッジ。リッチなエスプレッソにスチームミルクを注ぎ、フォームミルクを丁寧にトッピングしました。ミルキーな味わいで気持ちを温かくしてくれます。',
        price: 340,
        imagePath: '../assets/img/6.jpg'
      },
      {
        id:7,
        name: 'カプチーノ',
        description: 'リッチなエスプレッソに一気にミルクを注ぐことで、一口飲んだときからコーヒー感が感じられるビバレッジです。ベルベットのようにきめ細かいフォームミルクをお楽しみください。',
        price: 340,
        imagePath: '../assets/img/7.jpg'
      },
      {
        id:8,
        name: 'キャラメルマキアート',
        description: 'バニラシロップとスチームミルクのコンビネーションになめらかなフォームミルクをたっぷりのせ、その上からエスプレッソを注いでアクセントを付けました。仕上げにオリジナルキャラメルソースをトッピングしています。',
        price: 390,
        imagePath: '../assets/img/8.jpg'
      },
      {
        id:9,
        name: 'キャラメルフラペチーノ',
        description: 'コーヒー、ミルク、キャラメルシロップを氷とブレンドした、多くのお客様に愛されているフローズン ビバレッジです。トッピングしたホイップクリームとキャラメルソースと混ぜながら、豊かでほんのり香ばしいキャラメルの風味をお楽しみください。',
        price: 490,
        imagePath: '../assets/img/9.jpg'
      },
      {
        id:10,
        name: 'バニラ クリーム フラペチーノ',
        description: 'ミルクとバニラシロップを氷とブレンドし、ホイップクリームをトッピングした、クリーミーな味わいのフローズン ビバレッジ。真っ白な見た目も爽やかです。ミルクとバニラシロップというシンプルな組み合わせはいろいろなカスタマイズとも好相性。',
        price: 490,
        imagePath: '../assets/img/10.jpg'
      },
     
        ],
orders:[
            {
        id:1,
        name: "Gorgeous4サンド",
        description: "人気の定番具材「ハム」と「チキン」をセットにした食べごたえ抜群のサンドイッチです。",
        price: 480,
        imagePath: "../assets/img/1.jpg"
      },
      {
        id:2,
        name: "エスプレッソフラペチーノ",
        description: "ひと口目に感じるエスプレッソは「リストレット」という方法で抽出した力強い香りと優しい苦味を、ふた口目は全体を混ぜて、こだわりのクリームから来るアフォガートのような味わいをお楽しみください。リフレッシュしたい時や、ほっとひと息つきたい時にも、何度でも飲みたくなるフラペチーノ®です.",
        price: 530,
        imagePath: "../assets/img/2.jpg"
      },
      {
        id:3,
        name: "Specialキャラメルドーナッツ",
        description: "ドーナツ生地の中に、なめらかで風味豊かなキャラメルフィリングを入れ、仕上げにキャラメルのビター感と香ばしさが楽しめるキャラメルコーティングをかけました。",
        price: 250,
        imagePath: "../assets/img/3.jpg"
      },
      {
        id:4,
        name: 'チョコクッキー',
        description: 'ソフトな食感のクッキー生地には、小麦の香ばしさが感じられるよう全粒粉を入れ、砂糖の一部にはブラウンシュガーを使い、コクのある甘さをプラスしています。風味豊かなスターバックスオリジナルのチョコレートチャンクがごろごろ入っていて、どこを食べてもチョコレートの味わいを存分に楽しめます。ショートサイズのマグカップの上に乗せられるくらいのサイズは、コーヒーと一緒に楽しむのにもぴったりです。',
        price: 190,
        imagePath: '../assets/img/4.jpg'
      },
      {
        id:5,
        name: 'カフェモカ',
        description: 'エスプレッソにほろ苦いチョコレートシロップとミルクを加え、ホットビバレッジにはホイップクリームをトッピング。ちょっとした贅沢を楽しみたい方におすすめです。',
        price: 400,
        imagePath: '../assets/img/5.jpg'
      },
],
    
    };
 },
    methods:{
      delete(){},
            },
	computed:{
    order(){
		return this.$store.state.orders
	}
	}
    
};
</script>
