<template>
  <div>這裡是 購物車結帳頁</div>

  <div class="cart-complete container">
    <div
      class="cart-complete-top d-flex flex-column justify-content-between align-items-center"
    >
      <h2 class="mb-6 mt-7 text-center h2-style">
        訂單完成！<span class="mt-2">感謝訂購</span>
      </h2>
      <h2 class="mb-6 h2-style">祝您有段美好的旅程</h2>
      <a class="btn btn-primary px-6 py-2 mb-6" href="#">回首頁</a>
    </div>

    <div class="row orders-confirm">
      <h2 class="col mb-5 mt-6 ps-3 px-lg-7 h2-style">訂單資料</h2>
      <ul class="col orders mb-lg-7 mb-6">
        <li class="mb-3 px-lg-7">
          <div class="card card-row px-3 py-4">
            <img
              class="card-row-img object-cover orders-img"
              src="/src/assets/img/xpark.png"
              alt="Xpark"
            />
            <div class="card-body px-lg-5">
              <h2 class="card-title mb-md-7 mb-6 mt-2">
                桃園青埔 Xpark 都會型水生公園門票
              </h2>
              <p class="card-price text-end">數量 <span> 1</span></p>
              <p class="card-price text-end">NT 550</p>
            </div>
          </div>
        </li>
        <!-- 之後再改成渲染 -->
      </ul>
      <ul class="cart-complete-footer px-lg-9 pt-3 border-top">
        <li>
          <h3>訂單編號</h3>
          <p class="orders-complete text-right">202212230000</p>
        </li>
        <li>
          <h3>收件人姓名</h3>
          <p class="orders-complete text-right">王大美</p>
        </li>
        <li>
          <h3>收件人電話</h3>
          <p class="orders-complete text-right">0211111111</p>
        </li>
        <li>
          <h3>Email</h3>
          <p class="orders-complete text-right">customer@example.com</p>
        </li>
      </ul>
    </div>
  </div>
</template>
