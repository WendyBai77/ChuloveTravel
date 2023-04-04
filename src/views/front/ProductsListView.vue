<template>
  <VueLoading
    v-model:active="isLoading"
    :color="color"
    :is-full-page="fullPage"
  />
  <div class="banner-products container">
    <div class="banner-content banner-content-products">
      <h2 class="text-gary-100 mb-4">
        <span> 愛最大 玩最好</span> 創造美好回憶不用等
      </h2>
    </div>
  </div>
  <div class="container pt-lg-3">
    <!--左側選單 md -->
    <div class="row">
      <ul
        class="nav-list nav-list-md d-lg-none d-flex justify-content-center border-0 pt-sm-7 pb-sm-5"
      >
        <li v-for="category in categories" :key="category">
          <a
            class="nav-link"
            style="cursor: pointer"
            @click.prevent="changeCategory(category)"
            :class="{ active: category === filterCategory }"
          >
            {{ category }}
            <i class="bi bi-dash-lg link-icon"></i>
          </a>
        </li>
      </ul>
    </div>
    <div class="row py-lg-5">
      <!--左側選單 lg-->
      <div class="col-lg-3 mb-lg-0">
        <ul
          class="nav-list d-lg-block d-none d-flex flex-lg-column flex-md-row"
        >
          <li v-for="category in categories" :key="category">
            <a
              class="nav-link"
              style="cursor: pointer"
              @click.prevent="changeCategory(category)"
              :class="{ active: category === filterCategory }"
            >
              {{ category }}</a
            >
          </li>
        </ul>
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
        <!-- 產品列表 判斷篩選條件是否為空  -->
        <template v-if="filterProducts.length === 0">
          <h2 class="mt-7 text-center">無相符產品</h2>
        </template>
        <template v-else>
          <ul class="products mb-7">
            <li
              class="mb-3"
              v-for="product in filterProducts"
              :key="product.id"
            >
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
import { mapActions, mapState, mapWritableState } from "pinia";
import cartStore from "../../stores/cartStore";
import productsStore from "../../stores/productsStore";
import collectionsStore from "@/stores/collectionsStore";

export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions(cartStore, ["addToCart"]),
    ...mapActions(productsStore, [
      "getProducts",
      "changeCategory",
      "sortProduct",
    ]),
    ...mapActions(collectionsStore, ["toggleFollow"]),
  },
  computed: {
    ...mapState(productsStore, [
      "products",
      "renderProduct",
      "filterProducts",
      "filterCategory",
      "categories",
      "isLoading",
      "fullPage",
      "color",
    ]),
    //mapWritableState可讀寫
    ...mapWritableState(productsStore, ["selectSort"]),
    ...mapState(collectionsStore, ["followIds"]),
  },
  mounted() {
    this.getProducts();
  },
};
</script>
