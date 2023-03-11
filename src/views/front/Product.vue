<template>
  <div class="container pt-0 mb-8">
    <div class="row">
      <div class="pt-md-5">
        <div class="product row d-flex justify-content-between">
          <div class="mb-3">
            <img
              class="card-row-img object-cover"
              :src="product.imageUrl"
              alt="Xpark"
            />
            <div href="#" class="card card-row pt-3">
              <div
                class="card-body ps-lg-5 pe-lg-6 px-2 pt-4 d-flex justify-content-between"
              >
                <div class="product-top">
                  <h2 class="card-title mb-4">
                    {{ product.title }}
                  </h2>
                  <p class="mb-4">
                    {{ product.description }}
                  </p>
                </div>
                <div class="pt-6 d-flex justify-content-end align-items-center">
                  <div class="card-price d-flex flex-column">
                    <p class="fs-6">
                      TWD <span>{{ product.price }} </span>元
                    </p>
                    <a class="btn btn-primary mt-3" href="#">加入購物車</a>
                  </div>
                </div>
              </div>
            </div>
            <!-- 追蹤商品 -->
            <a class="like-icon" href="#">
              <i class="fa-regular fa-heart"></i>
              <!--點擊追蹤 愛心效果  -->
              <i class="fa-solid fa-heart collect"></i>
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
          </div>
        </div>
      </div>
    </div>
    <!-- 商品說明 -->
    <div class="card-body ps-lg-5 pe-lg-6 px-2">
      <div class="product-body">
        <h2 class="card-title mb-4">商品說明</h2>
        <h3 class="mb-4 pb-7">
          {{ product.content }}
        </h3>
      </div>
      <!-- 參考別人怎麼玩-->
      <div class="d-flex flex-rowalign-items-center">
        <div class="reference container product-footer border-top">
          <h2 class="mb-5 mt-7 h2-style">參考別人怎麼玩 不怕踩雷氣噗噗</h2>
          <div class="row justify-content-center">
            <div class="card col-lg-6">
              <a
                v-if="product.Url_reference"
                :href="product.Url_reference"
                target="_blank"
              >
                <img
                  :src="product.imageUrl_reference"
                  class="card-img-top reference-card-img-top product-card-img-top object-cover position-relative"
                  alt="參考遊記"
                />
                <div
                  class="card-body reference-card-body pt-5 text-gary-500 position-relative"
                >
                  <h4 class="card-text">{{ product.description_reference }}</h4>
                  <p class="card-text pt-2">{{ product.content_reference }}</p>
                </div>
              </a>
              <a v-else href="#">
                <img
                  :src="product.imageUrl_reference"
                  class="card-img-top reference-card-img-top product-card-img-top object-cover position-relative"
                  alt="參考遊記"
                />
                <div
                  class="card-body reference-card-body pt-5 text-gary-500 position-relative"
                >
                  <h4 class="card-text">{{ product.description_reference }}</h4>
                  <p class="card-text pt-2">{{ product.content_reference }}</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const { VITE_API, VITE_PATH } = import.meta.env;

export default {
  data() {
    return {
      product: {},
    };
  },
  methods: {
    getProduct() {
      const { id } = this.$route.params;
      this.$http
        .get(`${VITE_API}/api/${VITE_PATH}/product/${id}`)
        .then((res) => {
          console.log(res);
          this.product = res.data.product;
        });
    },
  },
  mounted() {
    this.getProduct();
  },
};
</script>
