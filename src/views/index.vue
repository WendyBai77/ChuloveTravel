<template>
  <div class="header">
    <!-- 嘗試用bootstrap做漢堡選單 -->
    <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
      <!-- mx-auto bootstrap會自動產生 margin 加align-->
      <div class="container-fluid mx-auto align-items-center">
        <!-- 平板以上隱藏 logo-->
        <h1>
          <a class="navbar-brand d-lg-none" href="index.html"> 揪愛一起玩 </a>
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
        <!-- 選單項目&漢堡式折疊選單 -->
        <!-- .collapse .navbar-collapse 用於外層中斷點群組和隱藏導覽列內容 -->
        <div
          class="collapse navbar-collapse justify-content-evenly"
          id="navbarSupportedContent"
        >
          <!-- 平板以上顯示 logo-->
          <h1>
            <a class="navbar-brand d-lg-block d-none" href="index.html">
              揪愛一起玩
            </a>
          </h1>

          <ul class="navbar-nav mb-2 mb-lg-0 main-menu">
            <li class="nav-item px-2">
              <a
                class="nav-link darkGary"
                aria-current="page"
                data-toggle
                href="#"
                >行程</a
              >
            </li>
            <li class="nav-item px-2">
              <a
                class="nav-link darkGary"
                aria-current="page"
                data-toggle
                href="#"
                >住宿</a
              >
            </li>
            <li class="nav-item px-2">
              <a
                class="nav-link darkGary"
                aria-current="page"
                data-toggle
                href="#"
                >景點門票</a
              >
            </li>
          </ul>
          <ul class="navbar-nav mb-2 mb-lg-0 px-1 icon-menu">
            <li class="nav-item px-1">
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
            <li class="nav-item px-1">
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
            <li class="nav-item px-1">
              <a
                class="nav-link"
                aria-current="page"
                data-toggle
                href="#"
                title="會員中心"
              >
                <img
                  src="/src/assets/img/Property1=account.svg"
                  alt="account"
                />
              </a>
            </li>
            <li class="nav-item px-1">
              <a
                class="nav-link"
                aria-current="page"
                data-toggle
                href="#"
                title="購物車"
              >
                <img src="/src/assets/img/Property1=Variant8.svg" alt="cart" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>

  <div class="banner container">
    <div class="banner-content">
      <h2 class="text-gary-100 mb-4">
        <span> 愛最大 玩最好</span> 創造美好回憶不用等
      </h2>
      <a class="btn btn-primary" href="#">說走就走 出發Go</a>
    </div>
  </div>

  <div class="content">
    <div class="container">
      <h2 class="mb-3">揪愛推薦</h2>
      <ul class="recommend row">
        <li class="col-lg-2 col-sm-6 flex-md-column mb-4">
          <a class="btn btn-gary-100 btnStyle" href="#">
            <img src="/src/assets/img/Property1=01.svg" alt="nature" />
            <h3>熱愛大自然</h3>
          </a>
        </li>
        <li class="col-lg-2 col-sm-6 flex-md-column mb-4">
          <a class="btn btn-gary-100 btnStyle" href="#">
            <img src="/src/assets/img/Property1=02.svg" alt="nature" />
            <h3>話題展覽</h3>
          </a>
        </li>
        <li class="col-lg-2 col-sm-6 flex-md-column mb-4">
          <a class="btn btn-gary-100 btnStyle" href="#">
            <img src="/src/assets/img/Property1=03.svg" alt="nature" />
            <h3>熱門住宿</h3>
          </a>
        </li>
        <li class="col-lg-2 col-sm-6 flex-md-column mb-4">
          <a class="btn btn-gary-100 btnStyle" href="#">
            <img src="/src/assets/img/Property1=04.svg" alt="nature" />
            <h3>戶外露營</h3>
          </a>
        </li>
        <li class="col-lg-2 col-sm-6 flex-md-column mb-4">
          <a class="btn btn-gary-100 btnStyle" href="#">
            <img src="/src/assets/img/Property1=05.svg" alt="nature" />
            <h3>樂園玩透透</h3>
          </a>
        </li>
        <li class="col-lg-2 col-sm-6 flex-md-column mb-4">
          <a class="btn btn-gary-100 btnStyle" href="#">
            <img src="/src/assets/img/Property1=06.svg" alt="nature" />
            <h3>離島旅行</h3>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
// 匯入jquery
import $ from "jquery";

export default {
  data() {
    return {};
  },
  mounted() {
    $(".nav-link").on("click", function () {
      $(".navbar-collapse").collapse("hide");
    });
  },
};
</script>
