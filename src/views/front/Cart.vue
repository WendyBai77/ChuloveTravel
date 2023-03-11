<template>
  <div class="cart container">
    <div
      class="row justify-content-lg-between justify-content-sm-center align-items-center"
    >
      <ul
        class="col cart-title pt-7 pb-3 pt-md-8 pb-md-2 d-flex justify-content-evenly"
      >
        <li>
          <p class="cart-radius px-md-4 px-2 py-3 text-center">Step1</p>
          <p class="px-lg-4 px-3 pt-3">建立訂單</p>
        </li>
        <li>
          <p class="cart-radius px-md-4 px-2 py-3 text-center">Step2</p>
          <p class="px-lg-4 px-3 pt-3">確認付款</p>
        </li>
        <li>
          <p class="cart-radius px-md-4 px-2 py-3 text-center">Step3</p>
          <p class="px-lg-4 px-3 pt-3">完成訂單</p>
        </li>
      </ul>

      <div class="container d-flex flex-column flex-lg-row align-items-start">
        <!-- 確認訂單 -->
        <div class="row orders-confirm">
          <h2 class="col-lg-12 mb-5 mt-6 h2-style">確認訂單</h2>
          <ul class="col-lg-12 orders mb-lg-7 mb-3">
            <li class="mb-3">
              <div class="card card-row px-3 py-4">
                <img
                  class="card-row-img object-cover orders-img"
                  src="/src/assets/img/xpark.png"
                  alt="Xpark"
                />
                <div
                  class="card-body d-flex flex-column justify-content-between"
                >
                  <h2 class="card-title mb-md-6 mb-3 mt-2">
                    桃園青埔 Xpark 都會型水生公園門票
                  </h2>
                  <p class="card-price text-end">NT 550</p>
                </div>
              </div>
              <!-- 刪除 icon -->
              <a class="orders-del" href="#">
                <i class="bi bi-trash-fill"></i>
              </a>
              <!-- 加減號 icon-->
              <div class="ms-2 count-icon">
                <a class="count-btn disabled"
                  ><i class="fa-solid fa-circle-plus"></i>
                </a>
                <span class="position-absolute">1</span>
                <a class="count-btn disabled"
                  ><i class="fa-solid fa-circle-minus"></i
                ></a>
              </div>
            </li>
            <!-- 之後再改成渲染 -->
          </ul>
          <ul class="col-lg-12 orders-total px-lg-3 pt-3 border-top">
            <li>
              <h3>商品總額</h3>
              <p class="card-price text-end">NT 550</p>
            </li>
            <li>
              <h3 class="total-text-lh">折扣碼</h3>
              <div class="orders-coupon">
                <input type="text" name="coupon" />
                <button class="btn btn-primary" type="button">確認</button>
              </div>
            </li>
            <li>
              <h3>折抵</h3>
              <p class="card-price text-end">NT 550</p>
            </li>
            <li>
              <h3>總計</h3>
              <p class="card-price text-pink-300 text-end">NT 550</p>
            </li>
            <li class="pt-7 mb-7">
              <a class="darkgary" href="#"><h3>❮ 繼續購物</h3></a>
              <a class="btn btn-primary px-lg-5 px-4" href="#">確認訂單</a>
            </li>
          </ul>
        </div>
        <!-- 收件資料 -->
        <div class="row orders-form justify-content-lg-center mx-0">
          <h2 class="col-lg-7 mb-5 mt-6 h2-style">收件資料</h2>
          <!-- 表單驗證 開始 (區域註冊)。透過ref讓外層元件可取用內層元件 -->
          <div class="col-lg-7 orders row px-0 mx-0">
            <div class="mb-3">
              <label for="name" class="form-label">收件人姓名</label>
              <v-field
                id="name"
                name="姓名"
                type="text"
                class="form-control"
                placeholder="請輸入姓名"
                rules="required"
              >
              </v-field>
              <error-message
                name="姓名"
                class="invalid-feedback"
              ></error-message>
            </div>

            <div class="mb-3">
              <label for="tel" class="form-label">收件人電話</label>
              <v-field
                id="tel"
                name="電話"
                type="text"
                class="form-control"
                placeholder="請輸入電話"
                rules="required|min:8|max:10"
              ></v-field>
              <error-message
                name="電話"
                class="invalid-feedback"
              ></error-message>
            </div>

            <div class="mb-3">
              <label for="address" class="form-label">收件人地址</label>
              <v-field
                id="address"
                name="地址"
                type="text"
                class="form-control"
                placeholder="請輸入地址"
                rules="required"
              ></v-field>
              <error-message
                name="地址"
                class="invalid-feedback"
              ></error-message>
            </div>

            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <v-field
                id="email"
                name="email"
                type="email"
                class="form-control"
                placeholder="customer@example.com"
                rules="email|required"
              ></v-field>
              <error-message
                name="email"
                class="invalid-feedback"
              ></error-message>
            </div>

            <div class="mb-3">
              <label for="message" class="form-label">訂單備註</label>
              <textarea
                id="message"
                class="form-control"
                cols="30"
                rows="5"
              ></textarea>
            </div>
            <div class="text-end">
              <button type="submit" class="btn btn-danger px-lg-5 px-4">
                送出訂單
              </button>
            </div>
          </div>
          <!-- 表單驗證 結束 (區域註冊) -->
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>
