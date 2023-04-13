<template>
  <VueLoading
    v-model:active="isLoading"
    :color="color"
    :is-full-page="fullPage"
  />
  <div v-if="cart.carts?.length">
    <div class="cart container">
      <!--購物車訂單進度，改成引入元件-->
      <OrderTimeLine></OrderTimeLine>
      <div
        class="container d-flex flex-column flex-lg-row align-items-start justify-content-center row gx-lg-6"
      >
        <!-- 確認訂單 -->
        <div class="orders-confirm col-lg-8">
          <h2 class="mb-5 mt-6 h2-style">確認訂單</h2>
          <ul class="orders mb-1">
            <li class="mb-3" v-for="item in cart.carts" :key="item.id">
              <div class="card card-row flex-row">
                <img
                  class="card-row-img object-cover orders-img"
                  :src="item.product.imageUrl"
                  alt="Xpark"
                />
                <div
                  class="card-body d-flex flex-column justify-content-between"
                >
                  <h2 class="card-title mb-2 pe-6">
                    {{ item.product.title }}
                  </h2>
                  <div
                    class="d-flex flex-md-row flex-column justify-content-md-between align-items-md-center align-items-end"
                  >
                    <!-- 加減號 icon-->
                    <div class="count-icon input-group input-group-lg">
                      <button
                        type="button"
                        @click.prevent="updateCart(item, item.qty - 1)"
                        class="count-btn border-0 bg-transparent p-0 pe-1"
                        :disabled="loadingStatus.loadingItem || item.qty === 1"
                      >
                        <i class="fa-solid fa-circle-minus"></i>
                      </button>
                      <input
                        type="text"
                        class="form-control border-0 text-center shadow-none px-0 pe-1"
                        placeholder=""
                        aria-label="Example text with button addon"
                        aria-describedby="button-addon1 inputGroup-sizing-lg"
                        readonly
                        :value="item.qty"
                      />
                      <button
                        type="button"
                        @click.prevent="updateCart(item, item.qty + 1)"
                        class="count-btn border-0 bg-transparent p-0 ps-1"
                        :disabled="loadingStatus.loadingItem || item.qty === 20"
                      >
                        <i class="fa-solid fa-circle-plus"></i>
                      </button>
                    </div>
                    <div class="card-price card-price-title">
                      <p class="fs-6 d-flex flex-nowrap align-items-center">
                        TWD
                        <span class="ps-2">{{ item.total }}</span>
                      </p>
                    </div>
                  </div>
                  <!-- 刪除 icon-->
                  <button
                    type="button"
                    @click="removeCartItem(item.id)"
                    class="orders-del border-0 p-0"
                  >
                    <i class="bi bi-trash-fill"></i>
                  </button>
                </div>
              </div>
            </li>
          </ul>
          <div class="text-end">
            <button
              class="btn btn-outline-danger mb-lg-7 mb-5"
              type="button"
              @click="deleteAllCarts"
            >
              清空購物車
            </button>
          </div>
          <ul class="orders-total px-lg-3 pt-3 border-top">
            <li>
              <h3>商品總額</h3>
              <p class="card-price fs-6">
                TWD
                <span class="ps-2"> {{ total }} </span>
              </p>
            </li>
            <li>
              <h3 class="total-text-lh" style="width: 120px">折扣碼</h3>
              <div
                class="input-group orders-coupon justify-content-end align-items-center"
              >
                <input
                  type="text"
                  name="coupon"
                  class="form-control"
                  v-model="coupon_code"
                  placeholder="請輸入折扣碼"
                />
                <button
                  class="btn btn-primary"
                  style="height: 40px"
                  type="button"
                  @click="addCoupon(coupon_code)"
                >
                  確認
                </button>
              </div>
            </li>
            <li>
              <h3>總計</h3>
              <p class="card-price text-danger text-end fs-6">
                TWD
                <span class="ps-2">{{ final_total }}</span>
              </p>
            </li>
            <li class="pt-7 mb-7">
              <router-link class="darkgary" to="/products"
                ><h3>❮ 繼續購物</h3></router-link
              >
            </li>
          </ul>
        </div>
        <!-- 收件資料 -->
        <div class="orders-form col-lg-4">
          <h2 class="mb-5 mt-6 h2-style">收件資料</h2>
          <!-- 表單驗證 透過ref讓外層元件可取用內層元件 -->
          <div class="orders px-0 mx-0">
            <v-form ref="form" v-slot="{ errors }" @submit="createOrder">
              <div class="mb-3">
                <label for="name" class="form-label">收件人姓名</label>
                <v-field
                  id="name"
                  name="姓名"
                  type="text"
                  class="form-control"
                  :class="{ 'is-invalid': errors['姓名'] }"
                  placeholder="請輸入姓名"
                  rules="required"
                  v-model="form.user.name"
                >
                </v-field>
                <error-message
                  name="姓名"
                  class="invalid-feedback"
                ></error-message>
              </div>

              <div class="mb-3">
                <label for="tel" class="form-label">收件人電話</label>
                <v-field
                  id="tel"
                  name="電話"
                  type="text"
                  class="form-control"
                  :class="{ 'is-invalid': errors['電話'] }"
                  placeholder="請輸入電話"
                  rules="required|min:8|max:10"
                  v-model="form.user.tel"
                ></v-field>
                <error-message
                  name="電話"
                  class="invalid-feedback"
                ></error-message>
              </div>

              <div class="mb-3">
                <label for="address" class="form-label">收件人地址</label>
                <v-field
                  id="address"
                  name="地址"
                  type="text"
                  class="form-control"
                  :class="{ 'is-invalid': errors['地址'] }"
                  placeholder="請輸入地址"
                  rules="required"
                  v-model="form.user.address"
                ></v-field>
                <error-message
                  name="地址"
                  class="invalid-feedback"
                ></error-message>
              </div>

              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <v-field
                  id="email"
                  name="email"
                  type="email"
                  class="form-control"
                  :class="{ 'is-invalid': errors['email'] }"
                  placeholder="請輸入 Email"
                  rules="email|required"
                  v-model="form.user.email"
                ></v-field>
                <error-message
                  name="email"
                  class="invalid-feedback"
                ></error-message>
              </div>

              <div class="mb-3">
                <label for="message" class="form-label">訂單備註</label>
                <textarea
                  id="message"
                  class="form-control"
                  cols="30"
                  rows="5"
                  v-model="form.message"
                ></textarea>
              </div>
              <div class="text-end">
                <button type="submit" class="btn btn-danger px-lg-5 px-4">
                  送出訂單
                </button>
              </div>
            </v-form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    v-else
    class="d-flex flex-column justify-content-center align-items-center p-5"
  >
    <h2 class="mt-7 text-center">目前購物車內無商品！ 請盡情挑選喔～</h2>
    <img
      src="/src/assets/img/Property1=Variant8.svg"
      alt="cart"
      width="100"
      class="mt-3"
    />
    <RouterLink class="btn btn-primary mt-3 px-4" to="/products">
      出發Go
    </RouterLink>
  </div>
