<template>
  <div class="container">
    <div class="row justify-content-center pt-7" v-if="followList.length">
      <div class="col-lg-8">
        <h2 class="pt-5 pb-4 h2-style">追蹤清單</h2>
        <!-- 追蹤商品  -->
        <ul class="products mb-7">
          <li class="mb-3" v-for="item in followList" :key="item.id">
            <router-link class="card card-row" :to="`/product/${item.id}`"
              ><img class="card-row-img object-cover" :src="item.imageUrl" />
              <div
                class="card-body ps-md-5 pe-md-6 d-flex flex-column justify-content-between"
              >
                <div>
                  <h2 class="card-title mb-3">
                    {{ item.title }}
                  </h2>
                  <p class="truncate-multiline mb-4">
                    {{ item.description }}
                  </p>
                </div>
                <div class="d-flex justify-content-end">
                  <div class="card-price">
                    <p class="fs-6">
                      TWD
                      <span> {{ item.price }}</span>
                    </p>
                  </div>
                </div>
              </div></router-link
            >
            <!-- 追蹤商品  -->
            <a
              class="like-icon"
              href="#"
              @click.prevent="toggleFollow(item.id)"
            >
              <i
                class="fa-regular fa-heart"
                v-if="followIds.indexOf(item.id) === -1"
              ></i>
              <i class="fa-solid fa-heart collect" v-else></i>
            </a>
            <!-- 購物車 -->
            <button
              type="button"
              class="ms-2 border-0 p-0"
              @click="() => addToCart(item.id)"
            >
              <i class="bi bi-cart-fill"></i>
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div
      v-else
      class="d-flex flex-column justify-content-center align-items-center pt-5 pb-7"
    >
      <h2 class="mt-7 text-center">目前追蹤清單內無商品！ 請盡情挑選喔～</h2>
      <img
        src="/src/assets/img/Property1=Variant8.svg"
        alt="cart"
        width="100"
        class="mt-3"
      />
      <RouterLink class="btn btn-primary mt-3 px-4" to="/products">
        出發Go
      </RouterLink>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import cartStore from "../../stores/cartStore";
import productsStore from "../../stores/productsStore";
import collectionsStore from "@/stores/collectionsStore";

export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions(cartStore, ["addToCart"]),
    ...mapActions(productsStore, ["getProducts"]),
    ...mapActions(collectionsStore, ["getFollows", "toggleFollow"]),
  },
  computed: {
    ...mapState(productsStore, ["products", "isLoading", "fullPage", "color"]),
    ...mapState(collectionsStore, ["followList", "followIds"]),
  },
  mounted() {
    this.getProducts();
  },
};
</script>

<style lang="scss">
.h2-style {
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
}
</style>
