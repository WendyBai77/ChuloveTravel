<template>
  <div class="header">
    <!-- navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
      <div class="container mx-auto align-items-center navbar-cart-position">
        <!-- lg以上隱藏 logo-->
        <h1>
          <router-link class="navbar-brand d-lg-none" to="/"
            >揪愛一起玩</router-link
          >
        </h1>
        <!-- lg以上隱藏 購物車 icon-->
        <div
          class="navbar-nav mb-2 mb-lg-0 px-1 icon-menu navbar-cart-lg-none d-lg-none"
        >
          <div class="nav-item px-1 icon-cart-style">
            <router-link class="nav-link nav-link-active" to="/cart">
              <img src="/src/assets/img/Property1=Variant8.svg" alt="cart" />
              <span
                v-if="cart.carts?.length"
                class="position-absolute translate-middle badge rounded-pill bg-pink-300"
              >
                {{ cart.carts?.length }}
              </span>
            </router-link>
          </div>
        </div>
        <!-- .navbar-toggler 漢堡式選單按鈕。 -->
        <button
          class="navbar-toggler"
          type="button"
          data-auto="true"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          @click="toggleNavCollapse"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <!-- 選單項目 .collapse .navbar-collapse 用於外層中斷點群組和隱藏導覽列內容。並使用ref定義元素 -->
        <div
          class="collapse navbar-collapse justify-content-between"
          id="navbarSupportedContent"
          ref="collapse"
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
                class="nav-link nav-link-active"
                style="cursor: pointer"
                aria-current="page"
                data-toggle
                @click.prevent="
                  toCategory('行程');
                  closeNavCollapse();
                "
                >行程</a
              >
            </li>
            <li class="nav-item px-2">
              <a
                class="nav-link nav-link-active"
                style="cursor: pointer"
                aria-current="page"
                data-toggle
                @click.prevent="
                  toCategory('住宿');
                  closeNavCollapse();
                "
                >住宿</a
              >
            </li>
            <li class="nav-item px-2">
              <a
                class="nav-link nav-link-active"
                style="cursor: pointer"
                aria-current="page"
                data-toggle
                @click.prevent="
                  toCategory('景點門票');
                  closeNavCollapse();
                "
                >景點門票</a
              >
            </li>
          </ul>
          <!--lg以上顯示 （漢堡選單 圖示呈現)-->
          <ul
            class="navbar-nav mb-2 mb-lg-0 px-1 icon-menu icon-menu-lg align-items-center"
          >
            <li class="nav-item px-1 d-lg-block d-none">
              <router-link
                class="nav-link nav-link-active"
                aria-current="page"
                data-toggle
                to="/collection"
              >
                <img
                  src="/src/assets/img/Property1=ph_heart-fill.svg"
                  alt="collect"
                />
              </router-link>
            </li>
            <li class="nav-item px-1 d-lg-block d-none">
              <router-link
                class="nav-link nav-link-active"
                aria-current="page"
                data-toggle
                to="/coupon"
              >
                <img
                  src="/src/assets/img/Property1=mdi_coupon.svg"
                  alt="coupon"
                />
              </router-link>
            </li>
            <li class="nav-item px-1 d-lg-block d-none">
              <router-link
                class="nav-link nav-link-active"
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
            <!--lg以上顯示 購物車icon-->
            <li class="nav-item px-1 d-lg-block d-none">
              <!-- 滑鼠移入觸發函式 -->
              <a @mouseenter="showCartBlock()">
                <img src="/src/assets/img/Property1=Variant8.svg" alt="cart" />
                <span
                  class="position-absolute translate-middle badge rounded-pill bg-pink-300"
                >
                  {{ cart.carts?.length }}
                </span>
              </a>
            </li>
          </ul>
          <!-- lg以上顯示 購物車清單 (滑鼠移開觸發函式) -->
          <div
            @mouseleave="hideCartBlock()"
            ref="cartHover"
            class="d-none cart-hover-block bg-light shadow-lg rounded-2"
          >
            <p class="text-center bg-primary p-2 fs-5 rounded-top">
              購物車清單
            </p>
            <!-- 當購物車有商品時 -->
            <div
              v-if="cart.carts?.length"
              class="cart-hover-istrue p-3"
              style="height: 350px; overflow-y: scroll"
            >
              <ul>
                <li class="card mb-3" v-for="item in cart.carts" :key="item.id">
                  <div class="row">
                    <div class="col">
                      <div class="card-body">
                        <div
                          class="d-flex justify-content-between align-items-center"
                        >
                          <h5 class="card-title pe-6">
                            {{ item.product.title }}
                          </h5>
                          <button
                            type="button"
                            @click="removeCartItem(item.id)"
                            class="d-none d-md-block btn ms-3 link-purple-200 icon-trash-style"
                          >
                            <i class="bi bi-trash-fill"></i>
                          </button>
                        </div>
                        <div
                          class="d-flex justify-content-between align-items-center pt-3"
                        >
                          <ul class="text-gary-400">
                            <li>數量：{{ item.qty }}</li>
                          </ul>
                          <p class="fs-7 text-purple-200">
                            TWD<span class="fs-5 ms-2 text-gary-500">{{
                              item.total
                            }}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div
              v-if="cart.carts?.length"
              class="px-3 pb-3 d-flex justify-content-between align-items-center"
            >
              <div class="card-price">
                <p class="ps-1">{{ cart.carts?.length }}件商品</p>
                <p class="fs-6 ps-1">
                  總計
                  <span class="fs-5 px-1 text-pink-300"> {{ total }}</span>
                  元
                </p>
              </div>
              <RouterLink to="/cart" class="btn btn-primary">
                查看購物車
              </RouterLink>
            </div>
            <!-- 購物車無商品時 -->
            <div
              v-else
              class="d-flex flex-column justify-content-center align-items-center p-5"
            >
              <p class="mb-2">
                目前購物車內無商品！<span class="d-block">請盡情挑選喔～</span>
              </p>
              <img
                src="/src/assets/img/Property1=Variant8.svg"
                alt="cart"
                width="80"
              />
              <RouterLink class="btn btn-primary mt-3 px-4" to="/products">
                出發Go
              </RouterLink>
            </div>
          </div>
          <!-- lg以下顯示 （漢堡選單 圖示轉文字)。設定關閉漢堡選單-->
          <ul
            class="navbar-nav mb-2 mb-lg-0 px-1 icon-menu d-lg-none icon-menu-lg-mix"
          >
            <li class="nav-item px-1">
              <router-link
                class="nav-link nav-link-active"
                aria-current="page"
                data-toggle
                to="/collection"
                @click="closeNavCollapse"
                >收藏
              </router-link>
            </li>
            <li class="nav-item px-1">
              <router-link
                class="nav-link nav-link-active"
                aria-current="page"
                data-toggle
                to="/coupon"
                @click="closeNavCollapse"
                >折價券
              </router-link>
            </li>
            <li class="nav-item px-1">
              <router-link
                class="nav-link nav-link-active"
                aria-current="page"
                data-toggle
                to="/login"
                @click="closeNavCollapse"
              >
                會員中心</router-link
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
import Collapse from "bootstrap/js/dist/collapse";
import productsStore from "../stores/productsStore";
const store = productsStore();

export default {
  data() {
    return {
      collapse: {},
    };
  },
  computed: {
    ...mapState(cartStore, ["cart", "total"]),
  },
  methods: {
    ...mapActions(cartStore, ["getCart", "removeCartItem"]),
    // 開啟關閉購物車清單視窗
    showCartBlock() {
      this.$refs.cartHover.classList.remove("d-none");
    },
    hideCartBlock() {
      this.$refs.cartHover.classList.add("d-none");
    },
    // 導覽列切換產品列表分類
    toCategory(name) {
      store.changeCategory(name);
      this.$router.push("/products");
    },
    // 摺疊漢堡選單
    toggleNavCollapse() {
      this.collapse.toggle();
    },
    // 關閉漢堡選單
    closeNavCollapse() {
      this.collapse.hide();
    },
  },
  mounted() {
    this.getCart();
    // 透過$refs指向collapse，初始不啟用摺疊狀態
    this.collapse = new Collapse(this.$refs.collapse, {
      toggle: false,
    });
  },
};
</script>

<style lang="scss">
.nav-link-active {
  color: #1e1e1e;
  &:hover {
    color: #ff8ecb;
  }
}
.nav-link-active.active {
  background: transparent;
}
</style>
