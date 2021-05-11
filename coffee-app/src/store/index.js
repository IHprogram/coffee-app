import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: [
      {
        id: 1,
        name: "Gorgeous4サンド",
        explain:
          "人気の定番具材「ハム」と「チキン」をセットにした食べごたえ抜群のサンドイッチです。",
        price: 480,
      },
      {
        id: 2,
        name: "エスプレッソフラペチーノ",
        explain:
          "ひと口目に感じるエスプレッソは「リストレット」という方法で抽出した力強い香りと優しい苦味を、ふた口目は全体を混ぜて、こだわりのクリームから来るアフォガートのような味わいをお楽しみください。リフレッシュしたい時や、ほっとひと息つきたい時にも、何度でも飲みたくなるフラペチーノ®です。",
        price: 530,
      },
      {
        id: 3,
        name: "Specialドーナツ",
        explain:
          "ドーナツ生地の中に、なめらかで風味豊かなキャラメルフィリングを入れ、仕上げにキャラメルのビター感と香ばしさが楽しめるキャラメルコーティングをかけました。",
        price: 250,
      },
    ],
    order: [],
    login_user: null,
  },
  mutations: {
    setLoginUser(state, user) {
      state.login_user = user;
    },
    deleteLoginUser(state) {
      state.login_user = null;
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
    addOrder({ commit }, item) {
      commit("addOrder", item);
    },
  },
  getters: {
    getItemById: (state) => (id) => state.items.find((item) => item.id === id),
  },
});
