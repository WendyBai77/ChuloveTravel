<template>
  <div class="container">
    <div class="d-flex flex-column justify-content-center align-items-center">
      <h1 class="pt-5">
        <i class="bi bi-exclamation-triangle pe-2"></i>404<span
          class="fs-4 ps-2"
          >Page not found</span
        >
      </h1>
      <h2 class="pt-5 pb-5 fs-3">
        您目前查看的頁面不存在
        <span class="d-block pt-2">請回到首頁繼續選購～</span>
      </h2>

      <RouterLink class="btn btn-primary px-4" to="/">回首頁</RouterLink>
    </div>
  </div>
</template>
