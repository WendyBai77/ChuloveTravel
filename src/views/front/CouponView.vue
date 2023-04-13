<template>
  <div class="container">
    <div class="row justify-content-center pt-7 pb-8">
      <div class="col-lg-8">
        <h2 class="pt-5 pb-4 h2-style">折價券</h2>
        <p>※ 折價券不得使用於特殊品項商品。</p>
        <p>※ 已成立訂單不得以未使用折價券為由取消訂單。</p>
      </div>
      <ul class="col-lg-8 coupon mb-7">
        <li class="mt-6 mb-3">
          <div class="card card-row align-items-center">
            <img
              class="card-row-img object-cover d-md-block d-none ps-3"
              src="/src/assets/img/icon-logo.png"
            />
            <div class="card-body d-flex flex-column justify-content-between">
              <h2 class="card-title mb-lg-3 mb-5">
                【揪愛週年慶】全館享
                <span class="text-danger">9折 </span>優惠!
              </h2>
              <p class="truncate-multiline">
                折扣碼：<span class="text-danger" ref="copy">chulove</span>
              </p>
              <p class="truncate-multiline mb-lg-3 mb-5">
                ※ 結帳時使用折價券內之折扣碼，即享優惠。
              </p>
              <p class="truncate-multiline mb-lg-3 mb-5">
                數量有限，用完為止！
              </p>
              <div class="d-flex justify-content-end">
                <button
                  type="button"
                  class="btn btn-primary px-5"
                  @click.prevent="copyCoupon"
                >
                  領取折扣碼
                </button>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";

export default {
  data() {
    return {};
  },
  methods: {
    copyCoupon() {
      const couponCode = this.$refs.copy.textContent;
      navigator.clipboard
        .writeText(couponCode)
        .then(() => {
          Swal.fire({
            icon: "success",
            title: "已複製折扣碼",
            text: `折扣碼：${couponCode}`,
            showConfirmButton: false,
            timer: 2000,
          });
        })
        .catch(() => {
          Swal.fire({
            icon: "error",
            title: "折扣碼複製失敗",
          });
        });
    },
  },
};
</script>

<style lang="scss">
.coupon {
  li {
    height: 250px;
  }
  .card-row {
    flex-direction: row;
    color: #1e1e1e;
    border-color: #ff8ecb;
  }
  .card-row-img {
    height: 100px;
  }
}

.coupon {
  .card-body {
    p {
      font-size: 20px;
      max-width: 500px;
    }
  }
  .card-title {
    h2 {
      font-weight: 500;
      font-size: 24px;
      line-height: 30px;
    }
  }
}
</style>
