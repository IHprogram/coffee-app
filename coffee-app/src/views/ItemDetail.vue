<template>
  <div>
    <h2>商品詳細</h2>
    <img
      class="card-img-top"
      :src="item.imagePath"
      style="width: 200px; height: 200px"
    />
    <p>商品のID: {{ item.id }}</p>
    <p>商品名: {{ item.name }}</p>
    <p>説明: {{ item.description }}</p>
    <p>価格: {{ item.price }}円（税込み）</p>

    <select v-model="selected" @change="numberChange">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
      <option>7</option>
      <option>8</option>
      <option>9</option>
      <option>10</option>
      <option>11</option>
      <option>12</option>
    </select>

    <p>合計:{{ total_price }}円（税込み）</p>

    <button type="button" @click="myClick">カートに入れる</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      item: {},
      selected: 1,
      total_price: 0,
      order: {},
    };
  },
  methods: {
    myClick() {
      console.log("myClickです！");
      this.order = {};
      // console.log("空にした後のthis.orderの中身");
      // console.log(this.order);

      this.order.itemId = this.item.id;
      this.order.name = this.item.name;
      this.order.imagePath = this.item.imagePath;
      this.order.price = this.item.price;
      this.order.status = 0;

      for (let i = 1; i <= this.selected; i++) {
        // console.log(`addOrder${i}回目！`);
        // console.log(this.order);
        this.addOrder(this.order);
      }

      this.$router.push({ name: "Cart" }, () => {});

      console.log(this.$store.state.orders);
    },
    numberChange() {
      this.total_price = this.item.price * this.selected;
    },
    ...mapActions(["addOrder"]),
  },
  created() {
    const item = this.$store.getters.getItemById(this.$route.params.item_id);

    if (item) {
      this.item = item;
    }

    this.total_price = this.item.price;
  },
};
</script>