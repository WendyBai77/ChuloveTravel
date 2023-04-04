<template>
  <NavbarComponent></NavbarComponent>
  <!-- 作為網頁顯示使用 -->
  <router-view></router-view>

  <FooterComponent></FooterComponent>
</template>

<script>
import FooterComponent from "@/components/FooterComponent.vue";
import NavbarComponent from "@/components/NavbarComponent.vue";

// 將Home.vue預設匯出，App.vue 才能做匯入
export default {
  data() {
    return {};
  },
  components: { NavbarComponent, FooterComponent },
};
</script>
