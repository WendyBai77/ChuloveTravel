<template>
  <VueLoading
    v-model:active="isLoading"
    :color="color"
    :is-full-page="fullPage"
  />
  <div
    class="banner-recommend container mb-5 gx-0"
    :class="`banner-recommend-${explore.engTitle}`"
  >
    <div class="banner-recommend-content banner-content-products">
      <h2 class="text-gary-100 mb-4">
        <span>推薦專區</span> {{ explore.title }}
      </h2>
    </div>
  </div>
  <div class="container">
    <div class="row py-lg-3 recommend-sidebar">
      <!--左側選單-->
      <div class="col-lg-3 mb-6">
        <!-- 篩選地區 -->
        <form
          action=""
          class="border border-primary px-3 py-4 rounded-3 sidebar-sticky"
        >
          <p class="mb-3">篩選地區</p>
          <select
            class="form-select border-primary rounded-3"
            @change="selectArea"
            v-model="city"
          >
            <option value="" disabled>請選擇地區</option>
            <option v-for="city in area" :key="city" :value="city">
              {{ city }}
            </option>
          </select>
        </form>
      </div>
      <!-- 產品排列 -->
      <div class="container col-lg-9">
        <div class="d-flex justify-content-end mb-lg-4 mb-3">
          <select
            class="products-select text-center"
            name="productsSort"
            v-model="selectSort"
            @change="sortProduct"
          >
            <option disabled value="default">產品預設排列</option>
            <option value="cheapToExpensive">價格：低至高</option>
            <option value="expensiveToCheap">價格：高至低</option>
          </select>
        </div>
        <!-- 判斷篩選條件是否為空  -->
        <template v-if="renderProduct.length === 0">
          <h2 class="my-7 text-center">無相符產品</h2>
        </template>
        <template v-else>
          <ul class="products mb-7">
            <li class="mb-3" v-for="product in renderProduct" :key="product.id">
              <router-link class="card card-row" :to="`/product/${product.id}`"
                ><img
                  class="card-row-img object-cover"
                  :src="product.imageUrl"
                />
                <div
                  class="card-body ps-md-5 pe-md-6 d-flex flex-column justify-content-between"
                >
                  <div>
                    <h2 class="card-title mb-3">
                      {{ product.title }}
                    </h2>
                    <p class="truncate-multiline mb-4">
                      {{ product.description }}
                    </p>
                  </div>
                  <div class="d-flex justify-content-end">
                    <div class="card-price">
                      <p class="fs-6">
                        TWD
                        <span> {{ product.price }}</span>
                      </p>
                    </div>
                  </div>
                </div></router-link
              >
              <!-- 追蹤商品  -->
              <a
                class="like-icon"
                href="#"
                @click.prevent="toggleFollow(product.id)"
              >
                <i
                  class="fa-regular fa-heart"
                  v-if="followIds.indexOf(product.id) === -1"
                ></i>
                <i class="fa-solid fa-heart collect" v-else></i>
              </a>
              <!-- 購物車 -->
              <button
                type="button"
                class="ms-2 border-0 p-0"
                @click="() => addToCart(product.id)"
              >
                <i class="bi bi-cart-fill"></i>
              </button>
            </li>
          </ul>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import cartStore from "@/stores/cartStore";
import productsStore from "@/stores/productsStore";
import collectionsStore from "@/stores/collectionsStore";

export default {
  props: ["explore"],
  data() {
    return {
      renderProduct: [],
      categories: ["行程", "住宿", "景點門票"],
      category: "",
      selectSort: "default",
      area: [
        "台北",
        "新北",
        "基隆",
        "桃園",
        "新竹",
        "苗栗",
        "台中",
        "南投",
        "彰化",
        "雲林",
        "嘉義",
        "台南",
        "高雄",
        "屏東",
        "宜蘭",
        "花蓮",
        "台東",
        "澎湖",
        "金門",
        "馬祖",
        "綠島",
        "蘭嶼",
        "龜山島",
        "小琉球",
      ],
      city: "",
    };
  },
  methods: {
    ...mapActions(cartStore, ["addToCart"]),
    ...mapActions(productsStore, ["getProducts", "getRecommendProduct"]),
    ...mapActions(collectionsStore, ["toggleFollow"]),
    // 將篩選推薦類別的商品列表，再篩選地區（比對品名與地區名是否相符）
    selectArea() {
      this.renderProduct = this.recommendProducts.filter((product) => {
        return product.title.match(this.city);
      });
      // console.log("selectArea_this.renderProduct", this.renderProduct);
    },
    sortProduct() {
      if (this.selectSort === "expensiveToCheap") {
        this.renderProduct.sort((a, b) => b.price - a.price);
      } else if (this.selectSort === "cheapToExpensive") {
        this.renderProduct.sort((a, b) => a.price - b.price);
      }
    },
  },
  computed: {
    ...mapState(productsStore, [
      "products",
      "isLoading",
      "fullPage",
      "color",
      "recommendProducts",
    ]),
    ...mapState(collectionsStore, ["followIds"]),
  },
  //監聽產品變化，當變化就重新取得當前推薦類別的產品列表
  watch: {
    products() {
      this.getRecommendProduct(this.explore.engTitle);
      this.renderProduct = this.recommendProducts;
      // console.log("this.renderProduct", this.renderProduct);
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>
