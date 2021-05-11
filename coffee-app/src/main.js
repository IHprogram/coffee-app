import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import firebase from "firebase";

Vue.config.productionTip = false;

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyC-2Z_M4odOHr6eweI2YAfIOCfONW0N4mo",
  authDomain: "coffee-app-77ef5.firebaseapp.com",
  projectId: "coffee-app-77ef5",
  storageBucket: "coffee-app-77ef5.appspot.com",
  messagingSenderId: "877556372346",
  appId: "1:877556372346:web:6c62911555e0cacd747cc3",
  measurementId: "G-M55CJB0383",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
