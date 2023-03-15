import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";

const { VITE_API, VITE_PATH } = import.meta.env;

const cartStore = defineStore("cartStore", {
  state: () => {
    return {
      carts: [],
      total: 0,
      final_total: 0,
    };
  },
  actions: {
    // 取得購物車列表
    getCart() {
      axios.get(`${VITE_API}/api/${VITE_PATH}/cart`).then((res) => {
        console.log("getCart()", res);
        this.carts = res.data.data.carts;
        this.total = res.data.data.total;
        this.final_total = res.data.data.final_total;
      });
    },
    // 加入購物車
    addToCart(id, qty = 1) {
      const cart = {
        product_id: id,
        qty,
      };
      //傳入購物車資料(按照api格式 將cart放在data物件內)
      axios
        .post(`${VITE_API}/api/${VITE_PATH}/cart`, { data: cart })
        .then((res) => {
          Swal.fire({
            icon: "success",
            title: res.data.message,
            showConfirmButton: false,
            timer: 1500,
          });
          this.getCart(); //更新購物車資料
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: err.response.data.message,
          });
        });
    },
  },
  // getters 概念同「computed」
  getters: {},
});

export default cartStore;
