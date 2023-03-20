<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center mb-7">
      <li class="page-item" :class="{ disabled: !pages.has_pre }">
        <a
          class="page-link"
          href="#"
          aria-label="Previous"
          @click.prevent="getProduct(pages.current_page - 1)"
        >
          <span aria-hidden="true">&#x276e;</span>
        </a>
      </li>

      <li
        class="page-item"
        :class="{ active: page === pages.current_page }"
        v-for="page in pages.total_pages"
        :key="page + 'page'"
      >
        <a class="page-link" href="#" @click.prevent="getProduct(page)">{{
          page
        }}</a>
      </li>

      <li
        class="page-item"
        :class="{ disabled: pages.current_page === pages.total_pages }"
      >
        <a
          class="page-link"
          href="#"
          aria-label="Next"
          @click.prevent="getProduct(pages.current_page + 1)"
        >
          <span aria-hidden="true">&#x276f;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
// 從外部引入資料(外層->內層)。pages為內層元件定義的名稱
// 前一頁、下一頁、當前頁：使用props屬性<外層傳內層>，並使用同一個函式的方式來切換頁面。
export default {
  props: ["pages", "getProduct"],
};
</script>

<style lang="scss">
.page-item.active {
  border-bottom: 2px solid #d6ecfa;
}
</style>
