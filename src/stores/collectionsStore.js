import { defineStore } from "pinia";
import Swal from "sweetalert2";

const collectionsStore = defineStore("collection", {
  state: () => {
    return {
      followList: [],
      followIds: [],
      // 儲存後端 API 取得的商品列表
      products: [],
    };
  },
  actions: {
    // 從productsStore.js中取得產品資料
    tempProducts(products) {
      this.products = products;
      // 取得追蹤商品列表
      this.getFollows();
    },
    // 取得追蹤商品id
    getFollowIds() {
      this.followIds = JSON.parse(localStorage.getItem("followIds")) || [];
    },
    // 取得追蹤商品列表
    getFollows() {
      this.getFollowIds();
      // 先清空followList陣列資料，再將篩選後的值拋回
      this.followList = [];
      this.products.forEach((product) => {
        // 當商品已在追蹤商品ID清單中，就將其加入到 followList 中
        if (this.followIds.indexOf(product.id) > -1) {
          this.followList.push(product);
        }
      });
      //   console.log("getFollows_followList", this.followList);
    },
    //切換使用者是否追蹤特定商品
    toggleFollow(id) {
      const followId = this.followIds.indexOf(id);
      //   console.log("toggleFollow_followId", followId);
      // 沒有找到該商品ID，則添加ID至追蹤列表
      if (followId === -1) {
        this.followIds.push(id);
        Swal.fire({
          icon: "success",
          title: "已加入追蹤",
          showConfirmButton: false,
          timer: 1000,
        });
      } else {
        this.followIds.splice(followId, 1);
        Swal.fire({
          icon: "success",
          title: "已取消追蹤",
          showConfirmButton: false,
          timer: 1000,
        });
      }
      localStorage.setItem("followIds", JSON.stringify(this.followIds));
      // 更新追蹤商品列表
      this.getFollows();
    },
  },
});

export default collectionsStore;
