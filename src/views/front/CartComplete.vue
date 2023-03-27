<template>
  <div>這裡是 購物車結帳頁</div>

  <div class="cart-complete container">
    <!--購物車訂單進度-->
    <OrderTimeLine></OrderTimeLine>
    <!-- 判斷付款完成 最後再顯示文字 -->
    <div
      v-if="order.is_paid === true"
      class="cart-complete-top d-flex flex-column justify-content-between align-items-center"
    >
      <h2 class="mb-6 mt-7 text-center h2-style">
        訂單完成！<span class="mt-2">感謝訂購</span>
      </h2>
      <h2 class="mb-6 h2-style">祝您有段美好的旅程</h2>
      <router-link class="btn btn-primary px-6 py-2 mb-6" to="/"
        >回首頁</router-link
      >
    </div>

    <form @submit.prevent="payOrder">
      <div class="row orders-confirm-complete justify-content-center">
        <!-- 訂單單商品 -->
        <div class="orders-confirm col-lg-8 mb-6">
          <h2 class="mb-5 mt-6 h2-style">訂單資訊</h2>
          <ul class="orders mb-1">
            <li class="mb-3" v-for="item in order.products" :key="item.id">
              <div class="card card-row flex-row">
                <img
                  class="card-row-img object-cover orders-img"
                  :src="item.product?.imageUrl"
                />
                <div
                  class="card-body d-flex flex-column justify-content-between"
                >
                  <h2 class="card-title mb-2 pe-5">
                    {{ item.product?.title }}
                  </h2>
                  <div
                    class="d-flex flex-md-row flex-column justify-content-md-between align-items-md-center align-items-end"
                  >
                    <p class="fs-5">數量：{{ item.qty }}</p>
                    <div class="card-price card-price-title">
                      <p class="fs-6 d-flex flex-nowrap align-items-center">
                        TWD
                        <span class="ps-2">{{ item.product?.price }}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <ul class="orders-total px-lg-3 pt-3">
            <li>
              <h3>總計</h3>
              <p class="card-price text-pink-300 text-end fs-6">
                TWD
                <span class="ps-2">{{ order.total }}</span>
              </p>
            </li>
          </ul>
        </div>
        <!-- 訂單資料 -->
        <div class="col-lg-8 mb-8">
          <ul class="cart-complete-footer px-lg-3 pt-5 border-top">
            <li>
              <h3>訂單編號</h3>
              <p class="text-right">{{ orderId }}</p>
            </li>
            <li>
              <h3>收件人姓名</h3>
              <p class="text-right">{{ order.user.name }}</p>
            </li>
            <li>
              <h3>收件人電話</h3>
              <p class="text-right">{{ order.user.tel }}</p>
            </li>
            <li>
              <h3>Email</h3>
              <p class="text-right">{{ order.user.email }}</p>
            </li>
            <li>
              <h3>付款狀態</h3>
              <p
                class="text-right paid-text-style"
                :class="{ 'text-success': order.is_paid }"
              >
                {{ order.is_paid ? "付款完成" : "尚未付款" }}
              </p>
            </li>
            <div
              class="d-flex justify-content-sm-end justify-content-center mt-5"
            >
              <button type="submit" class="btn btn-outline-danger btn-lg px-5">
                {{ order.is_paid ? "付款完成" : "確認付款" }}
              </button>
            </div>
          </ul>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import OrderTimeLine from "../../components/OrderTimeLine.vue";

import Swal from "sweetalert2";
const { VITE_API, VITE_PATH } = import.meta.env;

export default {
  data() {
    return {
      isLoading: false,
      fullPage: true,
      color: "#ACB1E7",
      order: {
        products: [],
        user: {},
      },
      orderId: "",
    };
  },
  components: { OrderTimeLine },
  methods: {
    // 取出訂單資料
    getOrder() {
      this.isLoading = true;
      this.$http
        .get(`${VITE_API}/api/${VITE_PATH}/order/${this.orderId}`)
        .then((res) => {
          this.isLoading = false;
          // 解構，並將取出的order賦予給定義資料屬性
          const { order } = res.data;
          this.order = order;
          console.log("getOrder 取出訂單資料", res);
        })
        .catch((err) => {
          const errMessage = err.response?.data?.message || "資料錯誤";
          console.log("getOrder 取出訂單資料", err.response?.data?.message);
          this.isLoading = false;
          Swal.fire({
            icon: "error",
            title: errMessage,
          });
        });
    },
    // 付款
    payOrder() {
      this.isLoading = true;
      this.$http
        .post(`${VITE_API}/api/${VITE_PATH}/pay/${this.orderId}`)
        .then((res) => {
          this.isLoading = false;
          this.getOrder();
          console.log("payOrder", res);
          Swal.fire({
            icon: "success",
            title: "確認已成功付款",
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch((err) => {
          const errMessage = err.response?.data?.message || "資料錯誤";
          this.isLoading = false;
          Swal.fire({
            icon: "error",
            title: errMessage,
          });
        });
    },
  },
  mounted() {
    // 將動態路由 訂單id賦予給定義的資料屬性
    this.orderId = this.$route.params.orderId;
    this.getOrder();
  },
};
</script>
