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
			<div
				class="table-responsive col-lg-offset-1 col-lg-10 col-md-offset-1 col-md-10 col-sm-10 col-xs-12">
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
								<td>{{searchitem.name}}</td>
                                <!-- <td>{{searchitem.description}}</td> -->
                                <td>{{searchitem.price}}円</td>
                                <td><img :src="searchitem.imagePath"></td>
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
      }    
],
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
        }
        }
        }
    }
}
    

</script>