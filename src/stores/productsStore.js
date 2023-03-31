import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";

import collectionsStore from "./collectionsStore";
const follow = collectionsStore();

const { VITE_API, VITE_PATH } = import.meta.env;

const productsStore = defineStore("productsStore", {
  state: () => {
    return {
      products: [],
      selectSort: "default",
      isLoading: false,
      fullPage: true,
      color: "#ACB1E7",
      // 原定義全部商品，依照點擊來篩選目前類別
      filterCategory: "全部商品",
      categories: ["全部商品", "行程", "住宿", "景點門票"],
      cityProducts: [],
    };
  },
  actions: {
    // 取得產品列表
    getProducts() {
      this.isLoading = true;
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      axios
        .get(`${VITE_API}/api/${VITE_PATH}/products/all`)
        .then((res) => {
          const { products } = res.data;
          this.products = products;
          console.log("this.products", this.products);
          follow.tempProducts(this.products);
          this.isLoading = false;
        })
        .catch((err) => {
          console.log(err.response.data.message);
          const errMessage =
            err.response?.data?.message || "資料取得失敗，請稍後再試";
          this.isLoading = false;
          Swal.fire({
            icon: "error",
            title: errMessage,
          });
        });
    },
    changeCategory(item) {
      this.filterCategory = item;
      // 修改分類後，呼叫價格排序
      this.sortProduct();
    },
    sortProduct() {
      let filteredProducts = this.products;
      //判斷"非全部商品"再進行商品分類篩選
      if (this.filterCategory !== "全部商品") {
        filteredProducts = this.products.filter(
          (product) => product.category === this.filterCategory
        );
      }
      if (this.selectSort === "expensiveToCheap") {
        filteredProducts.sort((a, b) => b.price - a.price);
      } else if (this.selectSort === "cheapToExpensive") {
        filteredProducts.sort((a, b) => a.price - b.price);
      }
    },
    // 取得探索城市對應商品
    getCityProduct(city) {
      this.cityProducts = this.products.filter((product) => {
        return product.title.match(city);
      });
    },
  },
  getters: {
    // 根據 state.products 和 state.filterCategory 的值，篩選出符合條件的當前分類 currentCategory
    filterProducts: (state) => {
      const currentCategory = state.products.filter((product) =>
        state.filterCategory === "全部商品"
          ? state.products
          : product.category === state.filterCategory
      );
      return currentCategory;
    },
  },
});

export default productsStore;
