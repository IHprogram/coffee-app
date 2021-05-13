<template>
  <div>
    <div class="container">
      <div class="row">
        <div
          class="table-responsive col-lg-offset-1 col-lg-10 col-md-offset-1 col-md-10 col-sm-10 col-xs-12"
        >
          <h3 class="text-center mt-4">注文履歴</h3>
          <table class="table table-striped item-list-table mt-4">
            <tbody>
              <tr>
                <th>
                  <div class="text-center">商品名</div>
                </th>
                <th>
                  <div class="text-center">価格(税込)</div>
                </th>
              </tr>
              <tr>
                <td><p>Soccer</p></td>
                <td>100円</td>
              </tr>
            </tbody>
          </table>
          <h4 class="text-center">※注文履歴はありません</h4>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-offset-5 col-xs-3">
          <div class="form-group">
            <p class="text-center mt-4">
              <router-link :to="{ name: 'Home' }"
                >トップページに戻る</router-link
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default{
  name: "OrderLog",
  data(){
    return{

    }
  },

}
</script>