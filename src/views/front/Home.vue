<template>
  <Navbar></Navbar>
  <!-- 作為網頁顯示使用 -->
  <router-view></router-view>

  <Footer></Footer>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Navbar from "@/components/Navbar.vue";

// 將Home.vue預設匯出，App.vue 才能做匯入
export default {
  data() {
    return {};
  },
  components: { Navbar, Footer },
};
</script>
