<template>
  <div class="container pt-lg-7">
    <!--左側選單 md -->
    <div class="row">
      <ul
        class="nav-list nav-list-md d-lg-none d-flex justify-content-center border-0 pt-sm-7 pb-sm-5"
      >
        <li>
          <a class="nav-link rounded-0">所有產品類別</a>
        </li>
        <li>
          <a class="nav-link rounded-0" href="#">行程</a>
          <i class="bi bi-dash-lg link-icon"></i>
        </li>
        <li>
          <a class="nav-link rounded-0" href="#">住宿</a>
          <i class="bi bi-dash-lg link-icon"></i>
        </li>
        <li>
          <a class="nav-link rounded-0" href="#">景點門票</a>
          <i class="bi bi-dash-lg link-icon"></i>
        </li>
      </ul>
    </div>
    <div class="row py-lg-5">
      <!--左側選單 lg-->
      <div class="col-lg-3 mb-lg-0">
        <ul
          class="nav-list d-lg-block d-none d-flex flex-lg-column flex-md-row"
        >
          <li class="">
            <a class="nav-link bg-secondary">所有產品類別</a>
          </li>
          <li class="">
            <a class="nav-link" href="#">行程</a>
          </li>
          <li class="">
            <a class="nav-link" href="#">住宿</a>
          </li>
          <li class="">
            <a class="nav-link" href="#">景點門票</a>
          </li>
        </ul>
      </div>
      <!-- 產品排列 -->
      <div class="container col-lg-9">
        <div class="d-flex justify-content-end mb-lg-4 mb-3">
          <select class="products-select" name="productsSort">
            <option value="default">產品預設排列</option>
            <option value="cheapToExpensive">價格：低至高</option>
            <option value="expensiveToCheap">價格：高至低</option>
          </select>
        </div>
        <!-- 產品列表  -->
        <ul class="products mb-7">
          <li class="mb-3" v-for="product in products" :key="product.id">
            <router-link class="card card-row" :to="`/product/${product.id}`"
              ><img
                class="card-row-img object-cover"
                :src="product.imageUrl"
                alt="Xpark"
              />
              <div
                class="card-body ps-lg-5 pe-lg-6 d-flex flex-column justify-content-between"
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
                      元
                    </p>
                  </div>
                </div>
              </div></router-link
            >
            <!-- 追蹤商品 -->
            <a class="like-icon" href="#">
              <i class="fa-regular fa-heart"></i>
              <!--點擊追蹤 愛心效果  -->
              <i class="fa-solid fa-heart collect"></i>
            </a>
            <!-- 購物車 -->
            <div class="ms-2">
              <a href="#"><i class="bi bi-cart-fill"></i></a>
            </div>
          </li>
        </ul>
        <!--pagination-->
      </div>
    </div>
  </div>
</template>

<script>
//取出環境變數
const { VITE_API, VITE_PATH } = import.meta.env;

export default {
  data() {
    return {
      products: [],
    };
  },
  methods: {
    getProducts() {
      this.$http
        .get(`${VITE_API}/api/${VITE_PATH}/products/all`)
        .then((res) => {
          this.products = res.data.products;
        });
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>
