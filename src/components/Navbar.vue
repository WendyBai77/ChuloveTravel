<template>
  <div class="header">
    <!-- navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
      <!-- mx-auto bootstrap會自動產生 margin 加align-->
      <div class="container-fluid mx-auto align-items-center">
        <!-- lg以上隱藏 logo-->
        <h1>
          <router-link class="navbar-brand d-lg-none" to="/"
            >揪愛一起玩</router-link
          >
        </h1>
        <!-- .navbar-toggler 漢堡式選單按鈕 -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <!-- 選單項目 .collapse .navbar-collapse 用於外層中斷點群組和隱藏導覽列內容 -->
        <div
          class="collapse navbar-collapse justify-content-evenly"
          id="navbarSupportedContent"
        >
          <!-- lg以上顯示 logo-->
          <h1>
            <router-link class="navbar-brand d-lg-block d-none" to="/"
              >揪愛一起玩</router-link
            >
          </h1>

          <ul class="navbar-nav mb-2 mb-lg-0 main-menu main-menu-lg-mix">
            <li class="nav-item px-2">
              <a
                class="nav-link darkgary"
                aria-current="page"
                data-toggle
                href="#"
                >行程</a
              >
            </li>
            <li class="nav-item px-2">
              <a
                class="nav-link darkgary"
                aria-current="page"
                data-toggle
                href="#"
                >住宿</a
              >
            </li>
            <li class="nav-item px-2">
              <a
                class="nav-link darkgary"
                aria-current="page"
                data-toggle
                href="#"
                >景點門票</a
              >
            </li>
          </ul>
          <!--lg以上顯示 （漢堡選單 圖示呈現)-->
          <ul class="navbar-nav mb-2 mb-lg-0 px-1 icon-menu icon-menu-lg">
            <li class="nav-item px-1 d-lg-block d-none">
              <a
                class="nav-link"
                aria-current="page"
                data-toggle
                href="#"
                title="收藏"
              >
                <img
                  src="/src/assets/img/Property1=ph_heart-fill.svg"
                  alt="collect"
                />
              </a>
            </li>
            <li class="nav-item px-1 d-lg-block d-none">
              <a
                class="nav-link"
                aria-current="page"
                data-toggle
                href="#"
                title="折價券"
              >
                <img
                  src="/src/assets/img/Property1=mdi_coupon.svg"
                  alt="coupon"
                />
              </a>
            </li>
            <li class="nav-item px-1 d-lg-block d-none">
              <router-link
                class="nav-link"
                aria-current="page"
                data-toggle
                to="/login"
              >
                <img
                  src="/src/assets/img/Property1=account.svg"
                  alt="account"
                />
              </router-link>
            </li>
            <!-- 購物車 -->
            <li class="nav-item px-1 d-lg-block d-none">
              <router-link
                class="nav-link"
                aria-current="page"
                data-toggle
                to="/cart"
              >
                <img src="/src/assets/img/Property1=Variant8.svg" alt="cart" />
                <span
                  class="position-absolute translate-middle badge rounded-pill bg-pink-300"
                >
                  {{ carts.length }}
                </span>
              </router-link>
            </li>
          </ul>
          <!-- lg以下顯示 （漢堡選單 圖示轉文字)-->
          <ul
            class="navbar-nav mb-2 mb-lg-0 px-1 icon-menu d-lg-none icon-menu-lg-mix"
          >
            <li class="nav-item px-1">
              <a
                class="nav-link darkgary"
                aria-current="page"
                data-toggle
                href="#"
                >收藏
              </a>
            </li>
            <li class="nav-item px-1">
              <a
                class="nav-link darkgary"
                aria-current="page"
                data-toggle
                href="#"
                >折價券
              </a>
            </li>
            <li class="nav-item px-1">
              <a
                class="nav-link darkgary"
                aria-current="page"
                data-toggle
                href="#"
                >會員中心
              </a>
            </li>
            <li class="nav-item px-1">
              <router-link
                class="nav-link darkgary"
                aria-current="page"
                data-toggle
                to="/cart"
                >購物車</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import cartStore from "../stores/cartStore";

export default {
  computed: {
    ...mapState(cartStore, ["carts"]),
  },
  methods: {
    ...mapActions(cartStore, ["getCart"]),
  },
  mounted() {
    this.getCart();
  },
};
</script>
