import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";

const { VITE_API, VITE_PATH } = import.meta.env;

const cartStore = defineStore("cartStore", {
  state: () => {
    return {
      cart: {},
      total: 0,
      final_total: 0,
      isLoading: false,
      fullPage: true,
      color: "#ACB1E7",
      loadingStatus: {
        loadingItem: "", //存id，判斷使用
      },
      coupon_code: "",
    };
  },
  actions: {
    // 取得購物車列表
    getCart() {
      this.isLoading = true;
      axios
        .get(`${VITE_API}/api/${VITE_PATH}/cart`)
        .then((res) => {
          // console.log("getCart()", res);
          this.cart = res.data.data;
          this.total = res.data.data.total;
          this.final_total = res.data.data.final_total;
          this.qty = res.data.data.qty;
          this.isLoading = false;
        })
        .catch((err) => {
          this.isLoading = false;
          Swal.fire({
            icon: "error",
            title: err.response.data.message,
          });
        });
    },
    // 加入購物車
    addToCart(id, qty = 1) {
      this.isLoading = true;
      this.loadingStatus.loadingItem = id;
      const cart = {
        product_id: id,
        qty,
      };
      //傳入購物車資料(按照api格式 將cart放在data物件內)
      axios
        .post(`${VITE_API}/api/${VITE_PATH}/cart`, { data: cart })
        .then((res) => {
          this.isLoading = false;
          this.loadingStatus.loadingItem = "";
          Swal.fire({
            icon: "success",
            title: res.data.message,
            showConfirmButton: false,
            timer: 1500,
          });
          this.getCart(); //更新(取得購物車資料）
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: err.response.data.message,
          });
        });
    },
    // 更新購物車
    updateCart(item, qty) {
      this.isLoading = true;
      this.loadingStatus.loadingItem = item.id;
      const cart = {
        product_id: item.product_id,
        //qty以傳入參數設定屬性
        qty,
      };
      axios
        .put(`${VITE_API}/api/${VITE_PATH}/cart/${item.id}`, { data: cart })
        .then((res) => {
          console.log("更新購物車:", res);
          this.isLoading = false;
          this.loadingStatus.loadingItem = "";
          Swal.fire({
            icon: "success",
            title: res.data.message,
            showConfirmButton: false,
            timer: 1500,
          });
          this.getCart();
        })
        .catch((err) => {
          this.loadingStatus.loadingItem = "";
          Swal.fire({
            icon: "error",
            title: err.response.data.message,
          });
        });
    },

    //清空購物車
    deleteAllCarts() {
      this.isLoading = true;
      axios
        .delete(`${VITE_API}/api/${VITE_PATH}/carts`)
        .then((res) => {
          this.isLoading = false;
          Swal.fire({
            icon: "success",
            title: res.data.message,
            showConfirmButton: false,
            timer: 1500,
          });
          this.getCart();
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: err.response.data.message,
          });
        });
    },
    // 刪除購物車指定商品
    removeCartItem(id) {
      this.isLoading = true;
      this.loadingStatus.loadingItem = id;
      axios
        .delete(`${VITE_API}/api/${VITE_PATH}/cart/${id}`)
        .then((res) => {
          this.isLoading = false;
          this.loadingStatus.loadingItem = "";
          Swal.fire({
            icon: "success",
            title: res.data.message,
            showConfirmButton: false,
            timer: 1500,
          });
          this.getCart();
        })
        .catch((err) => {
          this.loadingStatus.loadingItem = "";
          Swal.fire({
            icon: "error",
            title: err.response.data.message,
          });
        });
    },

    //折扣碼
    addCoupon(couponCode) {
      this.isLoading = true;
      this.coupon_code = couponCode;
      const coupon = {
        code: this.coupon_code,
      };
      axios
        .post(`${VITE_API}/api/${VITE_PATH}/coupon`, { data: coupon })
        .then((res) => {
          this.isLoading = false;
          Swal.fire({
            icon: "success",
            title: `已套用折價券：${this.coupon_code}` || res.data.message,
            showConfirmButton: false,
            timer: 1500,
          });
          this.getCart();
          this.coupon_code = "";
        })
        .catch((err) => {
          const errMessage = err.response?.data?.message || "輸入的資料錯誤";
          this.isLoading = false;
          Swal.fire({
            icon: "error",
            title: errMessage,
          });
        });
    },
  },
  getters: {},
});

export default cartStore;
