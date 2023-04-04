// 來自套件(載入vue-router資源)
import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/", // 匯入路徑。第一層在最前面需加上斜線
      component: () => import("../views/front/HomeView.vue"),
      // 新增子路由
      children: [
        {
          path: "", //沒有填入入徑，將被預設為子路由
          name: "首頁",
          component: () => import("../views/front/IndexView.vue"),
        },
        {
          path: "nature",
          name: "熱愛自然",
          component: () => import("../views/front/NatureView.vue"),
        },
        {
          path: "exhibition",
          name: "話題展覽",
          component: () => import("../views/front/ExhibitionView.vue"),
        },
        {
          path: "hotel",
          name: "熱門住宿",
          component: () => import("../views/front/HotelView.vue"),
        },
        {
          path: "camp",
          name: "戶外露營",
          component: () => import("../views/front/CampView.vue"),
        },
        {
          path: "theme-park",
          name: "樂園爽玩",
          component: () => import("../views/front/ThemeParkView.vue"),
        },
        {
          path: "island",
          name: "離島旅行",
          component: () => import("../views/front/IslandView.vue"),
        },
        {
          path: "products",
          name: "products",
          component: () => import("../views/front/ProductsListView.vue"),
        },
        {
          path: "product/:id",
          name: "單一產品頁",
          component: () => import("../views/front/ProductView.vue"),
        },
        {
          path: "collection",
          name: "收藏商品",
          component: () => import("../views/front/CollectionView.vue"),
        },
        {
          path: "cart",
          name: "購物車",
          component: () => import("../views/front/CartView.vue"),
        },
        {
          path: "cart-complete/:orderId",
          name: "購物車完成",
          component: () => import("../views/front/CartComplete.vue"),
        },
        {
          path: "coupon",
          name: "折價券",
          component: () => import("../views/front/CouponView.vue"),
        },
        {
          path: "city/:name",
          name: "探索城市",
          component: () => import("../views/front/CityView.vue"),
        },
      ],
    },
    {
      path: "/login",
      name: "登入頁",
      component: () => import("../views/admin/LoginView.vue"),
    },
    {
      path: "/admin",
      name: "登入後台",
      component: () => import("../views/admin/DashboardView.vue"),
      children: [
        {
          path: "products",
          name: "後台產品頁",
          component: () => import("../views/admin/DashboardProductsList.vue"),
        },
        {
          path: "orders",
          name: "後台訂單頁",
          component: () => import("../views/admin/DashboardOrders.vue"),
        },
      ],
    },
  ],
});
// Vue Router的設定檔建立好之後，就可以匯出給main.js使用
export default router;
