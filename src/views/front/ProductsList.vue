<template>
  <div class="container pt-lg-7">
    <!--左側選單 md -->
    <div class="row pt-md-5">
      <ul
        class="nav-list nav-list-md d-lg-none d-flex justify-content-center border-0"
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
    <div class="row py-lg-3">
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
          <li class="mb-3">
            <a href="#" class="card card-row"
              ><img
                class="card-row-img object-cover"
                src="/src/assets/img/xpark.png"
                alt="Xpark"
              />
              <div class="card-body ps-lg-5 pe-lg-6">
                <div>
                  <h2 class="card-title mb-3">
                    桃園青埔 Xpark 都會型水生公園門票
                  </h2>
                  <p class="truncate-multiline mb-4">
                    Xpark 於 2022
                    年初推行大型企劃『Xbook~流向我們的物語』，透過五官享受海底之書的魅力!
                    深受大小朋友的喜愛，情人約會、親子同樂都適合!
                  </p>
                </div>
                <div class="d-flex justify-content-end align-items-center">
                  <div class="card-price">
                    <p>NT 550<span class="d-sm-inline d-none"> / 每人</span></p>
                  </div>
                </div>
              </div></a
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
          <!-- 之後再改成渲染 -->
          <li class="mb-3">
            <a href="#" class="card card-row"
              ><img
                class="card-row-img object-cover"
                src="/src/assets/img/xpark.png"
                alt="Xpark"
              />
              <div class="card-body ps-lg-5 pe-lg-6">
                <div>
                  <h2 class="card-title mb-3">
                    桃園青埔 Xpark 都會型水生公園門票
                  </h2>
                  <p class="truncate-multiline mb-4">
                    Xpark 於 2022
                    年初推行大型企劃『Xbook~流向我們的物語』，透過五官享受海底之書的魅力!
                    深受大小朋友的喜愛，情人約會、親子同樂都適合!
                  </p>
                </div>
                <div class="d-flex justify-content-end align-items-center">
                  <div class="card-price">
                    <p>
                      NT 550 <span class="d-sm-inline d-none"> / 每人</span>
                    </p>
                  </div>
                </div>
              </div></a
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
// 匯入 jquery
import $ from "jquery";

export default {
  data() {
    return {};
  },
  mounted() {
    $(document).ready(function () {
      $(".like-icon").click(function (e) {
        // console.log("click");
        e.preventDefault();
        $(this).find(".fa-heart").toggle();
      });
    });
  },
};
</script>
