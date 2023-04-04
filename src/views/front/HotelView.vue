<template>
  <RecommendCategory :explore="explore"></RecommendCategory>
</template>

<script>
import RecommendCategory from "@/components/RecommendCategory.vue";

export default {
  data() {
    return {
      explore: {
        title: "熱門住宿",
        engTitle: "hotel",
      },
    };
  },
  components: { RecommendCategory },
};
</script>
