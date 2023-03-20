<template>
  <div
    class="row justify-content-lg-between justify-content-center align-items-center order-style"
  >
    <ul class="col cart-title pb-3 d-flex justify-content-evenly">
      <li>
        <p class="cart-radius px-md-4 px-2 py-3 text-center">Step1</p>
        <p class="px-lg-4 px-3 pt-3">建立訂單</p>
      </li>
      <li>
        <p class="cart-radius px-md-4 px-2 py-3 text-center">Step2</p>
        <p class="px-lg-4 px-3 pt-3">確認結帳</p>
      </li>
      <li>
        <p class="cart-radius px-md-4 px-2 py-3 text-center">Step3</p>
        <p class="px-lg-4 px-3 pt-3">完成訂單</p>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.order-style {
  .cart-title {
    font-weight: 500;
    font-size: 20px;
    line-height: 20px;
    padding-top: 93px;
  }
  .cart-radius {
    border-radius: 16px;
    border: 2px solid #acb1e7;
  }
}
</style>
