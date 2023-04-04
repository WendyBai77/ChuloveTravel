<template>
  <VueLoading
    v-model:active="isLoading"
    :color="color"
    :is-full-page="fullPage"
  />
  <div
    class="banner-category container mb-5 gx-0"
    :class="`banner-category-${city.engTitle}`"
  >
    <div class="banner-category-content banner-content-products">
      <h2 class="text-gary-100 mb-4">
        {{ city.title }}<span>推薦景點行程</span>
      </h2>
    </div>
  </div>
  <div class="container">
    <div class="row py-lg-3 city-sidebar">
      <!--左側選單-->
      <div class="col-lg-3 mb-6">
        <form
          action=""
          class="border border-primary px-3 py-4 rounded-3 sidebar-sticky"
        >
          <p class="mb-3">篩選分類</p>
          <select
            class="form-select border-primary rounded-3"
            @change="selectCategory(category)"
            v-model="category"
          >
            <option value="" disabled>請選擇類別</option>
            <option
              v-for="category in categories"
              :key="category"
              :value="category"
            >
              {{ category }}
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
  data() {
    return {
      city: {
        title: "",
        engTitle: "",
      },
      renderProduct: [],
      categories: ["行程", "住宿", "景點門票"],
      category: "",
      selectSort: "default",
    };
  },
  methods: {
    ...mapActions(cartStore, ["addToCart"]),
    ...mapActions(productsStore, ["getProducts", "getCityProduct"]),
    ...mapActions(collectionsStore, ["toggleFollow"]),
    selectCity(name) {
      if (name === "hualien") {
        this.city.title = "花蓮";
        this.city.engTitle = "hualien";
      } else if (name === "kaohsiung") {
        this.city.title = "高雄";
        this.city.engTitle = "kaohsiung";
      } else if (name === "nantou") {
        this.city.title = "南投";
        this.city.engTitle = "nantou";
      } else if (name === "taichung") {
        this.city.title = "台中";
        this.city.engTitle = "taichung";
      }
    },
    //取得對應城市商品後再篩選分類＆價格排序
    selectCategory(category) {
      this.renderProduct = this.cityProducts.filter((product) => {
        return product.category.match(category);
      });
      //   console.log("selectCategory_this.renderProduct", this.renderProduct);
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
      "cityProducts",
    ]),
    ...mapState(collectionsStore, ["followIds"]),
  },
  //監聽產品變化，當變化就重新取得當前城市的產品列表
  watch: {
    products() {
      this.getCityProduct(this.city.title);
      this.renderProduct = this.cityProducts;
      //   console.log("this.renderProduct", this.renderProduct);
    },
  },
  mounted() {
    this.getProducts();
    // console.log(this.$route.params);
    const { name } = this.$route.params;
    this.selectCity(name);
  },
};
</script>
