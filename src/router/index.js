// 來自套件(載入vue-router資源)
import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/", // 匯入路徑。第一層在最前面需加上斜線
      component: () => import("../views/front/Home.vue"),
      // 新增子路由
      children: [
        {
          path: "", //沒有填入入徑，將被預設為子路由
          name: "首頁",
          component: () => import("../views/front/Index.vue"),
        },
        {
          path: "products-list",
          name: "全部產品列表",
          component: () => import("../views/front/ProductsList.vue"),
        },
        {
          path: "product/:id",
          name: "單一產品頁",
          component: () => import("../views/front/Product.vue"),
        },
        {
          path: "collection",
          name: "收藏商品",
          component: () => import("../views/front/Collection.vue"),
        },
        {
          path: "cart",
          name: "購物車",
          component: () => import("../views/front/Cart.vue"),
        },
        {
          path: "coupon",
          name: "折價券",
          component: () => import("../views/front/Coupon.vue"),
        },
      ],
    },
    {
      path: "/login",
      name: "登入頁",
      component: () => import("../views/admin/Login.vue"),
    },
    {
      path: "/admin",
      name: "登入後台",
      component: () => import("../views/admin/Dashboard.vue"),
      children: [
        {
          path: "products-list",
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
