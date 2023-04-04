<template>
  <RecommendCategory :explore="explore"></RecommendCategory>
</template>

<script>
import RecommendCategory from "@/components/RecommendCategory.vue";

export default {
  data() {
    return {
      explore: {
        title: "熱愛自然",
        engTitle: "nature",
      },
    };
  },
  components: { RecommendCategory },
};
</script>
