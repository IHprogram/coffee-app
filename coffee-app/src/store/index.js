import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    orders: [],
    order_history: [],
    login_user: null,
    items: [
      
      {
        id:1,
        name: "Gorgeous4サンド",
        description: "人気の定番具材「ハム」と「チキン」をセットにした食べごたえ抜群のサンドイッチです。",
        price: 480,
        imagePath: require("../assets/img/1.jpg")
      },
      {
        id:2,
        name: "エスプレッソフラペチーノ",
        description: "ひと口目に感じるエスプレッソは「リストレット」という方法で抽出した力強い香りと優しい苦味を、ふた口目は全体を混ぜて、こだわりのクリームから来るアフォガートのような味わいをお楽しみください。リフレッシュしたい時や、ほっとひと息つきたい時にも、何度でも飲みたくなるフラペチーノ®です.",
        price: 530,
        imagePath: require("../assets/img/2.jpg")
      },
      {
        id:3,
        name: "Specialキャラメルドーナッツ",
        description: "ドーナツ生地の中に、なめらかで風味豊かなキャラメルフィリングを入れ、仕上げにキャラメルのビター感と香ばしさが楽しめるキャラメルコーティングをかけました。",
        price: 250,
        imagePath: require("../assets/img/3.jpg")
      },
      {
        id:4,
        name: "チョコクッキー",
        description: "ソフトな食感のクッキー生地には、小麦の香ばしさが感じられるよう全粒粉を入れ、砂糖の一部にはブラウンシュガーを使い、コクのある甘さをプラスしています。風味豊かなスターバックスオリジナルのチョコレートチャンクがごろごろ入っていて、どこを食べてもチョコレートの味わいを存分に楽しめます。ショートサイズのマグカップの上に乗せられるくらいのサイズは、コーヒーと一緒に楽しむのにもぴったりです。",
        price: 190,
        imagePath: require("../assets/img/4.jpg")
      },
      {
        id:5,
        name: "カフェモカ",
        description: "エスプレッソにほろ苦いチョコレートシロップとミルクを加え、ホットビバレッジにはホイップクリームをトッピング。ちょっとした贅沢を楽しみたい方におすすめです。",
        price: 400,
        imagePath: require("../assets/img/5.jpg")
      },
      {
        id:6,
        name: "カフェラテ",
        description: "最も人気のあるエスプレッソ ビバレッジ。リッチなエスプレッソにスチームミルクを注ぎ、フォームミルクを丁寧にトッピングしました。ミルキーな味わいで気持ちを温かくしてくれます。",
        price: 340,
        imagePath: require("../assets/img/6.jpg")
      },
      {
        id:7,
        name: "カプチーノ",
        description: "リッチなエスプレッソに一気にミルクを注ぐことで、一口飲んだときからコーヒー感が感じられるビバレッジです。ベルベットのようにきめ細かいフォームミルクをお楽しみください。",
        price: 340,
        imagePath: require("../assets/img/7.jpg")
      },
      {
        id:8,
        name: "キャラメルマキアート",
        description: "バニラシロップとスチームミルクのコンビネーションになめらかなフォームミルクをたっぷりのせ、その上からエスプレッソを注いでアクセントを付けました。仕上げにオリジナルキャラメルソースをトッピングしています。",
        price: 390,
        imagePath: require("../assets/img/8.jpg")
      },
      {
        id:9,
        name: "キャラメルフラペチーノ",
        description: "コーヒー、ミルク、キャラメルシロップを氷とブレンドした、多くのお客様に愛されているフローズン ビバレッジです。トッピングしたホイップクリームとキャラメルソースと混ぜながら、豊かでほんのり香ばしいキャラメルの風味をお楽しみください。",
        price: 490,
        imagePath: require("../assets/img/9.jpg")
      },
      {
        id:10,
        name: "バニラ クリーム フラペチーノ",
        description: "ミルクとバニラシロップを氷とブレンドし、ホイップクリームをトッピングした、クリーミーな味わいのフローズン ビバレッジ。真っ白な見た目も爽やかです。ミルクとバニラシロップというシンプルな組み合わせはいろいろなカスタマイズとも好相性。",
        price: 490,
        imagePath: require("../assets/img/10.jpg")
      },
      {
        id:11,
        name: "ダークモカフラペチーノ",
        description: "コーヒー、ミルク、ダークチョコレートパウダー、そして人気のチョコレートチップを氷とブレンドした、チョコレートラバーズに人気のフローズンビバレッジ。コーヒーとダークチョコレートのほろ苦い味わいと、チョコレートチップの食感が織り成すハーモニーは、ブラックコーヒーファンにも支持されています。",
        price: 500,
        imagePath: require("../assets/img/11.jpg")
      },
      {
        id:12,
        name: "抹茶クリームフラペチーノ",
        description: "世界中で様々な形で飲用されている抹茶ですが、スターバックスではミルクと甘みを加えて氷でブレンドしたリフレッシングなフラペチーノ®に仕上げました。",
        price: 490,
        imagePath: require("../assets/img/12.jpg")
      },
      {
        id:13,
        name: "ドリップコーヒー",
        description: "世界中のコーヒー産地から厳選された高品質のアラビカ種コーヒー豆を使用したスターバックスの定番商品です。バラエティあふれるコーヒー豆を通して、スターバックスのコーヒージャーニーをお楽しみください。異なるローストレベルのコーヒーを日替わりでご用意していますので、お気に入りの1杯を見つけてみませんか。",
        price: 290,
        imagePath: require("../assets/img/13.jpg")
      },
      {
        id:14,
        name: "アイスコーヒー",
        description: "熱を加えずに14時間かけてゆっくりと水で抽出したコールドブリュー コーヒー。香り高い風味が引き出されるよう、特別にブレンド、ローストしたコーヒー豆を使用しています。豊かな味わいとなめらかな口あたりをお楽しみください。",
        price: 330,
        imagePath: require("../assets/img/14.jpg")
      },
      {
        id:15,
        name: "アメリカン",
        description: "エスプレッソに熱いお湯を注いだ、すっきりとしたのどごしのコーヒーです。ドリップ コーヒーのお好きな方にもおすすめです。",
        price: 310,
        imagePath: require("../assets/img/15.jpg")
      },
      {
        id:16,
        name: "エスプレッソ",
        description: "キャラメルのような甘く力強い味とナッツを感じさせる後味。スターバックスのすべてのエスプレッソ ビバレッジに使われているエスプレッソです。どうぞ、お早めにお召し上がりください。",
        price: 310,
        imagePath: require("../assets/img/16.jpg")
      },
      {
        id:17,
        name: "ナッティホワイトモカ",
        description: "ホワイトチョコレートとヘーゼルナッツに香り高いエスプレッソを加えた風味豊かなホワイト モカ。ホイップクリームをツリーに見立て、ナッツ&ホワイトチョコレートソースのリボンと、3色のチョコレート、シルバーのアラザンをイルミネーションのようにちりばめました。ホリデーシーズンにぴったりのあたたかな一杯で、特別なひと時をお楽しみください。",
        price: 450,
        imagePath: require("../assets/img/17.jpg")
      },
      {
        id:18,
        name: "ジンジャーブレッドラテ",
        description: "スターバックスのホリデーといえばやっぱりジンジャーブレッド ラテ、という人も多いのではないでしょうか。ジンジャーブレッドクッキーをイメージした、ほんのり甘くてスパイシーな風味は、この時期にしか味わえない特別なビバレッジです。体の中からじんわりとあたためてくれる一杯で、ほっとリラックスしたひと時をお過ごしください。",
        price: 450,
        imagePath: require("../assets/img/18.jpg")
      },
    ]
  },
  mutations: {
    setLoginUser(state, user) {
      state.login_user = user;
    },
    deleteLoginUser(state) {
      state.login_user = null;
    },
    addOrder(state,{id, order}){
      order.id = id;
      state.orders.push(order);
      console.log("オーダー内容確認")
      console.log(order)
    },
    addOrder2(state, order){
      state.orders.push(order);
    },
    deleteItem(state, {orderItemId }){
      let order1 = state.orders.findIndex(order => order.id === orderItemId);
      state.orders.splice(order1, 1);
    },
    logoutDeleteItem(state, order){
      let order1 = state.orders.findIndex(element => element.itemId === order.id);
      state.orders.splice(order1, 1);
    },

    addOrderHistory(state,{id, order}){
      console.log('addOrderHistoryです');
      console.log(id);
      console.log(state);
      order.id = id;
      console.log(order);

      let orderedItem = state.items.find((item) => item.id === order.itemId);
      console.log('注文された商品です');
      console.log(orderedItem);

      state.order_history.push(orderedItem);
      console.log('state.order_historyの中身です')
      console.log(state.order_history);
    },

    updateOrder(state, {id, order2}){
        // console.log('addOrderHistoryです');
        // console.log(id);
        // console.log(state);
        order2.id = id;
        console.log(order2);
  
        let orderedItem = state.items.find((item) => item.id === order2.itemId);
        console.log('注文された商品です');
        console.log(orderedItem);
  
        state.order_history.push(orderedItem);
        console.log('state.order_historyの中身です')
        console.log(state.order_history);
    },
    },
  actions: {
    setLoginUser({ commit }, user) {
      commit("setLoginUser", user);
    },
    login() {
      const google_auth_provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(google_auth_provider);
    },
    logout() {
      firebase.auth().signOut();
    },
    deleteLoginUser({ commit }) {
      commit("deleteLoginUser");
    },
   addOrder({ getters, commit }, order) {
      if (getters.uid) {
          order.userId = getters.uid;
          firebase
            .firestore()
            .collection(`users/${getters.uid}/order`)
            .add(order)
            .then((doc) => {
              commit("addOrder", { id: doc.id, order });
            });
      }else{
        commit("addOrder2", order );
      }
    },
    fetchOrders({getters,commit}){
      // firebase.firestore().collection(`users/${getters.uid}/order`).get().then(snapshot=> {
      //     snapshot.forEach(doc=>commit('addOrder',{id: doc.id,order: doc.data()}))
      // })
      firebase.firestore().collection(`users/${getters.uid}/order`).get().then(snapshot=> {
        snapshot.forEach(doc =>{
            if(doc.data().status === 0){
              // console.log('doc.data()のなかみ');
              // console.log(doc.data().status);
              commit('addOrder',{id: doc.id,order: doc.data()})
            }else{
              commit('addOrderHistory', {id: doc.id,order: doc.data()})
            }
        })
      })
    },

    deleteItem({getters, commit}, {orderItemId}){
      if(getters.uid){
        firebase.firestore().collection(`users/${getters.uid}/order`).doc(orderItemId).delete().then(()=>{
          console.log('then後です');
          console.log(orderItemId)
          commit('deleteItem', { orderItemId })
        })
      }
    },
    logoutDeleteItem({commit}, order){
      console.log('僕です');
      console.log(order);
      commit('logoutDeleteItem', order);
    },
    updateOrder({getters,commit}, {id, order2}){
      console.log(typeof order2.orderPay)
      if(order2.orderPay === 0){
        order2.status = 1
      }else if(order2.orderPay === 1){
        order2.status = 2
      }
      console.log(order2)
      if(getters.uid){
        firebase.firestore().collection(`users/${getters.uid}/order`).doc(id).update(order2).then(()=>{
          commit("updateOrder", {id, order2})
        })
      }
    }
  },

  getters: {

    userName: state => state.login_user ? state.login_user.displayName : '',
    getItemById: (state) => (id) => state.items.find((item) => item.id === id),
    uid: (state) => (state.login_user ? state.login_user.uid : null),

    getCarts: state => {
      return state.orders.filter(order => order.status === 0)
    },
    
    order: (state, getters) => {return getters.getCarts.map(order => { //orderの中身はorders配列の要素一つ一つ
      let orderItem = state.items.find(item => item.id === order.itemId)
      let array = {
        id: orderItem.id,
        name: orderItem.name,
        price: orderItem.price,
      }
      return array;
    }
    )}
  },
});