</template>

<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import cartStore from "../../stores/cartStore/";
import OrderTimeLine from "../../components/OrderTimeLine.vue";

import Swal from "sweetalert2";
const { VITE_API, VITE_PATH } = import.meta.env;

export default {
  data() {
    return {
      isLoading: false,
      fullPage: true,
      color: "#ACB1E7",
      // 收件者表單驗證
      form: {
        user: {
          name: "",
          email: "",
          tel: "",
          address: "",
        },
        message: "",
      },
    };
  },
  components: { OrderTimeLine },
  computed: {
    ...mapState(cartStore, ["cart", "total", "final_total", "loadingStatus"]),
    //mapWritableState可讀寫
    ...mapWritableState(cartStore, ["coupon_code"]),
  },
  methods: {
    ...mapActions(cartStore, [
      "getCart",
      "removeCartItem",
      "deleteAllCarts",
      "updateCart",
      "addCoupon",
    ]),
    // 結帳 送出表單
    createOrder() {
      this.isLoading = true;
      const order = this.form;
      // 傳入表單資料(按照api格式，將表單賦予給order)
      this.$http
        .post(`${VITE_API}/api/${VITE_PATH}/order`, { data: order })
        .then((res) => {
          this.isLoading = false;
          const { orderId } = res.data;
          Swal.fire({
            icon: "success",
            title: res.data.message,
            showConfirmButton: false,
            timer: 1500,
          });
          // $refs可抓到，內層元件內的 ref="form"來重製表單
          this.$refs.form.resetForm();
          // 路徑導向結帳完成頁
          this.$router.push(`/cart-complete/${orderId}`);
        })
        .catch(() => {
          Swal.fire({
            icon: "error",
            title: "訂單送出失敗",
          });
        });
    },
  },
  mounted() {
    this.getCart();
  },
};
</script>
