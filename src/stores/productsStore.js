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
      // 推薦商品列表
      recommendProducts: [],
      // 替換多組推薦類別關鍵字
      natureKeyword: ["體驗", "林", "山", "鹽田"],
      exhibitionKeyword: ["展", "展覽"],
      hotelKeyword: ["住宿", "民宿"],
      campKeyword: ["露營"],
      paradiseKeyword: ["樂園", "城堡", "文化村"],
      islandKeyword: [
        "澎湖",
        "金門",
        "馬祖",
        "綠島",
        "蘭嶼",
        "龜山島",
        "小琉球",
      ],
    };
  },
  actions: {
    // 取得產品列表
    getProducts() {
      this.isLoading = true;
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
    // 取得推薦商品列表（切換不同推薦類別關鍵字）
    getRecommendProduct(recommendProducts) {
      if (recommendProducts === "nature") {
        this.recommendProducts = this.products.filter((product) => {
          return this.natureKeyword.some((word) =>
            product.title.includes(word)
          );
        });
      } else if (recommendProducts === "exhibition") {
        this.recommendProducts = this.products.filter((product) => {
          return this.exhibitionKeyword.some((word) =>
            product.title.includes(word)
          );
        });
      } else if (recommendProducts === "hotel") {
        this.recommendProducts = this.products.filter((product) => {
          return this.hotelKeyword.some((word) => product.title.includes(word));
        });
      } else if (recommendProducts === "camp") {
        this.recommendProducts = this.products.filter((product) => {
          return this.campKeyword.some((word) => product.title.includes(word));
        });
      } else if (recommendProducts === "theme-park") {
        this.recommendProducts = this.products.filter((product) => {
          return this.paradiseKeyword.some((word) =>
            product.title.includes(word)
          );
        });
      } else if (recommendProducts === "island") {
        this.recommendProducts = this.products.filter((product) => {
          return this.islandKeyword.some((word) =>
            product.title.includes(word)
          );
        });
      }
    },
  },
  getters: {
    //將state內資料帶入。篩選出符合條件的當前分類 currentCategory
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
